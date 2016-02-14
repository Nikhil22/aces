var React = require('react');
var EntireNavBarContainer = React.createClass({

    render: function() {
      return (
          <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              {this.props.children}
            </div>
          </div>
      )
    }
});

module.exports = EntireNavBarContainer;
