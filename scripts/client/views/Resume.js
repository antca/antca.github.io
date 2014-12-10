var React = require('React');
var ReactStyle = require('react-style');

var resumeStyle = ReactStyle({
    position: 'relative',
    width: '100%'
});

var Resume = React.createClass({
    getInitialState() {
      return {
          iframeHeight: '100%'
      }
    },
    componentDidMount() {
        var iframe = this.refs.iframe.getDOMNode();
        iframe.addEventListener('load', () => {
            this.setState({
                iframeHeight: iframe.contentWindow.document.body.scrollHeight + 15
            });
        });
    },
    render()  {
        var heightStyle =  ReactStyle({
           height: this.state.iframeHeight
        });
        return (
            <iframe ref="iframe" styles={[resumeStyle, heightStyle]} src="public/resume/resume.html" frameBorder="0"/>
        )
    }
});

export default Resume;