import * as React from 'react';
import Utils from '../Utils';
import {markdown} from 'markdown';

var ProjectDisplay = React.createClass({
  getInitialState() {
    return {
      content: ''
    }
  },
  componentDidMount() {
    this.updateProject();
  },
  updateProject() {
    Utils.getAjax(`/public/projects/${this.props.project}-${this.props.lang}.md`, (content) => {
      this.refs.body.getDOMNode().innerHTML = markdown.toHTML(content);
    });
  },
  componentDidUpdate() {
    this.updateProject();
  },
  shouldComponentUpdate(nextProps) {
    return nextProps.lang !== this.props.lang
  },
  render() {
    var bgColor = {
      backgroundColor: this.props.side === 'even' ? '#227C74' : '#32475C'
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
