import React, { Component } from 'react';
import {db, storage} from '../firebase';
import Sermon from './Sermon'

// Add sermons from singular
const testSermon = db.collection('sermons').doc('KxxJzmIeI7IARWus470d').get().then((sermons) => sermons.data()).then(async(sermon) => {
    const audiolink = await storage.ref(sermon.audio).getDownloadURL()
    return {...sermon, audiolink}
})

// const allSermons = db.collection('sermons').get().then((querySnapshot) => {
//   querySnapshot.forEach(async (sermon) => {
//     console.log(`${sermon.id} => ${sermon.data().audio}`);
   
//     let audio_link = await storage.ref(sermon.audio).getDownloadURL()
//     return {...sermon, audio_link}
//   })
// })


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
      // allSermons.then((sermons) => this.setState({sermons}))
  }


  render() {
if (this.state.sermon == null) {
    return (
        <div>
        <h1>Sermons</h1>
        <Sermon title="Test" preacher="Test" />
      </div>
    )
}

    return (
      <div>
        
        <audio id={this.state.sermon.title} src={this.state.sermon.audiolink}></audio>
        <h1>Sermons</h1>
        <Sermon title={this.state.sermon.title} preacher={this.state.sermon.preacher} />
      </div>
    )
  }
}
