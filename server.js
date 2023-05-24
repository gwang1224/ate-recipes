const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database
const db = new sqlite3.Database('comments.db');

// Create the comments table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`);

// Create Express app
const app = express();
app.use(bodyParser.json());

// Handle POST request for comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;

  if (!comment) {
    return res.status(400).json({ error: 'Comment is required' });
  }

  // Insert the comment into the database using a Promise
  insertComment(comment)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to save comment' });
    });
});

// Function to insert a comment into the database
function insertComment(comment) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO comments (comment) VALUES (?)', comment, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Start the server
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Close the database connection when the server is shut down
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
    server.close();
  });
});
