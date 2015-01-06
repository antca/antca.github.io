import Utils from '../Utils';
import {mainStore} from '../MainFlux';
var React = require('react');
var Reflux = require('reflux');

var Resume = React.createClass({
    mixins: [Reflux.listenTo(mainStore, "onStoreEvent")],
    getInitialState() {
      return {
        lang: mainStore.language
      };
    },
    onStoreEvent(type) {
      if(type === 'LANGUAGE_CHANGED') {
        this.setState({
          lang: mainStore.language
        });
      }
    },
    updateResume() {
      Utils.getAjax('public/resume-' + this.state.lang + '.html', (response) => {
        this.refs.container.getDOMNode().innerHTML = response;
      });
    },
    componentDidUpdate() {
      this.updateResume();
    },
    componentDidMount() {
      this.updateResume();
    },
    render() {
      return (
        <div className="resume_wrap" ref="container" />
      );
    }
});

export default Resume;
