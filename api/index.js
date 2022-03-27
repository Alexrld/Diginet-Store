const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

app.get('*', (req, res) => {
   res.send('Hello World');
})

export default app;