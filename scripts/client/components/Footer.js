import * as React from 'react';

var Footer = React.createClass({
  render() {
    return (
      <div className="footer_wrap">
        <div className="footer_main">
          <div className="guide" />
          <p>{this.props.loc["footer_notice"]} <a href="https://github.com/antca/antca.github.io">GitHub</a>!</p>
          <div className="profiles">
            <a href="http://be.linkedin.com/in/antca"><i className="fa fa-linkedin-square"></i></a>
            <a href="https://twitter.com/anthony_camboni"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    );
  }
});

export default Footer;
