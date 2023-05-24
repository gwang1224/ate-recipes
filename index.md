<!-- home image -->
<div>
    <img src="images/home.png" width="100%" height="100%">
   <div class="loading-screen">
  <div class="mushroom"></div>
</div>
<style>
.loading-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
}
.mushroom {
  width: 50px;
  height: 50px;
  background-image: url('./images/green_mushroom.png'); /* Replace with your mushroom image */
  background-size: cover;
  animation: mushroomAnimation 1s infinite;
}
@keyframes mushroomAnimation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
</div><!-- home image -->



<body style="background-color: #F5F5EF">
<!-- buttons to links -->
<div class="row">
    <div class="col">
        <img src="images/recipes.png" width="700px" height="400px" style="text-align: right">
    </div>
    <div class="col">
        <br>
        <a href="https://gwang1224.github.io/ate-recipes/recipes.html" class="button" style="text-align: center">Search for recipes</a>
        <br>
        <br>
        <a href="https://gwang1224.github.io/ate-recipes/recommendations.html" class="button" style="text-align: center">Get your personalized recommendation</a>
        <br>
        <br>
        <a href="https://gwang1224.github.io/ate-recipes/ratings.html" class="button" style="text-align: center">Rate your recipes here</a>
        <br>
        <br>
        <a href="https://gwang1224.github.io/ate-recipes/blog.html" class="button" style="text-align: center">Join our community!</a>
        <br>
    </div>
</div>

<div>
    <img src="images/home2.png" width="100%" height="100%">
</div>

<br>
<br>
<br>
<br>

<div>
    <section class="team1">
        <h1>about us</h1>
        <br>
        <h2>welcome to ate...</h2>
        <p>the ultimate destination for discovering your ideal meals that not only tantalize your taste buds but also enhance your overall health and well-being. We understand that choosing the right food can be a challenge, especially when trying to balance flavor and nutrition. That's why we've created a unique website dedicated to helping you find precisely what you want to eat while prioritizing your health. At ate, we believe that healthy eating should never feel like a sacrifice. Our mission is to empower you to make informed decisions about your meals by providing personalized recommendations based on your individual preferences and specific health goals. Whether you're looking for a new recipe, aiming to follow a specific diet plan, or simply maintain a balanced lifestyle, we've got you covered.</p>
    </section>
</div>

<!--About Our Team-->
<section class="team">
    <h1>meet the team</h1>
    <p></p>
    <div class="row">
        <div class="team-col">
            <h1><a href="https://github.com/clairehzhao"><img src="images/team/clairez.png"></a></h1>
            <h3>Claire Zhao</h3>
        </div>
        <div class="team-col">
            <h1><a href="https://github.com/gwang1224"><img src="images/team/grace.png"></a></h1>
            <h3>Grace Wang</h3>
        </div>
        <div class="team-col">
            <h1><a href="https://github.com/ClaireChen3"><img src="images/team/clairec.png"></a></h1>
            <h3>Claire Chen</h3>
        </div>
    </div>
</section>
<section class="team1">
    <div class="row">
        <div class="team-col">
            <h1><a href="https://github.com/realethantran"><img src="images/team/ethant.png"></a></h1>
            <h3>Ethan Tran</h3>
        </div>
        <div class="team-col">
            <h1><a href="https://github.com/AlexKumar19"><img src="images/team/alexk.png"></a></h1>
            <h3>Alex Kumar</h3>
        </div>
        <div class="team-col">
            <h1><a href="https://github.com/ADVAYS16"><img src="images/team/advays.png"></a></h1>
            <h3>Advay Shindikar</h3>
        </div>
    </div>
</section>

<!-- Shopping List Button -->
<!DOCTYPE html>
<html>
<head>
<style>
/* Styles for the shopping list */
.shopping-list {
  list-style-type: none;
  padding: 0;
}
.shopping-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.shopping-list li span {
  margin-right: 10px;
}
/* Styles for the popup form */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 1px solid #ccc;
  z-index: 9;
  width: 400px; /* Updated width */
}
.form-container {
  max-width: 100%;
  padding: 20px;
  background-color: white;
}
.form-container input[type=text],
.form-container button {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: none;
}
.form-container button {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}
.form-container button:hover {
  opacity: 0.8;
}
.form-container .btn.cancel {
  background-color: red;
}
</style>
</head>
<body>

<button class="open-button" onclick="openForm()">My Shopping List</button>

<div class="chat-popup" id="myForm">
  <form class="form-container">
    <h2>Shopping List</h2>
    <ul id="shoppingList" class="shopping-list"></ul>
    <input type="text" id="itemInput" placeholder="Item" required>
    <input type="text" id="priceInput" placeholder="Price" required>
    <input type="number" id="quantityInput" placeholder="Quantity" required>
    <button type="button" onclick="addItem()">Add Item</button>
    <button type="button" onclick="closeForm()" class="btn cancel">Close</button>
  </form>
</div>

<script>
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    
    function addItem() {
        var itemInput = document.getElementById("itemInput");
        var priceInput = document.getElementById("priceInput");
        var quantityInput = document.getElementById("quantityInput");
        var shoppingList = document.getElementById("shoppingList");
        
        var item = itemInput.value;
        var price = priceInput.value;
        var quantity = quantityInput.value;
        
        if (item !== "" && price !== "" && quantity !== "") {
            var listItem = document.createElement("li");
            listItem.innerHTML = '<span>' + item + '</span>' + '<span>$' + price + '</span>' + '<span>Quantity: ' + quantity + '</span>' + '<button onclick="removeItem(this)">Remove</button>';
            shoppingList.appendChild(listItem);
            
            // Clear the input fields
            itemInput.value = "";
            priceInput.value = "";
            quantityInput.value = "";
        }
    }
    
    function removeItem(button) {
        var listItem = button.parentNode;
        var shoppingList = listItem.parentNode;
        shoppingList.removeChild(listItem);
    }
</script>

</body>
</html>

