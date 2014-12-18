import Utils from '../Utils';
var React = require('react');
var ReactStyle = require('react-style');

var resumeStyle = ReactStyle({
    position: 'relative',
    width: 1024
});

var Resume = React.createClass({
    componentDidMount() {
        Utils.getAjax('public/resume.html', (response) => {
            this.refs.container.getDOMNode().innerHTML = response;
        });
    },
    render()  {
        return (
            <div styles={resumeStyle} ref="container"/>
        )
    }
});

export default Resume;
