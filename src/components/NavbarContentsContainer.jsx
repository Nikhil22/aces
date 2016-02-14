var React = require('react');
var NavbarContentsContainer = React.createClass({

      render: function() {
        return (
          <div className='navbar-collapse collapse' id="navbar-footer">
             <ul className='nav navbar-nav'>
                {this.props.children}
             </ul>
          </div>
        )
      }
})

module.exports = NavbarContentsContainer;
