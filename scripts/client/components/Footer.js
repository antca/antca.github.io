import * as React from 'react';

var Footer = React.createClass({
  render() {
    return (
      <div className="footer_wrap">
        <div className="footer_main">
          <div className="guide" />
          <p>{this.props.loc["footer_notice"]} <a href="https://github.com/antca/antca.github.io">GitHub</a>!</p>
          <a href="https://twitter.com/anthony_camboni" className="twitter">
            <span>@anthony_camboni</span>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/172px-Twitter_bird_logo_2012.svg.png" />
          </a>
        </div>
      </div>
    );
  }
});

export default Footer;
