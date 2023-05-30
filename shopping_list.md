<form>
      <p><label>
          Item:
          <input type="text" name="name" id="name" required>
      <p>
          <button onclick = "addRowToTable()" >Add Item</button>
      </p>

<table>
<thead>
    <tr>
    <th>Item</th>
    </tr>
</thead>
<tbody id="result">
    <!-- javascript generated data -->
</tbody>
</table>

  <script>
    // prepare HTML result container for new output
    const resultContainer = document.getElementById("result");

    // prepare fetch options
    const url = "https://ated.duckdns.org/api/shop/";
    const headers = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
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

<div>
<form action="javascript:delete_record()">
  <button>Delete Items</button>
</form>
<div>
