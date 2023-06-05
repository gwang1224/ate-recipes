<!DOCTYPE html>
<html>

<head>
  <style>
    #ship-animation {
      font-family: monospace;
      font-size: 20px;
    }
  </style>
</head>

<body>
  <h1>Favorite Foods</h1>
  <ul id="food-list"></ul>
  <input type="text" id="food-input">
  <button onclick="addFood()" id="add-button">Add Food</button>
  <button onclick="stopAdding()" id="stop-button">Stop</button>
  <br><br>
  <button onclick="getCuisineRecommendation()">Get Cuisine Recommendation</button>
  <p id="completion-output"></p>
  <pre id="ship-animation"></pre>

  <script>
    function shipPrint(position) {
      const animationElement = document.getElementById('ship-animation');
      const spaces = ' '.repeat(position);

      const frame = `${spaces} .   \n${spaces}  .   \n${spaces}    .\n\\~~~~~/\n \\   /\n  \\ /\n   V\n   |\n   |\n------`;

      animationElement.textContent = frame;
    }

    async function ship() {
      const start = 0;
      const distance = 3;
      const step = 2;

      for (let position = start; position < distance; position += step) {
        shipPrint(0);
        await sleep(1000);
        shipPrint(2);
        await sleep(1000);
      }
    }

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

    function stopAdding() {
      getCuisineRecommendation();
      document.getElementById('food-input').disabled = true;
      document.getElementById('add-button').disabled = true;
      document.getElementById('stop-button').disabled = true;
    }
  </script>
</body>

</html>
