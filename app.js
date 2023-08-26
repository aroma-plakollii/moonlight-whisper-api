const express = require('express');
const cors = require('cors');
const db = require('./config/db')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("Moonlight Whisper API")
})

db();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running or port: ${port}`);
});