import Utils from '../Utils';
import ProjectDisplay from './ProjectDisplay';

var React = require('react');
var ReactStyle = require('react-style');

var containerStyle = ReactStyle({
  padding: 15
});

var Projects = React.createClass({
  getInitialState() {
    return {
      projects : [{title: "coucou"}]
    }
  },
  componentWillMount() {
    Utils.getAjax('/public/projects.json', (projects) => {
      this.setState({
        projects: JSON.parse(projects)
      })
    });
  },
  render()  {
      return (
        <div styles={containerStyle}>
          {this.state.projects.map((project, key) => {
            return <ProjectDisplay key={key} side={key % 2 === 0 ? 'even' : 'odd'} projectData={project} />
          })}
        </div>
      )
  }
});

export default Projects;
