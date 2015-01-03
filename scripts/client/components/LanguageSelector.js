import {mainStore, mainActions} from '../MainFlux';

var React = require('react');
var ReactStyle = require('react-style');
var Reflux = require('reflux');

var flags = {
  fr: 'http://pix.iemoji.com/twit33/0188.png',
  en: 'http://pix.iemoji.com/twit33/0189.png'
};

var languageSelectotStyle = ReactStyle({
  position: 'relative',
  top: -30,
  left: -20,
  width: 20,
  height: 20,
  float: 'right'
});

var LanguageSelector = React.createClass({
  mixins: [Reflux.listenTo(mainStore, "onStoreEvent")],
  getInitialState() {
    return {
      lang : mainStore.language
    }
  },
  onStoreEvent(type) {
    if(type === "LANGUAGE_CHANGED") {
      this.setState({
        lang : mainStore.language
      })
    }
  },
  swapLang() {
    mainActions.changeLanguage(this.state.lang === 'fr' ? 'en' : 'fr');
  },
  render() {
    return (
      <div styles={languageSelectotStyle} onClick={this.swapLang}>
        <img src={flags[this.state.lang]}/>
      </div>
    )
  }
});

export default LanguageSelector;
