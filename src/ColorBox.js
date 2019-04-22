import React, { Component } from 'react';

export default class ColorBox extends Component {


  render() {
    const opac=this.props.opacity
    
    if (this.props.opacity>=0.2){
      console.log("test")
      return (
        <div className="color-box" style={{opacity: opac}}>
          <ColorBox opacity={opac-0.1} />
        </div>
      )
    }
    return null;
  }
  
}
