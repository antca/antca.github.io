import Utils from '../Utils';
import ProjectDisplay from './ProjectDisplay';

var React = require('react');

var Projects = React.createClass({
  getInitialState() {
    return {
      projects : []
    }
  },
  componentWillMount() {
    Utils.getAjax('/public/projects/index.json', (projects) => {
      this.setState({
        projects: JSON.parse(projects)
      })
    });
  },
  render()  {
    console.log(this.state.projects);
      return (
        <div className="projects_wrap">
          {this.state.projects.map((project, key) => {
            return <ProjectDisplay key={key} side={key % 2 === 0 ? 'even' : 'odd'} project={project} />
          })}
        </div>
      )
  }
});

export default Projects;
