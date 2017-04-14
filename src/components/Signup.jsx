import React, { PureComponent } from 'react';

export default class Signup extends PureComponent {
  render () {
    return (
      <div className="row scrollable">
        <div className="col-md-offset-2 col-md-8">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title text-center">
                      Inscription
                    </h2>
                </div>
                <div className="panel-body">
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
                      <button type="submit" className="btn btn-submit btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
