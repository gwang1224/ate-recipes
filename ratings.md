<html>
<head>
    <title>Recipe Rating</title>
    <style>
        body {
            background-color: #f5f5f5;
            color: #333333;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            text-align: center;
        }       
        h1 {
            margin-bottom: 30px;
        }        
        .rating-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }        
        .rating-container input[type="radio"] {
            display: none;
        }       
        .rating-container label {
            display: inline-block;
            cursor: pointer;
            margin: 0 5px;
        }   
        .rating-container label img {
            width: 50px;
            height: 50px;
            transition: transform 0.3s ease-in-out;
        }   
        .rating-container input[type="radio"]:checked ~ label img {
            transform: scale(1.2);
        } 
        button {
            background-color: #8E3520; /* Updated color */
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }  
        button:hover {
            background-color: #45a049;
        }
        .comment-container {
            margin-top: 30px;
        }
        .comment-container textarea {
            width: 300px;
            height: 100px;
            resize: none;
            padding: 5px;
            margin-bottom: 10px;
        }
        .comment-container button {
            background-color: #8E3520; /* Updated color */
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }
        .comment-container button:hover {
            background-color: #45a049;
        }
        .feedback {
            margin-top: 30px;
        }
        .feedback h2 {
            margin-bottom: 10px;
        }
        .feedback ul {
            list-style-type: none;
            padding: 0;
            text-align: left;
        }
        .feedback li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Rate the Recipe</h1>
    <div class="rating-container">
        <input type="radio" id="rating1" name="rating" value="1">
        <label for="rating1"><img src="./images/green_mushroom.png"></label>
        <input type="radio" id="rating2" name="rating" value="2">
        <label for="rating2"><img src="./images/green_mushroom.png"></label>
        <input type="radio" id="rating3" name="rating" value="3">
        <label for="rating3"><img src="./images/green_mushroom.png"></label>
        <input type="radio" id="rating4" name="rating" value="4">
        <label for="rating4"><img src="./images/green_mushroom.png"></label>
        <input type="radio" id="rating5" name="rating" value="5">
        <label for="rating5"><img src="./images/green_mushroom.png"></label>
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
            // You can add further logic here to process the rating, such as sending it to a server or storing it in a database.
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
            xhr.open('POST', '/comments', true);
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
