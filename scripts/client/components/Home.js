import * as React from 'react';
import Utils from '../Utils';
import * as markdown from 'markdown-it';

var md = markdown({html: true});

var Home = React.createClass({
    componentDidMount() {
        this.updateProject();
    },
    updateProject() {
        Utils.getAjax(`/public/home/home-${this.props.lang}.md`, (content) => {
          this.refs.body.getDOMNode().innerHTML = md.render(content);
        });
    },
    componentDidUpdate() {
        this.updateProject();
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.lang !== this.props.lang
    },
    render()  {
      return (
          <div className="home_wrap sheet-container">
            <div ref="body" />
          </div>
      )
    }
});

export default Home;
