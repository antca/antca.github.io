import Main from './views/Main.js';
import Home from './views/Home.js';
import Resume from './views/Resume.js';
import Projects from './views/Projects.js';
import Contact from './views/Contact.js';

var React = require('react');

var ReactStyle = require('react-style');

var Router = require('react-router');
var {Route, DefaultRoute, Redirect} = Router;

var routes = (
    <Route handler={Main}>
        <Route name="home" handler={Home} />
        <Route name="resume" handler={Resume} />
        <Route name="projects" handler={Projects} />
        <Route name="contact" handler={Contact} />
        <Redirect from="/" to="resume" />
    </Route>
);
Router.run(routes, (Handler) => {
    React.render(<Handler />, document.body);
});
