import Header from '../components/Header'
var React = require('react');
var ReactStyle = require('react-style');
var RouteHandler = require('react-router').RouteHandler;

var appStyle = ReactStyle({
    height: '100%',
    backgroundColor: '#354458'
});

var containerStyle = ReactStyle({
    background: '#FFFFFF',
    minHeight: '100%',
    width: 1024,
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '5px 5px 5px #000000'
});

var Main = React.createClass({
    componentWillMount() {
        ReactStyle.inject();
    },
    render()  {
        return (
            <div styles={appStyle}>
                <Header />
                <div styles={containerStyle}>
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

export default Main;
