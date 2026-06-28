// SHARED CART SYSTEM

let cart = JSON.parse(localStorage.getItem('foodCart') || '[]');

const cartItemsContainer = document.querySelector('.cart-items');
const totalText = document.querySelector('.cart-footer h3');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.querySelector('.cart-link');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const checkoutBtn = document.querySelector('.checkout-btn');

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('foodCart', JSON.stringify(cart));
}

// Update cart display
function updateCart() {
    if (!cartItemsContainer || !totalText) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (!cart.length) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    }

    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-info">
                <h4>${item.name}</h4>
                <p>₦${item.price}</p>
                <div class="quantity-controls">
                    <button class="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase">+</button>
                </div>
            </div>
            <button class="remove-btn">&times;</button>
        `;

        cartItem.querySelector('.increase').addEventListener('click', () => {
            item.quantity += 1;
            updateCart();
        });

        cartItem.querySelector('.decrease').addEventListener('click', () => {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                cart = cart.filter(cartFood => cartFood.name !== item.name);
            }
            updateCart();
        });

        cartItem.querySelector('.remove-btn').addEventListener('click', () => {
            cart = cart.filter(cartFood => cartFood.name !== item.name);
            updateCart();
        });

        cartItemsContainer.appendChild(cartItem);
    });

    totalText.textContent = `Total: ₦${total}`;
    updateCartCount();
    saveCart();
}

// Update cart badge count
function updateCartCount() {
    if (!cartCount) return;
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Add item to cart
function addToCart(food) {
    const existingItem = cart.find(item => item.name === food.name);

    // If it's already in the cart, just open the cart.
    if (existingItem) {
        if (cartSidebar) {
            cartSidebar.classList.add('active');
        }
        return;
    }

    cart.push({
        ...food,
        quantity: 1
    });

    updateCart();

    if (cartSidebar) {
        cartSidebar.classList.add('active');
    }
}

// Render order summary for checkout page
function renderOrderSummary() {
    const orderItemsContainer = document.querySelector('.order-items');
    const orderTotalText = document.querySelector('.order-total');

    if (!orderItemsContainer || !orderTotalText) return;

    orderItemsContainer.innerHTML = '';
    let total = 0;

    if (!cart.length) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty. Please add items before checkout.</p>';
        orderTotalText.textContent = 'Total: ₦0';
        return;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <p>${item.name} x ${item.quantity}</p>
            <span>₦${item.price * item.quantity}</span>
        `;
        orderItemsContainer.appendChild(orderItem);
    });

    orderTotalText.textContent = `Total: ₦${total}`;
}

// Clear cart after payment
function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

// Cart sidebar toggle
if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('active');
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
}

//Checkout button click event
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (!cart.length) {
            alert("Your cart is empty.");
            return;
        }
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("Please log in to proceed to checkout.");
        window.location.href = "login.html"; // Redirect to login page
        return;
    }
    window.location.href = "checkout.html"; // Redirect to checkout page
    });
}

// Initialize
updateCartCount();
updateCart();
