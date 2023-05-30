
<html>
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
<button type="button" onclick="submitFoods()">Submit</button>

<script>
require('dotenv').config();

const favorite_foods = {};

function addFood(foodName) {
  const foodInput = document.getElementsByName(foodName)[0];
  const foodValue = foodInput.value.trim();
  if (foodValue !== '') {
    favorite_foods[foodValue] = true;
    foodInput.value = '';
  }
}

async function call(text) {
  // Set up the API request
  const api_key = process.env.API_KEY;
  const endpoint = 'https://api.openai.com/v1/completions';
  const headers = {
    'Authorization': 'Bearer ' + api_key,
    'Content-Type': 'application/json'
  };
  const data = {
    'model': 'text-davinci-001',
    'prompt': text,
    'max_tokens': 75
  };
  // Make the API call
  const response = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(data) });
  const result = await response.json();
  // Process the API response
  const completed_text = result.choices[0].text;
 alert(completed_text);
}

function submitFoods() {
  const foods = Object.keys(favorite_foods);
  if (foods.length > 0) {
    const foodsString = foods.join(', ');
    call("Give me a specific type of cuisine based off of the foods that I like. Start by saying 'You would enjoy [cuisine].' Also briefly describe the given cuisine. Here are the foods: " + foodsString);
  }
}
</script>
</html>
