const Quiz = require('../model/Quiz');

exports.createQuizes =  (req, res, next) => {
  const newQuiz = new Quiz(req.body);
  newQuiz.save()
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.getAllQuizes = (req, res, next) => {
  Quiz.find()
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.getQuizById =  (req, res, next) => {
  Quiz.findById(req.params.id)
    .then((quiz) => {
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.updateQuiz =  (req, res, next) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((quiz) => {
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.deleteQuiz =  (req, res, next) => {
  Quiz.findByIdAndRemove(req.params.id)
    .then((quiz) => {
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};