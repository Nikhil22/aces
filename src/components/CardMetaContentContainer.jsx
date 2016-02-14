var React = require('react');

var CardMetaContentContainer = React.createClass({
    render: function() {
        return (
            <div className={"floated meta " + this.props.leftOrRight}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = CardMetaContentContainer;
