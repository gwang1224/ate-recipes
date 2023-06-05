<html>

<head>
  <style>
    #ship-animation {
      font-family: monospace;
      font-size: 20px;
    }
    .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
h1 {
  text-align: center;
}
    #add-button {
      padding-left: 10px;
    }
    #food-input {
      margin-left: 500px;
      width: 800px;
      height: 80px;
      border-radius: 40px;
      text: 20px;
    }
    #get-rec {
      margin-left: 800px;
    }
    .mytext {
    padding-left: 15px;
    font-size: 30px;
    }

  </style>
</head>

<body>
  <h1>Food Recommendation</h1>
  <ul id="food-list"></ul>
  <input type="text" id="food-input" class="mytext">
  <button onclick="addFood()" id="add-button" class="button">Add Food</button>
  <br><br>
  <button class="button" onclick="getCuisineRecommendation()" id="get-rec">Get Cuisine Recommendation</button>
  <p id="completion-output"></p>
  <pre id="ship-animation"></pre>

  <script>

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getCuisineRecommendation() {
      const foods = Array.from(document.querySelectorAll('#food-list li')).map(li => li.textContent.trim());

      if (foods.length > 0) {
        fetch("https://ated.duckdns.org/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                foods: foods
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var completionOutput = document.getElementById("completion-output");
            completionOutput.innerText = data.completion;
        })
        .catch(function(error) {
            console.error(error);
        });
      }
    }

    function addFood() {
      var foodInput = document.getElementById('food-input');
      var food = foodInput.value.trim();
      if (food !== '') {
          var foodList = document.getElementById('food-list');
          var foodItem = document.createElement('li');
          foodItem.textContent = food;
          foodList.appendChild(foodItem);
          foodInput.value = '';
      }
    }
  </script>
</body>

</html>
