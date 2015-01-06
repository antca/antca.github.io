import Header from '../components/Header'
import Footer from '../components/Footer'
import {mainStore} from '../MainFlux';

var Reflux = require('reflux');
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
  mixins: [Reflux.listenTo(mainStore, "onStoreEvent")],
  getInitialState() {
    return {
      loc: mainStore.loc
    }
  },
  onStoreEvent(type) {
    if(type === 'LANGUAGE_CHANGED') {
      this.setState({
        loc: mainStore.loc
      });
    }
  },
  render()  {
      return (
          <div className="main_wrap">
              <Header loc={this.state.loc}/>
              <div className="main_container">
                  <RouteHandler />
              </div>
              <Footer />
          </div>
      )
    }
});

export default Main;
