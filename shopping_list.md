<form>
      <p><label>
          Name:
          <input type="text" name="name" id="name" required>
      </label></p> 
          Score:
          <input type="text" name="score" id="score" onchange="validate()" required>
      <p>
          <button>Create</button>
      </p>
</form>

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Score</th>
    </tr>
</thead>
<tbody id="result1">
    <!-- javascript generated data -->
</tbody>
</table>

<script>
// prepare HTML result container for new output
  const resultContainer = document.getElementById("result1");
  const url = "http://127.0.0.1:8086/api/shop"
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
        score: document.getElementById("score").value,
        name: document.getElementById("name").value,
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
    const name = document.createElement("td");
	  const score = document.createElement("td");
  

    // obtain data that is specific to the API
    score.innerHTML = data.score; 
    name.innerHTML = data.name; 

    // add HTML to container
	  tr.appendChild(name);
    tr.appendChild(score);

    resultContainer.appendChild(tr);
  }
  
function validate(){
// Checks if input score is a number and within 0-10
  var userScore = document.getElementById('score').value;
  var userName = document.getElementById('name').value;
  if(isNaN(userScore) || userScore > 11 || userScore < 0 || !isNaN(userName)){
    alert("Please enter a valid score or name 👹");
  }else{
    create_user();
  }
}
</script>

<div>
<form action="javascript:delete_record()">
  <button>Delete Records</button>
</form>
<div>
