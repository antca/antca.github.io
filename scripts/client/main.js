//import React-Style first to avoid production bug.
var ReactStyle = require('react-style');

import Main from './views/Main';
import Home from './views/Home';
import Resume from './views/Resume';
import Projects from './views/Projects';
import Contact from './views/Contact';

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
