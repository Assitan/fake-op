import React from 'react';
import FacebookProvider, { ShareButton } from 'react-facebook';

export const Confirm = (props) => {
    const score = localStorage.getItem('score');
    return (
      <div className="row scrollable">
        <div className="col-md-offset-2 col-md-8">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title text-center">
                      Merci pour votre participation !
                    </h2>
                </div>
                <div className="panel-body">
                  <p className="text-center">Vous avez <strong className="score">{score}</strong> points !</p>

                  <strong>Réponses</strong>
                  <p className="responses">En quelle année est sorti Super Mario World ? : <strong>1990</strong> <br />
                    En quelle année est sorti Donkey Kong Country ? : <strong>1994</strong> <br />
                    En quelle année est sorti Super Metroid ? : <strong>1994</strong>
                  </p>
                  <hr />
                  <p className="text-center">Partager sur Facebook</p>
                  <div className="btn-share-fb center-block text-center">
                    <FacebookProvider appID="1265395410243913">
                      <ShareButton href={document.location.href} />
                    </FacebookProvider>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}
