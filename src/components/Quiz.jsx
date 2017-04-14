import React, { PureComponent } from 'react';

export default class Quiz extends PureComponent {
  render () {
    return (
      <div className="row scrollable">
        <div className="col-md-offset-2 col-md-8">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title text-center">
                      Testez vos connaissances !
                    </h2>
                </div>
                <div className="panel-body">
                    <form name="product-form" action="" onSubmit={(e) => this.props.submit(e)} noValidate>
                      <div className="form-group">
                        <label htmlFor="caption">En quelle année est sortie Super Mario World ?</label>
                        <div className="form-group text-left">
                          <label htmlFor="q1" className="radio-inline">
                            <input type="radio" name="res1" onChange={(e) => this.props.setQuiz({'response1':e})}
                              id="q1" value="1" /> 1988
                          </label>
                          <label htmlFor="q2" className="radio-inline">
                            <input type="radio" name="res1" onChange={(e) => this.props.setQuiz({'response1':e})}
                              id="q2" value="2" /> 1990
                          </label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="caption">En quelle année est sortie Super Mario World ?</label>
                        <div className="form-group text-left">
                          <label htmlFor="q3" className="radio-inline">
                            <input type="radio" name="res2" onChange={(e) => this.props.setQuiz({'response2':e})}
                              id="q3" value="1" /> 1988
                          </label>
                          <label htmlFor="q4" className="radio-inline">
                            <input type="radio" name="res2" onChange={(e) => this.props.setQuiz({'response2':e})}
                              id="q4" value="2" /> 1990
                          </label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="caption">En quelle année est sortie Super Mario World ?</label>
                        <div className="form-group text-left">
                          <label htmlFor="q5" className="radio-inline">
                            <input type="radio" name="res3" onChange={(e) => this.props.setQuiz({'response3':e})}
                              id="q5" value="1" /> 1988
                          </label>
                          <label htmlFor="q6" className="radio-inline">
                            <input type="radio" name="res3" onChange={(e) => this.props.setQuiz({'response3':e})}
                              id="q6" value="2" /> 1990
                          </label>
                        </div>
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
