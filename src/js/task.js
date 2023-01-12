const products = document.getElementsByClassName("product");
const data = document.getElementsByClassName("price");

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
  
  console.log("hello");

  for (let i = 0; i < products.length; i++) {
    products[i].setAttribute("data-price", data[i].textContent)
    console.log(products[i]);
    console.log(data[i]);
    
  }
});