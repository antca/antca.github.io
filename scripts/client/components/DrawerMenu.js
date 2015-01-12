import * as React from 'react/addons';
import * as Router from 'react-router';
import {mainActions} from '../MainFlux';
var Link = Router.Link;
var cs = React.addons.classSet;

var DrawerMenu = React.createClass({
  mixins: [Router.State],
  render() {
    return (
      <div className={cs({"drawer-menu_wrap": true, "drawer-menu--open": this.props.isOpen})}>
        {this.props.sections.map((page, index) => {
          var activeStyle = {
            textDecoration: this.isActive(page) ? 'underline' : 'none'
          };
          return <Link className="drawer-menu_section header_section page-link" style={activeStyle} key={index} to={page} onClick={mainActions.toggleDrawerMenu} >{this.props.loc[page].toUpperCase()}</Link>
        })}
      </div>
    );
  }
});

export default DrawerMenu;
