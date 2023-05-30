<form>
  <p>
    <label>Item:
      <input type="text" name="name" id="name" required>
    </label>
  </p>
  <p>
    <button onclick="addRowToTable()">Add Item</button>
  </p>
</form>

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

  // fetch the API
  fetch("https://ated.duckdns.org/api/shop/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (let row of data) {
        addRow(row);
      }
    })
    .catch(err => {
      console.error(err);
    });

  function addRow(rowData) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = rowData.name;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  }

  function addRowToTable() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;

    if (name) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.textContent = name;
      tr.appendChild(td);
      resultContainer.appendChild(tr);

      nameInput.value = "";

      // Create the request body
      const requestBody = {
        name: name
      };

      // Send the POST request to the backend
      fetch("https://ated.duckdns.org/api/shop/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  function delete_record() {
    resultContainer.innerHTML = "";
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
</div>
