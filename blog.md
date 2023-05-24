<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>





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