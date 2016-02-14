var React = require('react');

var CardContentSectionContainer = React.createClass({
      render: function() {
        return (
            <div className='content'>
              {this.props.children}
            </div>
        )
      }
});

module.exports = CardContentSectionContainer;
