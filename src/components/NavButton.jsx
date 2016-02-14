var React = require('react');
var NavButton = React.createClass({

    render: function () {
      return (
          <li className='margin-top' id={this.props.btnID}>
            <button className='ui labeled button navbar-btn' >
                <div className={'ui button ' + this.props.btnBackgroundColor}>
                  <i className={"icon " + this.props.icon}></i> {this.props.categoryLabel}
                </div>
                <a className={'ui basic left pointing label ' + this.props.labelColor}>
                  {this.props.numCards}
                </a>
            </button>
          </li>
      )
    }
});

module.exports = NavButton;
