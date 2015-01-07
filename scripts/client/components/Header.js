import LanguageSelector from './LanguageSelector';
import {mainActions} from '../MainFlux';
import * as React from 'react/addons';
var Link = require('react-router').Link;
var Router = require('react-router');

var cs = React.addons.classSet;

var Header = React.createClass({
    mixins: [Router.State],
    onClickMenu() {
      mainActions.toggleDrawerMenu();
    },
    render() {
        return (
            <div className={cs({"header_wrap": true, scroll: this.props.scroll})}>
                <div className={cs({"header_main": true, scroll: this.props.scroll})}>
                  <div className={cs({"header_photo": true, scroll: this.props.scroll})}>
                    <span className={cs({"header_title": true, scroll: this.props.scroll})}>Anthony Camboni</span>
                  </div>
                  <div className={cs({"header_section-wrap": true, scroll: this.props.scroll})}>

                  <div className={cs({"header_nav": true, scroll: this.props.scroll})}>
                    {this.props.sections.map((page, index) => {
                      var activeStyle = {
                        textDecoration: this.isActive(page) ? 'underline' : 'none'
                      };
                      return <Link className="header_section page-link" style={activeStyle} key={index} to={page}>{this.props.loc[page].toUpperCase()}</Link>
                    })}
                  </div>
                  <div className="header_menu" onClick={this.onClickMenu}>
                    <span>{this.props.loc[this.getPath().slice(1)].toUpperCase()}</span>
                  </div>
                  <div className={cs({"header_menu-icon": true, scroll: this.props.scroll})} onClick={this.onClickMenu}>
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
