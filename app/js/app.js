/**
 * App init
 */

var React = require('react');

var CommentBox = require('./components/comments/CommentBox.react');

var App = React.createClass({
  render: function() {
    return (
      <CommentBox url="comments.json" pollInterval={2000} />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);