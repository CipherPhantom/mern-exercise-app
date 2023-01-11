let Exercise = require('../models/Exercise');

const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises)
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

const addExercise = async (req, res) => {
    try {
        const { username, description, duration, date } = req.body;
        const newExercise = new Exercise({
        username,
        description,
        duration: Number(duration),
        date: Date.parse(date)
    })
        await newExercise.save();
        res.status(201).json('Exercise Added!!')
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

const getExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        res.status(200).json(exercise)
    } catch (error) {
        res.status(400).json('Error: ' + error)
   }
}

const updateExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        const { username, description, duration, date } = req.body
        exercise.username = username
        exercise.description = description
        exercise.duration = Number(duration)
        exercise.date = Date.parse(date)
        await exercise.save()
        res.status(200).json("Exercise Updated!!")
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }

}

const deleteExercise = async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.id)
        res.status(200).json("Exercise Deleted!!")
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

module.exports = {
    getExercises,
    addExercise,
    getExercise,
    updateExercise,
    deleteExercise,
}