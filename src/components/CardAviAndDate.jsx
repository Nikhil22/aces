var React = require('react');

var CardAviAndDate = React.createClass({
      render: function() {
        return (
          <div>
            <div className='right floated meta'>{this.props.date_posted}</div>
            <img className='ui avatar image' src='img/fbLogo.jpg' data-pin-nopin="true"/>
          </div>
        )
      }
});

module.exports = CardAviAndDate;
