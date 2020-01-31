import React, { Component } from "react";
import { Typography } from '@material-ui/core';

export default class Podcast extends Component {
  render() {
    return (
      <main>
        <div>
        <Typography variant="h3" gutterBottom={true} align="center" component="h3" style={{color: '#fff', marginTop: '20px'}} >
        Current Sermons</Typography>
          <iframe title="Christ Fellowship Sermons Podcast" id="multi_iframe" style={{border: "none"}} scrolling="no" allowfullscreen="" src="https://www.podbean.com/media/player/multi?playlist=http%3A%2F%2Fplaylist.podbean.com%2F7159302%2Fplaylist_multi.xml&vjs=1&size=315&share=1&fonts=Helvetica&auto=0&download=1&skin=0" width="100%" height="505"></iframe>
        </div>
      </main>
    );
  }
}
