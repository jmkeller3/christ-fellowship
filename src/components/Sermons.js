import React, { Component } from 'react';
import {db, storage} from '../firebase';
import Sermon from './Sermon'

// Add sermons from singular
const testSermon = db.collection('sermons').doc('KxxJzmIeI7IARWus470d').get().then((sermons) => sermons.data()).then(async(sermon) => {
    const audiolink = await storage.ref(sermon.audio).getDownloadURL()
    return {...sermon, audiolink}
})

const sermonReference = db.collection('sermons');

let sermonAudioLinks = [];

sermonReference.get().then((querySnapshot) => {
  if (querySnapshot.size > 0) {
    querySnapshot.forEach((documentSnapshot) => {
    let data = documentSnapshot.data();
    sermonAudioLinks.push(data.audio)
    
    })
  } else {
    console.log('no docs found');
  }
  console.log(sermonAudioLinks)
})
// returns undefined
const sermonAudio = sermonAudioLinks.forEach(async(item) => {
  const audiolink = await storage.ref(item).getDownloadURL()
  return {...item, audiolink}
})

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
      // sermonAudio.then((sermons) => this.setState({sermons}))
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
