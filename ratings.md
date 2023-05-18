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
        .rating-container input[type="radio"]:checked ~ label img {
            opacity: 1;
        }
        .rating-container label img {
            width: 50px;
            height: 50px;
            opacity: 0.5;
            transition: opacity 0.3s ease-in-out;
        }
        button {
            background-color: #4CAF50;
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
    <script>
        function submitRating() {
            var rating = document.querySelector('input[name="rating"]:checked').value;
            alert("You rated the recipe: " + rating + " stars!");
            // You can add further logic here to process the rating, such as sending it to a server or storing it in a database.
        }
    </script>
</body>
</html>
