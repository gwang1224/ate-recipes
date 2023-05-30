<html>

<head>
      <link rel="stylesheet" href="index.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<style>

#recipe td, #recipe th {
  border: 1px solid #ddd;
  padding: 8px;
}

#recipe tr:nth-child(even){background-color: #f2f2f2;}

/* #recipe tr:hover {
  background-color: #DDC89B;
  color: white;
  } */

#recipe th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #D3BFA9;
  color: white;
}
</style>

<div>
  <img src="images/recipes_home.png" width="100%">
  <section class="team1">
      <br>
      <h2>fulfill any craving...</h2>
      <p>Who doesn't love soup? Here are some soup recipes to get you started!</p>
  </section>
</div>

<div>
<section class="team1">
<body>
  <div class="search_bar">
    <input id="search" type="text" placeholder="Search Recipe..">
      <button onclick="searchRecipe()" id="enter" type="button">🔍</button>
  </div>
</body>
</section>
</div>

<br>

<div>
<section class="team1">
<main id="content" class="main-content" role="main">
    <!-- HTML table fragment for page -->
    <table id="recipe">
        <thead>
            <tr>
                <th style="width:10%">food</th>
                <th style="width:30%">ingredients</th>
                <th style="width:10%">servings</th>
                <th style="width:50%">instructions</th>
            </tr>
        </thead>
        <tbody id="result">
            <!-- generated rows -->
        </tbody>
    </table>
</main>
</section>
</div>

<script>
    // prepare HTML result container for new output
    const resultContainer = document.getElementById("result");

    // prepare fetch options
    const url = "https://ated.duckdns.org/api/recipe/";
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

    function searchRecipe() {
  // Get the search input value
  const searchInput = document.getElementById("search").value;

// Prepare fetch options with the search query
  const url = "https://ated.duckdns.org/api/recipe/" + encodeURIComponent(searchInput);
  const headers = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  // Clear the existing table rows
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  // Display loading message while fetching data
  const loadingMessage = document.getElementById("loading");
  loadingMessage.style.display = "block";
  loadingMessage.textContent = "Loading...";

  // Fetch the API with search query
  fetch(url, headers)
    .then(response => {
      // Check for response errors
      if (response.status !== 200) {
        const errorMsg = 'Database response error: ' + response.status;
        console.log(errorMsg);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = errorMsg;
        tr.appendChild(td);
        resultContainer.appendChild(tr);
        loadingMessage.style.display = "none";
        return;
      }
      // Fetch the data from API
      response.json().then(data => {
        console.log(data);
        // Hide the loading message
        loadingMessage.style.display = "none";
        // Iterate through the data and add rows to the table
        for (let row of data) {
          addRowToTable(row);
        }
      }).catch(err => {
        console.error(err);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = err;
        tr.appendChild(td);
        resultContainer.appendChild(tr);
        loadingMessage.style.display = "none";
      });
    }).catch(err => {
      console.error(err);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = err;
      tr.appendChild(td);
      resultContainer.appendChild(tr);
      loadingMessage.style.display = "none";
    });
}

function addRowToTable(rowData) {
  const tr = document.createElement("tr");
  for (let key in rowData) {
    const td = document.createElement("td");
    td.innerHTML = rowData[key];
    tr.appendChild(td);
  }
  const resultContainer = document.getElementById("result");
  resultContainer.appendChild(tr);
}
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