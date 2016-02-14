var React = require('react');
var NavButton = require('./NavButton.jsx');

var NavButtonGroup = React.createClass({

    render: function() {
      var self = this;
      return (
          <ul className='nav navbar-nav' id = "btnGroup">
            {this.props.buttonMeta.map(function(meta){
              return (
                  <NavButton key={meta.btnID}
                    btnBackgroundColor={meta.btnBackgroundColor}
                    icon={meta.icon}
                    categoryLabel={meta.categoryLabel}
                    labelColor={meta.labelColor}
                    numCards={meta.numCards}
                    btnID={meta.btnID}>
                  </NavButton>
              )
            })}
          </ul>
      )
    }
});

module.exports = NavButtonGroup;
