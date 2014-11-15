/**
 * Comment component
 */

var React = require('react');

var Comment = React.createClass({
  getInitialState: function() {
    return {
      timeStamp: ""
    }
  },
  componentDidMount: function() {
    this.setState({
      timeStamp: this.timeStamp()
    })
  },
  timeStamp: function() {
    var currentdate = new Date();
    var timestamp = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return timestamp; 
  },
  render: function() {
    return (
      <div className="comment">
        <hr />
        <div>{this.state.timeStamp}</div>
        <em className="commentAuthor">
          {this.props.author + ': '}
        </em>
        <span dangerouslySetInnerHTML = 
          {{ __html: this.props.children.toString() }} />
      </div>
    );
  }
});

module.exports = Comment;
