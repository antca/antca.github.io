import * as React from 'react/addons';

var Link = require('react-router').Link;
var Router = require('react-router');

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
          return <Link className="drawer-menu_section header_section page-link" style={activeStyle} key={index} to={page}>{this.props.loc[page].toUpperCase()}</Link>
        })}
      </div>
    );
  }
});

export default DrawerMenu;
