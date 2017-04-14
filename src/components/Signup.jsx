import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import FacebookProvider, { Login } from 'react-facebook';

export default class Signup extends PureComponent {
  // FB login
  onFacebookResponse(oldUser, newUser) {
    if(newUser) {
      document.getElementById('name').value = newUser.profile.first_name;
      document.getElementById('email').value = newUser.profile.email;

      //const newUser = Object.assign({}, this.state.newUser);
      fetch('http://localhost:8080/user', {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          name: newUser.profile.first_name,
          email: newUser.profile.email
        })
      })
      .then(response => {
        if(response.status === 200) {
          browserHistory.push('/quiz');
        }
      });
    }
  }

  render () {
    return (
      <div className="row scrollable">
        <div className="col-md-offset-2 col-md-8">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title text-center">
                      Testez vos connaissances sur les jeux vidéos
                    </h2>
                </div>
                <div className="panel-body">
                    <p className="text-center">Inscription</p>
                    <br />
                    <button className="btn center-block text-center btn-fb" role="button">
                      <FacebookProvider appID="1265395410243913">
                        <Login scope="email" onResponse={this.onFacebookResponse.bind(this)}>
                          <span>Connexion Facebook</span>
                        </Login>
                      </FacebookProvider>
                    </button>

                    <form name="user-form" action="" onSubmit={(e) => this.props.submit(e)} noValidate>
                      <div className="form-group text-left">
                            <label htmlFor="caption">Nom</label>
                            <input id="name" type="text" className="form-control" placeholder=""
                              onChange={() => this.props.setUser()} />
                      </div>
                      <div className="form-group text-left">
                            <label htmlFor="caption">Email</label>
                            <input id="email" type="text" className="form-control" placeholder="test@email.com"
                              onChange={() => this.props.setUser()} />
                      </div>
                      <button type="submit" className="btn center-block btn-submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
