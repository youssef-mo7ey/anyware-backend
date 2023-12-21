const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');
const quizController = require('../controllers/quizController');

//announcement
router.post('/announcement', announcementController.createAnnouncements);

router.get('/announcement', announcementController.getAllAnnouncements);

router.get('/announcement/:id', announcementController.getAnnouncementById);

router.put('/announcement/:id', announcementController.updateAnnouncement);

router.delete('/announcement/:id', announcementController.deleteAnnouncement);

//quiz
router.post('/quiz', quizController.createQuizes);

router.get('/quiz', quizController.getAllQuizes);

router.get('/quiz/:id', quizController.getQuizById);

router.put('/quiz/:id', quizController.updateQuiz);

router.delete('/quiz/:id', quizController.deleteQuiz);

module.exports = router;