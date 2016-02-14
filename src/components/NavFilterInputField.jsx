var React = require('react');

var NavFilterInputField = React.createClass({
    handleFilterChange: function(event) {
        var value = this.refs.filterInput.value;
        this.props.updateFilter(value);
    },
    render: function () {
        return (
          <form className='navbar-form navbar-right' role="search">
              <div className='form-group'>
                <input type="text" ref="filterInput" className='form-control' placeholder="Filter your cards" onChange={this.handleFilterChange}/>
              </div>
          </form>
        )
    }
});

module.exports = NavFilterInputField;
