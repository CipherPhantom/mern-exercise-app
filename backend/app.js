const express = require('express')
const cors = require('cors');
const connectDB = require('./db/connect')

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const start = async () => {
    try {
        await connectDB(process.env.ATLAS_URI)
        
        app.listen(port, () => {
            console.log(`Server is running on server: ${port}`);
        })
        
    } catch (error) {
        console.log(error)
    }
}

start();
