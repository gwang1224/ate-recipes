<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>

<div>
<img src="images/blog_home.png" width="100">
  <section class="team1">
      <br>
      <p>Whether it's a family recipe, quick snack, or 3 course meal, add your recipe to our virtual cookbook!</p>
  </section>
</div>

<br>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Instructions</th>
            </tr>
            </thead>
            <tbody id="result">
             </tbody>
          </table>
           <script>
            const resultContainer = document.getElementById("result");         
            const url = "https://ated.duckdns.org/api/add-recipes/";
            const headers = {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'omit',
              headers: {
                'Content-Type': 'application/json'
              },
            };        
            // Fetch data from the database
            fetch(url, headers)
              .then(response => {
                // If the response is not OK, log the error and display it on the webpage
                if (response.status != 200) {
                    const errorMsg = 'Database response error: ' + response.status;
                    console.log(errorMsg);
                    const tr = document.createElement("tr");
                    const td = document.createElement("td");
                    td.innerHTML = errorMsg;
                    tr.appendChild(td);
                    resultContainer.appendChild(tr);
                    return;
                }
                // Parse the json and add it to the webpage
                response.json().then(data => {
                    console.log(data);         
                    for (const row of data) {                     
                      // Create new table row and cells for each recipe attribute
                      const tr = document.createElement("tr");
                      const name = document.createElement("td");
                      const ingredients = document.createElement("td");
                      const instructions = document.createElement("td");
                      // Set the inner HTML of each cell to the corresponding recipe attribute value
                      name.innerHTML = row.name;
                      ingredients.innerHTML = row.ingredients;
                      instructions.innerHTML = row.instructions                     
                      // Append each cell to the row
                      // Allows the data to be added to the newly made table
                      tr.appendChild(name);
                      tr.appendChild(ingredients);
                      tr.appendChild(instructions);                    
                      // Append the row to the container element
                      resultContainer.appendChild(tr);
                    }
                })
            })
            // If an error occurs, log it to the console and display an error message to the user
            .catch(err => {
              console.error(err);
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              td.innerHTML = err;
              tr.appendChild(td);
              resultContainer.appendChild(tr);
            });
            </script>
<head>
    <title>Add a Recipe</title>
</head>
<body>
    <form id="recipeForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
        <label for="ingredients">Ingredients</label>
        <input type="text" id="ingredients" name="ingredients">
        <label for="instructions">Instructions</label>
        <input type="text" id="instructions" name="instructions">
        <button type="submit">Add Recipe</button>
    </form>
    <script>
         // Add an event listener to the form to submit recipe data
        const form = document.getElementById('recipeForm');
        form.addEventListener('submit', async function(event) {
            event.preventDefault();           
            // Retrieve the input values from the form
            const name = document.getElementById('name').value;
            const ingredients = document.getElementById('ingredients').value;
            const instructions = document.getElementById('instructions').value;           
            try {
                // Use the Fetch API to submit recipe data to the server
                const response = await fetch('https://ated.duckdns.org/api/add-recipes/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // Use JSON.stringify to convert the input values into a JSON string that can be sent to the server as the request body
                    body: JSON.stringify({
                        name: name,
                        ingredients: ingredients,                    
                        instructions: instructions
                    })
                });
                // Check if the response from the server is ok
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Display a success message to the user
                alert("Recipe has been added successfully!");
            } catch (error) {
                // If an error occurs, log it to the console and display an error message to the user
                console.error('Error:', error);
                alert("Please enter all fields or check if the added recipe is a duplicate.")
            }
        });
    </script>
</body>


<!-- Shopping List Button -->
<button class="open-button" onclick="openForm()">My Shopping List</button>

<div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h2>Shopping List</h2>
    <!-- shopping list -->
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>

<script>
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
</script>


</html>