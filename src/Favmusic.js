
// import musicData from './data.js';
import React, { Component } from "react";

export default class FavMusic extends Component { 
    render(){
        return (  this.props.musicData.map(function(music){
               return <div>
                  <h2>{music.name} preferences: </h2>
                  <p>
                  {music.name} loves {music.band} and recommends <strong>{music.song}</strong>
                  </p>
                </div> })
              )
    }
}
