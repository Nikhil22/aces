var React = require('react');
var FacebookPostCard = require('./FacebookPostCard.jsx');
var CardsWrapper = require('./CardsWrapper.jsx');
var syncRequest = require('sync-request');


var Cards = React.createClass({
      getImageURL: function (url) {
          var res = syncRequest('GET', 'http://api.embed.ly/1/oembed?url=' + url + '/&key=fbf53153d0be496b995ffde32716cf5c');
          var responseObj = JSON.parse(res.getBody());
          return responseObj.thumbnail_url
      },

      render: function() {
        var content = []
          if (this.props.cards.length > 0) {
              var self = this;
              content = this.props.cards.map(function(card, index) {
                  if (!card.hasOwnProperty('message')) card['message'] = '';
                    return (
                        <FacebookPostCard
                            uniqueKey = {card['id']}
                            datePosted = {card['created_time']}
                            getImageURL = {card.hasOwnProperty('link')? self.getImageURL(card['link']) : ''}
                            message = {card['message']}
                            numLikes = {card['likes']['summary']['total_count']}
                            numComments = {card['comments']['summary']['total_count']}>
                        </FacebookPostCard>
                    )
              });

          } else {
              content = <p>No cards matching this filter</p>;
          }
        return (
            <CardsWrapper>
              {content}
            </CardsWrapper>
          )
      }
});

module.exports = Cards;
