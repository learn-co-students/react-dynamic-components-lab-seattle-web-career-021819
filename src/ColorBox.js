import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      let newValue = this.props.opacity;
      if (newValue >= 0.2){
        return <div className="color-box" style={{opacity: newValue}}>
                  <ColorBox opacity={newValue - 0.1} />
               </div>
      }
      else{
        return this.props.opacity;
      }
  }
}
