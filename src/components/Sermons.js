import React, { Component } from 'react';
import {db, storage} from '../firebase';
import Sermon from './Sermon'
import { Typography } from '@material-ui/core';

let sermonAudioLinks = [];
let sermons = [];


// Add sermons from singular
const testSermon = db.collection('sermons').doc('KxxJzmIeI7IARWus470d').get().then((sermons) => sermons.data()).then(async(sermon) => {
    const audiolink = await storage.ref(sermon.audio).getDownloadURL()
    console.log(audiolink)
    return {...sermon, audiolink}
})

// add sermons from collection
const sermonAudio = db.collection("sermons").get().then(function(querySnapshot) {
  querySnapshot.forEach(async function(doc) {
      
      console.log(doc.id, " => ", doc.data());
      let result = await doc.data().audio;
      let audiolink = await storage.ref((result)).getDownloadURL()
      sermonAudioLinks.push({...doc.data(), audiolink})
      
  });
});




export default class Sermons extends Component {
  constructor(props) {
      super(props)

      this.state = {
        sermon: null,
        sermons: null
      }

    

  }

  
  
  componentDidMount() {
      testSermon.then((sermon) => this.setState({sermon}))     
      sermonAudio.then(() => this.setState({sermons: sermonAudioLinks}))
    }

  render() {
    
    
    if (this.state.sermons == null) {
    return (
        <div>
        <Typography variant="h3" component="h3" align="center" gutterBottom={true} style={{color: '#fff', marginTop: '20px'}} >
        Sermons</Typography>
        
      </div>
    )
}
          sermons = this.state.sermons.map((sermon) => 
          <Sermon key={sermon.title} title={sermon.title} preacher={sermon.preacher} audio={sermon.audiolink} />    
      )
          console.log(sermons)
  
    return (
      
      <div>
        <Typography variant="h3" gutterBottom={true} align="center" component="h3" style={{color: '#fff', marginTop: '20px'}} >
        Current Sermons</Typography>

        {sermons}

        {/* <Sermon title={this.state.sermon.title} preacher={this.state.sermon.preacher} audio={this.state.sermon.audiolink} /> */}
      </div>
    )
  }
}
