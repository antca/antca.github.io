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
    return (
      <div className={"project-display_wrap sheet-container " + this.props.side}>
        <div className="project-display_body" ref="body" />
        <div className="clearfix" />
      </div>
    );
  }
});

export default ProjectDisplay;
