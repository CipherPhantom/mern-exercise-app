const express = require('express');
const router = express.Router();

const { 
    getExercises, 
    addExercise,
    getExercise,
    updateExercise,
    deleteExercise
} =  require('../controllers/exercises');

router.route('/').get(getExercises).post(addExercise)
router.route('/:id')
    .get(getExercise)
    .put(updateExercise)
    .delete(deleteExercise)

module.exports = router