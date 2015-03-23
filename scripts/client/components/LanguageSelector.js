import {mainStore, mainActions} from '../MainFlux';
import React from 'react';
import Reflux from 'reflux';

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
      <div className={`language-selector_wrap language-selector_flag-${this.state.lang}`} onClick={this.swapLang}>
      </div>
    )
  }
});

export default LanguageSelector;
