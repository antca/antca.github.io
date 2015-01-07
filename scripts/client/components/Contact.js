var React = require('react');

var Contact = React.createClass({
   render() {
      return (
          <div className="row contact_wrap">
            <div className="col-md-8 col-md-offset-2">
              <form action="https://getsimpleform.com/messages?form_api_token=8f91eaad9fcad211624674b8c59cfcf3" method="post">
                <input type="hidden" name="redirect_to" value={window.location} />
                <div className="form-group" >
                  <label for="name"> Nom </label>
                  <input className="form-control" type="text" name="name" />
                </div>
                <div className="form-group" >
                  <label for="email"> E-mail </label>
                  <input className="form-control" type="email" name="email" />
                </div>
                  <div className="form-group" >
                  <label  for="message"> Message </label>
                  <textarea className="form-control" name="message" rows="10"></textarea>
                </div>
                <input className="btn btn-info" type="submit" value="Envoyer" />
              </form>
            </div>
          </div>
      )
   }
});

export default Contact;
