import React, { Component } from 'react';
import Video from './meetingVideo/video'
import './meetingVideo/video.css'
import './showVideo.css'
import { BrowserRouter, Route } from 'react-router-dom';
import { goToRoomInput } from './meetingVideo/goToRoomInput';
class meet extends Component {
  render() {
    return (
      <BrowserRouter>
       <React.Fragment>
          <Route path="/" exact component={goToRoomInput}/>
          <Route path="/:roomId" exact component={Video}/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default meet;
