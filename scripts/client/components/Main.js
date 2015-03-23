import Header from './Header';
import Footer from './Footer';
import DrawerMenu from './DrawerMenu';
import {mainStore} from '../MainFlux';
import React from 'react';
import Reflux from 'reflux';
import {RouteHandler} from 'react-router';

var Main = React.createClass({
  mixins: [Reflux.listenTo(mainStore, "onStoreEvent")],
  getInitialState() {
    return {
      loc: mainStore.loc,
      scroll: false,
      lang: mainStore.language,
      drawerOpen: false
    }
  },
  onStoreEvent(type) {
    if(type === 'LANGUAGE_CHANGED') {
      this.setState({
        loc: mainStore.loc,
        lang: mainStore.language
      });
    }
    if(type === 'DRAWER_TOGGLED') {
      this.setState({
        drawerOpen: mainStore.drawerOpen
      });
    }
  },
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.onScroll();
    });
  },
  onScroll() {
    if(window.scrollY > 250) {
      this.setState({
        scroll: true
      });
    } else {
      this.setState({
        scroll: false
      });
    }
  },
  render()  {
      return (
          <div className="main_wrap" >
              <Header sections={mainStore.sections} loc={this.state.loc} scroll={this.state.scroll} />
              <div className="main_container" >
                  <RouteHandler loc={this.state.loc} lang={this.state.lang} />
              </div>
              <Footer loc={this.state.loc} />
              <DrawerMenu isOpen={this.state.drawerOpen} sections={mainStore.sections} loc={this.state.loc}/>
          </div>
      )
    }
});

export default Main;
