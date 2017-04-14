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
                        <label htmlFor="caption">En quelle année est sorti Super Mario World ?</label>
                        <div className="form-group text-left" onChange={(e) => this.props.setQuiz1(e)}>
                          <label htmlFor="r1" className="radio-inline">
                            <input type="radio" name="res1"
                              id="r1" value="1" /> 1988
                          </label>
                          <label htmlFor="r2" className="radio-inline">
                            <input type="radio" name="res1"
                              id="r2" value="2" /> 1990
                          </label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="caption">En quelle année est sorti Donkey Kong Country ?</label>
                        <div className="form-group text-left"onChange={(e) => this.props.setQuiz2(e)}>
                          <label htmlFor="r3" className="radio-inline">
                            <input type="radio" name="res2"
                              id="r3" value="1" /> 1994
                          </label>
                          <label htmlFor="r4" className="radio-inline">
                            <input type="radio" name="res2"
                              id="r4" value="2" /> 1996
                          </label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="caption">En quelle année est sorti Super Metroid ?</label>
                        <div className="form-group text-left" onChange={(e) => this.props.setQuiz3(e)}>
                          <label htmlFor="r5" className="radio-inline">
                            <input type="radio" name="res3"
                              id="r5" value="1" /> 1994
                          </label>
                          <label htmlFor="r6" className="radio-inline">
                            <input type="radio" name="res3"
                              id="r6" value="2" /> 1989
                          </label>
                        </div>
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
