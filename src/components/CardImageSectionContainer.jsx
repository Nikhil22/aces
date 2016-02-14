var React = require('react');

var CardImageSectionContainer = React.createClass({
    render: function() {
        return (
            <div className='image'>
              {this.props.children}
            </div>
        )
    }
});

module.exports = CardImageSectionContainer;
