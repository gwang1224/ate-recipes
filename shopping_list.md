<style>
    #shop td, #shop th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    #shop tr:nth-child(even){
      background-color: #f2f2f2;
    }
    #shop tr:hover {
      background-color: #8E3520;
      color: white;
    }
    #shop th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #D3BFA9;
      color: white;
    }

    table {

    }
  </style>

<div>
<section class="team1">
<form>
  <p>
    <label>Item:
      <input type="text" food="food" id="food" onchange="add()" required>
    </label>
  </p>
  <p>
    <button class="button">Add Item</button>
  </p>
</form>

<table id="shop" style="width:100%">
  <thead>
    <tr>
      <th>Item</th>
    </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>
</section>
</div>

<br>
<br>



<script>
 const resultContainer = document.getElementById("result");
  const url = "https://ated.duckdns.org/api/shop"
  // Accessed CRUD methods with RESTapi endpoints
  const create_fetch = url + '/create';
  const read_fetch = url + '/';
  const del_fetch = url + '/delete';

  read_users();

  // Display Score Table, data is fetched from Backend Database (scores table)
  function read_users() {
    // prepare fetch options
    const read_options = {
      method: 'GET', // GET method
      mode: 'cors', 
      cache: 'default', 
      credentials: 'omit', 
      headers: {
        'Content-Type': 'application/json'
      },
    };

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

 
  function create_user(){
    //Creates user with inputted score
    const body = {
        food: document.getElementById("food").value,
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // Fetch API call to the database to create a new user
    fetch(create_fetch, requestOptions)
      .then(response => {
        if (response.status !== 200) {
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            add_row(data);
        })
    })
  }

  function delete_record() {
  const delOptions = {
        method: 'DELETE',
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // URL for DELETE API
    // Fetch API call to the database to create a new user
    fetch(del_fetch, delOptions)
      .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
          window.location.reload();
          return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
        })
    })
  }

  function add_row(data) {
    const tr = document.createElement("tr");
    const food = document.createElement("td");

  

    // obtain data that is specific to the API
    food.innerHTML = data.food; 

    // add HTML to container
	  tr.appendChild(food);

    resultContainer.appendChild(tr);
  }
  
function add(){
// Checks if input score is a number and within 0-10
    create_user();
}
</script>