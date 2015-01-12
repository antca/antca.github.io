import Main from './components/Main';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import * as React from 'react';
import * as Router from 'react-router';
import {Route, DefaultRoute, Redirect} from 'react-router';

var routes = (
  <Route handler={Main} >
    <Route name="home" handler={Home} />
    <Route name="resume" handler={Resume} />
    <Route name="projects" handler={Projects} />
    <Route name="contact" handler={Contact} />
    <Redirect from="/" to="home" />
  </Route>
);
Router.run(routes, (Handler) => {
  React.render( <Handler /> , document.body);
});
