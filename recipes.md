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

<!-- Script is layed out in a sequence (no function) and will execute when page is loaded -->
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
  }
)
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


</html>