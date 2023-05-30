<!DOCTYPE html>
<html>
<head>
  <title>Recipe Rating</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .rating-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .rating-container input[type="radio"] {
      display: none;
    }
    .rating-container label {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: #dddddd;
      border-radius: 50%;
      cursor: pointer;
    }
    .rating-container input[type="radio"]:checked + label {
      background-color: #ffcc00;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
    }
    .comment-container {
      text-align: center;
      margin-bottom: 20px;
    }
    .comment-container textarea {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #cccccc;
      margin-bottom: 10px;
    }
    .feedback {
      text-align: center;
    }
    .feedback h2 {
      margin-bottom: 10px;
    }
    .feedback ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }
    .feedback ul li {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Rate the Recipe</h1>
  <div class="rating-container">
    <input type="radio" id="rating1" name="rating" value="1">
    <label for="rating1"></label>
    <input type="radio" id="rating2" name="rating" value="2">
    <label for="rating2"></label>
    <input type="radio" id="rating3" name="rating" value="3">
    <label for="rating3"></label>
    <input type="radio" id="rating4" name="rating" value="4">
    <label for="rating4"></label>
    <input type="radio" id="rating5" name="rating" value="5">
    <label for="rating5"></label>
  </div>
  <button onclick="submitRating()">Submit Rating</button>
  <div class="comment-container">
    <h2>Add a Comment</h2>
    <textarea id="commentInput" placeholder="Enter your comment"></textarea>
    <br>
    <button onclick="submitComment()">Submit Comment</button>
  </div>
  <div class="feedback">
    <h2>User Feedback</h2>
    <ul id="feedbackList">
      <!-- User feedback will be dynamically added here -->
    </ul>
  </div>
  <script>
    function submitRating() {
      var rating = document.querySelector('input[name="rating"]:checked').value;
      alert("You rated the recipe: " + rating + " stars!");
      // Send the rating to the server
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/rating', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Rating successfully sent to the server.');
        }
      };
      xhr.send(JSON.stringify({ rating: rating }));
    }
    function submitComment() {
      var comment = document.getElementById("commentInput").value;
      if (comment.trim() === "") {
        alert("Please enter a comment.");
        return;
      }
      // Add the comment to the feedback list
      var feedbackList = document.getElementById("feedbackList");
      var listItem = document.createElement("li");
      listItem.textContent = "Comment: " + comment;
      feedbackList.appendChild(listItem);
      // Clear the comment input
      document.getElementById("commentInput").value = "";
      // Send the comment to the server
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/comment', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Comment successfully sent to the server.');
        }
      };
      xhr.send(JSON.stringify({ comment: comment }));
    }
  </script>
</body>
</html>
