import * as React from 'react';
import * as Router from 'react-router';


var Contact = React.createClass({
  mixins: [Router.State],
  render() {
    return (
        <div className="row contact_wrap sheet-container">
          {this.getQuery().sent ? <div className="alert alert-success" role="alert"> {this.props.loc["contact_form"]["success_message"]} </div> : null}
          <div className="col-md-8 col-md-offset-2">
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
        </div>
    )
  }
});

export default Contact;
