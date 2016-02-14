var React = require('react');

var CardsWrapper = React.createClass({
    componentDidMount: function() {
      $('#pinBoot').pinterest_grid({
        no_columns: 4,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 700
        });
    },
    render: function() {
      return (
          <div className="container">
              <div className='row'>
                <section id="pinBoot">
                    {this.props.children}
                </section>
                <hr></hr>
              </div>
          </div>
      )

    }
});

module.exports = CardsWrapper;
