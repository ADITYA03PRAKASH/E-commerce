// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Add to cart logic
let cartCount = 0;
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    alert(` Item added! Total items in cart: ${cartCount}`);
  });
});
