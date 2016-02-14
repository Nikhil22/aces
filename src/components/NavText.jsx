var React = require('react');

var NavText = React.createClass({
      render: function() {
        return (
          <p className='navbar-text'>Showing results for {this.props.category} posts</p>
        )
      }
});

module.exports = NavText;
