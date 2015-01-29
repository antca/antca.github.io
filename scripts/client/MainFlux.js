import locales from './locales';

var Reflux = require('reflux');

var mainActions = Reflux.createActions([
  'changeLanguage',
  'toggleDrawerMenu'
]);

var mainStore = Reflux.createStore({
  listenables: mainActions,
  init() {
      this.language = localStorage['lang'] || (/en/.test(window.navigator.userLanguage || window.navigator.language) ? 'en' : 'fr');
      console.log(this.language);
      this.loc = locales[this.language];
      this.sections = ['home', 'resume', 'projects', 'contact'];
      this.drawerOpen = false;
  },
  onChangeLanguage(language) {
    this.language = language;
    this.loc = locales[this.language];
    localStorage['lang'] = this.language;
    this.trigger('LANGUAGE_CHANGED');
  },
  onToggleDrawerMenu() {
    this.drawerOpen = !this.drawerOpen;
    this.trigger('DRAWER_TOGGLED');
  }
});

window.mainStore = mainStore;

export {mainActions, mainStore};
