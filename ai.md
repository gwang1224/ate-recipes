<html>
<head>
  <title>Favorite Foods</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    table {
      margin: 20px auto;
      border-collapse: collapse;
      width: 400px;
    }
    th {
      background-color: #f2f2f2;
      padding: 10px;
      text-align: left;
    }
    td {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    input[type="text"] {
      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 3px;
      width: 200px;
    }
    button {
      padding: 5px 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    .submit-button {
      margin: 20px auto;
      display: block;
    }
  </style>
</head>
<body>
  <table id="food-table">
    <thead>
      <tr>
        <th>Add Your Favorite Foods!</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="text" name="food1"></td>
        <td><button type="button" onclick="addFood('food1')">Add</button></td>
      </tr>
      <tr>
        <td><input type="text" name="food2"></td>
        <td><button type="button" onclick="addFood('food2')">Add</button></td>
      </tr>
      <tr>
        <td><input type="text" name="food3"></td>
        <td><button type="button" onclick="addFood('food3')">Add</button></td>
      </tr>
    </tbody>
  </table>
  <button type="button" onclick="submitFoods()" class="submit-button">Submit</button>

  <script>
    function addFood(foodName) {
      const foodInput = document.getElementsByName(foodName)[0];
      const foodValue = foodInput.value.trim();
      if (foodValue !== '') {
        favorite_foods[foodValue] = true;
        foodInput.value = '';
      }
    }

    async function call(text) {
      const api_key = 'YOUR_API_KEY'; // Replace with your actual API key
      const endpoint = 'https://api.openai.com/v1/completions';
      const headers = {
        'Authorization': 'Bearer ' + api_key,
        'Content-Type': 'application/json'
      };
      const data = {
        'model': 'text-davinci-003', // Updated to use 'text-davinci-003' model
        'prompt': text,
        'max_tokens': 75
      };

      const response = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(data) });
      const result = await response.json();

      const completed_text = result.choices[0].text;
      alert(completed_text);
    }

    function submitFoods() {
      const foods = Object.keys(favorite_foods);
      if (foods.length > 0) {
        const foodsString = foods.join(', ');
        call("Give me a specific type of cuisine based on the foods that I like. Start by saying 'You would enjoy [cuisine].' Also, briefly describe the given cuisine. Here are the foods: " + foodsString);
      }
    }
  </script>
</body>
</html>
