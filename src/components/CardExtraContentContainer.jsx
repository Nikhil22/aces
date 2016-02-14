var React = require('react');

var CardExtraContentContainer = React.createClass({
    render: function() {
        return (
          <div className="extra content">
            {this.props.children}
          </div>
        )
    }
});

module.exports = CardExtraContentContainer;
