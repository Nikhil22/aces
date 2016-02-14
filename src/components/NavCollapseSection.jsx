var React = require('react');

var NavCollapseSection = React.createClass({
    render: function() {
      return (
        <div className='navbar-header'>
          <button type="button" className='navbar-toggle' data-toggle="collapse" data-target="#navbar-footer">
            <span className="sr-only">Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
      )
    }
})

module.exports = NavCollapseSection;
