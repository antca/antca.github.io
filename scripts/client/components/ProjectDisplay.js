import * as React from 'react';
import Utils from '../Utils';
import {markdown} from 'markdown';

var ProjectDisplay = React.createClass({
  getInitialState() {
    return {
      content: ''
    }
  },
  componentWillMount() {
    Utils.getAjax(`/public/projects/${this.props.project}.md`, (content) => {
      console.log(markdown.toHTML(content));
      this.setState({
        content: markdown.toHTML(content)
      });
    });
  },
  componentDidUpdate() {
    this.refs.body.getDOMNode().innerHTML = this.state.content;
  },
  render() {
    var bgColor = {
      backgroundColor: this.props.side === 'even' ? '#3A9AD9' : '#29ABA4'
    };
    var imageSide = {
      float: this.props.side === 'even' ? 'left' : 'right'
    };
    return (
      <div className="project-display_wrap" style={bgColor}>
        <div ref="body" />
      </div>
    );
  }
});

export default ProjectDisplay;
