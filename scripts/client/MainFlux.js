import locales from './locales';

var Reflux = require('reflux');

var mainActions = Reflux.createActions([
  'changeLanguage'
]);

var mainStore = Reflux.createStore({
  listenables: mainActions,
  init() {
      this.language = 'fr';
      this.loc = locales[this.language];
  },
  onChangeLanguage(language) {
    this.language = language;
    this.loc = locales[this.language];
    this.trigger('LANGUAGE_CHANGED');
  }
});

window.mainStore = mainStore;

export {mainActions, mainStore};
