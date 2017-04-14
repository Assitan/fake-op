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
      return res.status(400).send(err);
    } else {
      return res.status(200).json(req.body);
    }
  });
};

// Get the body data and create a new Quiz
const postQuiz = (req, res) => {
  // We assign the op info to a empty op and send a message back if no errors
  let quiz = Object.assign(new Quiz(), req.body);
  // ...Then we save it into the db
  quiz.save(err => {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).json(req.body);
    }
  });
};

// Get a single user filtered by ID
const getUser = (req, res) => {
    const { id } = req.params;
    // Query the db for a single user, if no errors send it to the client
    SignUp.findById(id, (err, user) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        // user sent as json
        return res.status(200).json(user);
      }
    });
}

// Get a single result filtered by ID
const getResultQuiz = (req, res) => {
    const { id } = req.params;
    // Query the db for a single result, if no errors send it to the client
    Quiz.findById(id, (err, quiz) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        // user sent as json
        return res.status(200).json(user);
      }
    });
}

// We export our functions to be used in the server routes
export { postUser, postQuiz, getUser, getResultQuiz };
