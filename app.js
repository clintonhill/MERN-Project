const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error(err))

app.get('/', (req, res) => res.send('Hello world.'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port ' + port))
