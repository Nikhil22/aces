var React = require('react');

var CardContainer = React.createClass({
      render: function(){
        return(
          <article className='white-panel'>
            <div className='ui card'>
              {this.props.children}
            </div>
          </article>
        )
      }
})

module.exports = CardContainer;
