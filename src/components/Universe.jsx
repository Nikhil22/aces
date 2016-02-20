var React = require('react');
var MainNavBar = require('./MainNavBar.jsx');
var Cards = require('./Cards.jsx');
var HTTP = require('../services/httpservice');

var Universe = React.createClass({

        componentDidMount: function() {
          HTTP.get('/mostLikedPosts')
          .then(function(data) {
              this.setState({
                cardItems: data,
                numBestPostsCards:data.length
              });
              console.log(data)
          }.bind(this));
        },

        getInitialState: function() {
            return {
                cardItems: [],
                numBestPostsCards: 0,
                cardFilter:''
            };
        },
        handleFilterUpdate: function(filterValue) {
          this.setState({
              cardFilter: filterValue
          });
        },

        render: function() {
          var displayedCards = this.state.cardItems.filter(function(item) {
            if (!item.hasOwnProperty('message')) item['message'] = '';
            var match = item['message'].toLowerCase().indexOf(this.state.cardFilter.toLowerCase());
            return (match !== -1);
          }.bind(this));

          return <div className={'innerUniverse'}>
                    <MainNavBar
                         updateFilter = {this.handleFilterUpdate}
                         numBestPostsCards={this.state.numBestPostsCards}
                         numBiggestFansCards={this.state.numBiggestFansCards}>
                    </MainNavBar>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <Cards cards={displayedCards} />
                 </div>
        }
});

module.exports = Universe;
