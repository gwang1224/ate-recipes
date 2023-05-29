<html>
<head>
    <!--iphone or other device view so it can format correctly-->
    <title>ate.</title>
    <!--to connect to the .css sheet in this case it will be index.css since there will be a different .css pae for each page so there can be easy clean up-->
    <link rel="stylesheet" href="index.css">
    <!--the google fonts links front https://fonts. google.com/-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<br>

<div>
<form class="example">
  <input type="text" placeholder="Search for a recipe" name="search">
  <button type="submit" id="food"><i class="fa fa-search"></i></button>
</form>
</div>

<br>

<main id="content" class="main-content" role="main">
    <!-- HTML table fragment for page -->
    <table>
        <thead>
            <tr>
                <th>food</th>
                <th>ingredients</th>
                <th>servings</th>
                <th>instructions</th>
            </tr>
        </thead>
        <tbody id="result">
            <!-- generated rows -->
        </tbody>
    </table>
</main>

<!-- Loading screen -->
<div id="loading">Loading...</div>

<script>
    // prepare HTML result container for new output
    const resultContainer = document.getElementById("result");

    // prepare fetch options
    const url = "http://127.0.0.1:8086/api/recipe/";
    const headers = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    // fetch the API
    fetch(url, headers)
        // response is a RESTful "promise" on any successful fetch
        .then(response => {
            // check for response errors
            if (response.status !== 200) {
                const errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerHTML = errorMsg;
                tr.appendChild(td);
                resultContainer.appendChild(tr);
                return;
            }
            // fetch the data from API
            response.json().then(data => {
                console.log(data);
                for (let row in data) {
                    console.log(data[row]);
                    add_row(data[row]);
                }
            }).catch(err => {
                console.error(err);
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerHTML = err;
                tr.appendChild(td);
                resultContainer.appendChild(tr);
            });
        }).catch(err => {
            console.error(err);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = err;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
        });

    function add_row(rowData) {
        const tr = document.createElement("tr");
        for (let key in rowData) {
            const td = document.createElement("td");
            td.innerHTML = rowData[key];
            tr.appendChild(td);
        }
        resultContainer.appendChild(tr);
    }

      // fetch the data from API
    fetch(read_fetch, read_options)
      .then(response => {
        // checks for errors in response
        if (response.status !== 200) {
            const errorMsg = 'Database read error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            return;
        }
        // if no error, json data is printed
        response.json().then(data => {
            console.log(data);
            for (let row in data) {
              console.log(data[row]);
              add_row(data[row]);
            }
        })
    })
    // catch fetch errors, if API data can not be fetched
    .catch(err => {
      console.error(err);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = err;
      tr.appendChild(td);
      resultContainer.appendChild(tr);
    });
</script>

<!-- Shopping List Button -->
<button class="open-button" onclick="openForm()">My Shopping List</button>

<div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h2>Shopping List</h2>
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





<!-- Without Backend -->
<html>
<head>
  <title>Recipe Search</title>
  <style>
    /* Add some basic styling */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    input[type="text"] {
      padding: 10px;
      width: 300px;
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
    #results {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Recipe Search</h1>
  <input type="text" id="searchInput" placeholder="Enter a recipe keyword">
  <button onclick="searchRecipes()">Search</button>
  <div id="results"></div>

  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    function searchRecipes() {
      var input = document.getElementById("searchInput").value;
      // Make a GET request to the API
      axios.get('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe', {
        headers: {
          'X-RapidAPI-Key': '53ed50b3c5mshb1ebce663573fbap1a08a4jsneab1f395e0a6',
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        },
        params: {
          q: input
        }
      })
      .then(function(response) {
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";
        // Check if recipes exist
        console.log(response.data)
        if (response.data && response.data.recipes && response.data.recipes.length > 0) {
          var recipes = response.data.recipes;
          recipes.forEach(function(recipe) {
            var recipeDiv = document.createElement("div");
            recipeDiv.innerHTML = "<h3>" + recipe.title + "</h3>";
            recipeDiv.innerHTML += "<p>" + recipe.description + "</p>";
            resultsDiv.appendChild(recipeDiv);
          });

        } else {
          resultsDiv.innerHTML = "<p>No recipes found.</p>";
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  </script>
</body>
</html>
