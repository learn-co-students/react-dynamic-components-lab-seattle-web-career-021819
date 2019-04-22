import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log("current this.props.opacity: ", this.props.opacity)
    const newOpacity = this.props.opacity - 0.1


    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null
    }

    // return (
    //   <div className="color-box" style={{opacity: this.props.opacity}}>
    //
    //     if (this.props.opacity >= 0.2) {
    //       <ColorBox opacity={newOpacity} />
    //     }
    //
    //   </div>
    // )
    
  }

}
