// Checkout page functionality - Add this to your existing main.js file
document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the checkout page by looking for checkout-specific elements
  const checkoutContainer = document.querySelector(".checkout-container");
  if (!checkoutContainer) return; // Skip this code if not on checkout page
  
  // Spice products data
  const spices = [
    {
      id: 1,
      name: "Spicy Turmeric",
      price: 10.99,
      quantity: 0
    },
    {
      id: 2,
      name: "Chili Powder",
      price: 7.99,
      quantity: 0
    },
    {
      id: 3,
      name: "Cinnamon Sticks",
      price: 5.49,
      quantity: 0
    }
  ];

  // Get DOM elements
  const subtotalElement = document.getElementById("subtotal");
  const checkoutForm = document.getElementById("checkout-form");
  const placeOrderButton = document.getElementById("place-order");

  // Add event listeners to quantity buttons
  document.querySelectorAll(".quantity-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      const isIncrease = btn.classList.contains("increase");
      updateQuantity(id, isIncrease ? 1 : -1);
    });
  });

  // Function to update item quantity
  function updateQuantity(id, change) {
    const spice = spices.find(s => s.id === id);
    if (spice) {
      // Don't allow negative quantities
      if (spice.quantity + change < 0) return;
      
      spice.quantity += change;
      
      // Update the display
      const quantityElement = document.getElementById(`quantity-${id}`);
      const totalElement = document.getElementById(`total-${id}`);
      
      if (quantityElement) {
        quantityElement.textContent = spice.quantity;
      }
      
      if (totalElement) {
        const itemTotal = (spice.price * spice.quantity).toFixed(2);
        totalElement.textContent = `$${itemTotal}`;
      }
      
      updateSubtotal();
    }
  }

  // Function to update subtotal
  function updateSubtotal() {
    const subtotal = spices.reduce((sum, spice) => sum + (spice.price * spice.quantity), 0);
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    
    // Disable place order button if subtotal is 0
    if (placeOrderButton) {
      placeOrderButton.disabled = subtotal === 0;
      placeOrderButton.style.opacity = subtotal === 0 ? "0.5" : "1";
    }
  }

  // Initialize with 0 quantities
  updateSubtotal();

  // Handle form submission
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Check if any spices are selected
      const hasItems = spices.some(spice => spice.quantity > 0);
      if (!hasItems) {
        alert("Please select at least one spice before placing your order.");
        return;
      }
      
      
      showOrderConfirmation();
    });
  }


  function showOrderConfirmation() {
   
    const orderedItems = spices
      .filter(spice => spice.quantity > 0)
      .map(spice => `${spice.quantity} × ${spice.name}`)
      .join("<br>");
    
   
    let modal = document.getElementById("order-confirmation-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "order-confirmation-modal";
      modal.className = "modal";
      
      modal.innerHTML = `
        <div class="modal-content">
          <h3 class="modal-title">Order Confirmed!</h3>
          <p class="modal-message">
            Thank you for your order.<br><br>
            <strong>Your order:</strong><br>
            ${orderedItems}<br><br>
            Your spices will be shipped soon!
          </p>
          <button class="modal-close">Continue Shopping</button>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      
      modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.style.display = "none";
       
        spices.forEach(spice => spice.quantity = 0);
        window.location.href = "index.html";
      });
    } else {
      
      const messageElement = modal.querySelector(".modal-message");
      if (messageElement) {
        messageElement.innerHTML = `
          Thank you for your order.<br><br>
          <strong>Your order:</strong><br>
          ${orderedItems}<br><br>
          Your spices will be shipped soon!
        `;
      }
    }
    
   
    modal.style.display = "flex";
  }

  
  const cardNumberInput = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("expiry");
  const cvvInput = document.getElementById("cvv");

  if (cardNumberInput) {
    cardNumberInput.addEventListener("input", (e) => {
      
      let value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
      let formattedValue = "";
      
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += value[i];
      }
      
      e.target.value = formattedValue.substring(0, 19); // Limit to 16 digits + 3 spaces
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      
      let value = e.target.value.replace(/[^0-9]/gi, "");
      
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
      
      e.target.value = value;
    });
  }

  if (cvvInput) {
    cvvInput.addEventListener("input", (e) => {
      
      e.target.value = e.target.value.replace(/[^0-9]/gi, "").substring(0, 4);
    });
  }
});
