import LanguageSelector from './LanguageSelector';
var React = require('react');
var Link = require('react-router').Link;
var Router = require('react-router');

var Header = React.createClass({
    mixins: [Router.State],
    render() {
        return (
            <div className="header_wrap">
                <div className="header_main">
                  <div className="header_photo">
                    <span className="header_title">Anthony Camboni</span>
                  </div>
                  <div className = "header_section-wrap">

                  <div className="header_nav">
                    {['home', 'resume', 'projects', 'contact'].map((page, index) => {
                      var activeStyle = {
                        textDecoration: this.isActive(page) ? 'underline' : 'none'
                      };
                      return <Link className="header_section page-link" style={activeStyle} key={index} to={page}>{this.props.loc[page].toUpperCase()}</Link>
                    })}
                  </div>
                  <div className="header_menu">
                    <span>{this.props.loc[this.getPath().slice(1)].toUpperCase()}</span>
                  </div>
                  <div className="header_menu-icon">
                    <div className="fa fa-bars"></div>
                  </div>
                </div>
                <LanguageSelector />
              </div>
            </div>
        )
    }
});

export default Header;
