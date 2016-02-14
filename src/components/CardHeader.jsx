var React = require('react');

var CardHeader = React.createClass({
    render: function() {
        return (
          <div className="header">
            {this.props.children}
          </div>
        )
    }
})

module.exports = CardHeader;
