const express = require('express')
const cors = require('cors');

require('dotenv').config();

const app = express();

const connectDB = require('./db/connect');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

const start = async () => {
    try {
        await connectDB(process.env.ATLAS_URI)
        
        app.listen(port, () => {
            console.log(`Server is running on server: ${port}`);
        })
        
    } catch (error) {
        console.log(error)
    }
};

start();
