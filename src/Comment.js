import React, {Component} from 'react'

class Comment extends Component {

  render() {
    return (
      <div className = "comment">
        {this.props.commentText}
      </div>
    )
  }
}

export default Comment

//paraenthesis are NOT needed for the return function
