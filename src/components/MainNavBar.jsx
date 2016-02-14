var React = require('react');
var EntireNavBarContainer = require('./EntireNavBarContainer.jsx');
var NavbarContentsContainer = require('./NavbarContentsContainer.jsx');
var NavButtonGroup = require('./NavButtonGroup.jsx');
var NavFilterInputField = require('./NavFilterInputField.jsx');
var NavCollapseSection= require('./NavCollapseSection.jsx');

var MainNavBar = React.createClass({

      render: function() {
        var navButtonMeta = [
          {
            "btnID":'bestPosts',
            'categoryLabel':'Best posts',
            'icon':'trophy',
            'btnBackgroundColor':'green',
            'labelColor':'green',
            'numCards':this.props.numBestPostsCards
          }
        ]

        return (
            <EntireNavBarContainer>
              <NavbarContentsContainer >

                  <NavButtonGroup buttonMeta={navButtonMeta} />

                  <NavFilterInputField updateFilter={this.props.updateFilter}/>

                </NavbarContentsContainer>

                <NavCollapseSection/>

            </EntireNavBarContainer>
          )

      }
  });

module.exports = MainNavBar;
