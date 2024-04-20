// Create web server
// npm install express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Path: comments.js
// Create web server
// npm install express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.json());

const COMMENTS_FILE = 'comments.json';

app.get('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

app.post('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
        const comments = JSON.parse(data);
        const newComment = {
            id: Date.now()
        };
        // Rest of the code...
    });
});
