import React from 'react';
import Router from 'react-router';


var Contact = React.createClass({
  mixins: [Router.State],
  render() {
    return (
        <div className="row contact_wrap sheet-container">
          {this.getQuery().sent ? <div className="alert alert-success" role="alert"> {this.props.loc["contact_form"]["success_message"]} </div> : null}
          <div className="col-md-8">
            <form action="https://getsimpleform.com/messages?form_api_token=8f91eaad9fcad211624674b8c59cfcf3" method="post">
              <input type="hidden" name="redirect_to" value={window.location + "?sent=true"} />
              <div className="form-group" >
                <label for="name"> {this.props.loc["contact_form"]["name"]} </label>
                <input className="form-control" type="text" name="name" />
              </div>
              <div className="form-group" >
                <label for="email"> {this.props.loc["contact_form"]["email"]} </label>
                <input className="form-control" type="email" name="email" />
              </div>
                <div className="form-group" >
                <label  for="message"> {this.props.loc["contact_form"]["message"]} </label>
                <textarea className="form-control" name="message" rows="10"></textarea>
              </div>
              <input className="btn" type="submit" value={this.props.loc["contact_form"]["send"]} />
            </form>
          </div>
           <!-- CONTACT -->
          <div className="col-md-4">
          <div className="box">
            <h2><i className="fa fa-bullseye ico"></i> Contact</h2>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-envelope fa-fw"></span></div>
              <div className="title only pull-right"><a href="#/contact">anthony(at)camboni.be</a></div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-globe fa-fw"></span>
              </div>
              <div className="title only pull-right"><a href="http://anthony.camboni.be" target="_blank">http://anthony.camboni.be</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-linkedin-square fa-fw"></span>
              </div>
              <div className="title pull-right">LinkedIn</div>
              <div className="description pull-right"><a href="http://be.linkedin.com/in/antca" target="_blank">Anthony Camboni</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-twitter-square fa-fw"></span>
              </div>
              <div className="title pull-right">Twitter</div>
              <div className="description pull-right"><a href="https://twitter.com/anthony_camboni" target="_blank">anthony_camboni</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-github-square fa-fw"></span>
              </div>
              <div className="title pull-right">GitHub</div>
              <div className="description pull-right"><a href="https://github.com/antca" target="_blank">antca (new)</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-github-square fa-fw"></span>
              </div>
              <div className="title pull-right">GitHub</div>
              <div className="description pull-right"><a href="https://github.com/Apoxx" target="_blank">Apoxx (old)</a>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
  }
});

export default Contact;
