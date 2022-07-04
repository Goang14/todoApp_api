const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/student', studentController.news);
router.post('/student/create', studentController.createPost)
router.put('/student/:id', studentController.editPost)
router.delete('/student/:id', studentController.deletePost)

module.exports = router;