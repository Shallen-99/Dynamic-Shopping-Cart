const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;

function addProduct () {
  const name = productNameInput.value
  const price = parseFloat(productPriceInput.value)

  if(name === "") {
    return alert("Please input name of product")
  }
  if(price === "") {
    return alert("Please input price of product")
  }

  const newLi = document.createElement("li")
  cart.appendChild(newLi)
  newLi.innerHTML = `${name} $${price} <button class="remove-btn">Remove</button>`
  newLi.querySelector(".remove-btn").addEventListener("click", removeItem) 
}

addProductButton.addEventListener("click", addProduct)
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

//create function with var for price and name (use parseFloat)
//make alerts for when they dont add numbers or letters
//create var for creating the li
//added remove item function
//create var for add the quanitity and total price
