// We import our op schema
import SignUp from '../models/signup';
import Quiz from '../models/quiz';

// Get the body data and create a new User
const postUser = (req, res) => {
  // We assign the op info to a empty op and send a message back if no errors
  let user = Object.assign(new SignUp(), req.body);
  // ...Then we save it into the db
  user.save(err => {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200)
    //res.json({ message: 'User created' }); // A simple JSON answer to inform the client
  });
};

// Get the body data and create a new Quiz
const postQuiz = (req, res) => {
  // We assign the op info to a empty op and send a message back if no errors
  let quiz = Object.assign(new Quiz(), req.body);
  // ...Then we save it into the db
  quiz.save(err => {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200)
    //res.json({ message: 'Quiz created' }); // A simple JSON answer to inform the client
  });
};

// Get a single user filtered by ID
const getUser = (req, res) => {
    const { id } = req.params;
    // Query the db for a single user, if no errors send it to the client
    SignUp.findById(id, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.sendStatus(200)
        res.json(user); // user sent as json
    });
}

// Get a single result filtered by ID
const getResultQuiz = (req, res) => {
    const { id } = req.params;
    // Query the db for a single result, if no errors send it to the client
    Quiz.findById(id, (err, quiz) => {
        if (err) {
            res.send(err);
        }
        res.sendStatus(200)
        res.json(quiz); // Result sent as json
    });
}

// We export our functions to be used in the server routes
export { postUser, postQuiz, getUser, getResultQuiz };
