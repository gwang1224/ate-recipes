<html>
<body>
<style>
  .search_bar{
    border-width: 30px;
    padding-top: 100px;
    align-content: center;
  }
  #search{
    height: 50px;
    width: 1000px;
  }
</style>
  <div class="search_bar">
    <input id="search" type="text" placeholder="Search Recipe..">
  </div>
</body>
</html>
<!-- DOESN'T WORK PLS FIX THIS BECAUSE I DO NOT WANT TO thx -grace :) -->

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
<head>
    <!--iphone or other device view so it can format correctly-->
    <title>ate.</title>
    <!--to connect to the .css sheet in this case it will be index.css since there will be a different .css pae for each page so there can be easy clean up-->
    <link rel="stylesheet" href="index.css">
    <!--the google fonts links front https://fonts. google.com/-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</head>
<body>

<!--the header section or the top part of every page-->

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