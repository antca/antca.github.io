import Utils from '../Utils';
var React = require('react');
var Reflux = require('reflux');

var Resume = React.createClass({
    updateResume() {
      Utils.getAjax('public/resume-' + this.props.lang + '.html', (response) => {
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
        <div>
          <div className="resume_wrap" ref="container" />
          <div className="resume_credit">Credit to M. Adam Kendall for the JSON Resume theme (<a href="https://github.com/LinuxBozo/jsonresume-theme-kendall">LinuxBozo@GitHub</a>)</div>
        </div>
      );
    }
});

export default Resume;
