import Main from './components/Main';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

var React = require('react');

var Router = require('react-router');
var {
  Route, DefaultRoute, Redirect
} = Router;

var routes = (
  < Route handler={Main} >
    < Route name="home" handler={Home} />
    < Route name="resume" handler={Resume} />
    < Route name="projects" handler={Projects} />
    < Route name="contact" handler={Contact} />
    < Redirect from="/" to="resume" />
  </ Route>
);
Router.run(routes, (Handler) => {
  React.render( < Handler /> , document.body);
});
