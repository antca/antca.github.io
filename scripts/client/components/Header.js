import colors from '../colors';
import locales from '../locales';
var React = require('react');
var ReactStyle = require('react-style');
var Link = require('react-router').Link;
var Router = require('react-router');

var headerStyle = ReactStyle({
    position: 'relative',
    backgroundColor: colors[4],
    width: 1024,
    height: 100,
    textAlign: 'center',
    lineHeight: '100px',
    margin: '60px auto',
    borderRadius: 20,
    boxShadow: '5px 5px 5px #000000'
});

var sectionStyle = ReactStyle({
    position: 'relative',
    left: 50,
    textDecoration: 'none',
    color: colors[3],
    fontSize: 30,
    margin: 20,
    fontFamily: '"Open Sans", Arial, Tahoma',
    fontWeight: '600'
});

var photoStyle = ReactStyle({
    position: 'absolute',
    top: -50,
    left: 50,
    backgroundImage: 'url(public/images/photoAC.jpeg)',
    backgroundSize:   'cover',
    display: 'inline-block',
    width: 200,
    height: 200,
    borderRadius: 125
});

var titleStyle = ReactStyle({
    width: 250,
    display: 'inline-block',
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Lobster, cursive',
    bottom: -20,
    left: -30
});

var Header = React.createClass({
    mixins: [Router.State],
    render() {
        return (
            <div styles={headerStyle}>
                <div styles={photoStyle} >
                    <span styles={titleStyle}>Anthony Camboni</span>
                </div>
                 {['home', 'resume', 'projects', 'contact'].map((page, index) => {
                     var activeStyle = ReactStyle({
                         textDecoration: this.isActive(page) ? 'underline' : 'none'
                     });
                     return <Link styles={[sectionStyle, activeStyle]} key={index} to={page}>{locales.fr[page].toUpperCase()}</Link>
                 })}
            </div>
        )
    }
});

export default Header;
