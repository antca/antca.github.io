import Utils from '../Utils';
import * as React from 'react';
import * as Reflux from 'reflux';

var Resume = React.createClass({
    updateResume() {
      Utils.getAjax(`public/resume/resume-${this.props.lang}.html`, (response) => {
        this.refs.container.getDOMNode().innerHTML = response;
      });
    },
    shouldComponentUpdate(nextProps) {
      return nextProps.lang !== this.props.lang;
    },
    componentDidUpdate() {
      this.updateResume();
    },
    componentDidMount() {
      this.updateResume();
    },
    render() {
      return (
        <div className="resume_wrap" >
          <div className="resume_pdf"><a className="fa fa-file-pdf-o" href={`public/resume/anthony_camboni_resume_${this.props.lang}.pdf`}></a></div>
          <div className="sheet-container" ref="container" />
          <div className="resume_credit sheet-container">Credit to M. Adam Kendall for the JSON Resume theme (<a href="https://github.com/LinuxBozo/jsonresume-theme-kendall">LinuxBozo@GitHub</a>)</div>
        </div>
      );
    }
});

export default Resume;
