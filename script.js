const foodLayout = document.querySelector('.featured-food-layout');
const cartItemsContainer = document.querySelector('.cart-items');
const totalText = document.querySelector('.cart-footer h3');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.querySelector('.cart-link');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const checkoutBtn = document.querySelector('.checkout-btn');
const searchInput = document.getElementById('search-input') || document.querySelector('.search-bar input');
const searchForm = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');
const searchMessage = document.querySelector('.search-message');
const reviewForm = document.getElementById('review-form');
const reviewMessage = document.querySelector('.review-message');
const reviewGrid = document.querySelector('.review-grid');
const reviewLoadMoreBtn = document.getElementById('review-load-more');
const trackForm = document.getElementById('track-form');
const trackStatus = document.querySelector('.track-status');
const orderItemsContainer = document.querySelector('.order-items');
const orderTotalText = document.querySelector('.order-total');
const payDeliveryBtn = document.getElementById('payDelivery');
const payOnlineBtn = document.getElementById('payOnline');
const checkoutMessage = document.querySelector('.checkout-message');

const foods = [
    { img: 'images/egusi.jpeg', name: 'Fresh Egusi Soup & Swallow', price: 4500 },
    { img: 'images/Afang-Soup-Recipe.jpeg', name: 'Fresh Afang Soup & Swallow', price: 5000 },
    { img: 'images/jellof rice.jpeg', name: 'Jellof Rice', price: 3500 },
    { img: 'images/abacha-food.jpg', name: 'Abacha', price: 3000 },
    { img: 'images/fish berbecue.jpg', name: 'Fish Berbecue', price: 6000 },
    { img: 'images/nkwobi.jpeg', name: 'Nkwobi (Cow tail)', price: 7000 },
    { img: 'images/meat pie.jpg', name: 'Meat Pie', price: 1500 },
    { img: 'images/spaghetti.jpg', name: 'Spaghetti', price: 2500 }
];

let cart = JSON.parse(localStorage.getItem('foodCart') || '[]');

function saveCart() {
    localStorage.setItem('foodCart', JSON.stringify(cart));
}

//FOR FOOD CARD FUNCTIONALITY AND TO ADD FOOD TO CART
function renderFoods(list) {
    if (!foodLayout) return;

    foodLayout.innerHTML = '';

    if (!list.length) {
        foodLayout.innerHTML = '<p class="no-results">No dishes found. Try another search.</p>';
        return;
    }

    list.forEach(food => {
        const card = document.createElement('div');
        card.classList.add('food-card');

        card.innerHTML = `
            <img src="${food.img}" alt="${food.name}">
            <div class="food-content">
                <p>${food.name}</p>
                <h4>₦${food.price}</h4>
                <button class="add-btn">Add to Cart</button>
            </div>
        `;

        foodLayout.appendChild(card);

        const addBtn = card.querySelector('.add-btn');
        addBtn.addEventListener('click', () => addToCart(food));
    });
}
if (foodLayout) {
    renderFoods(foods);
}
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

function updateCartCount() {
    if (!cartCount) return;
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}
if (cartBtn) {
    cartBtn.addEventListener('click', event => {
        event.preventDefault();
        if (cartSidebar) cartSidebar.classList.add('active');
    });
}
if (closeCart) {
    closeCart.addEventListener('click', () => {
        if (cartSidebar) cartSidebar.classList.remove('active');
    });
}

function addToCart(food) {
    const existingItem = cart.find(item => item.name === food.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...food, quantity: 1 });
    }
    updateCart();
    if (cartSidebar) cartSidebar.classList.add('active');
}

function renderOrderSummary() {
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

//FOR CHECKOUT PAGE TO DISPLAY ORDER SUMMARY
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (!cart.length) {
            alert(
                'Your cart is empty'
            );
            return;
        }
        if (
            localStorage.getItem(
                'loggedIn'
            ) !== 'true'
        ) {
             alert(
                'Please login first'
            );

            window.location.href = 'login.html';

            return;
        }
        window.location.href = 'checkout.html';
    });
}

function filterFoods(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        renderFoods(foods);
        return;
    }
    const filtered = foods.filter(food => food.name.toLowerCase().includes(normalized));
    renderFoods(filtered);
}

function filterRestaurants(query) {
    const restaurantCards = document.querySelectorAll('.restaurant-image-layout .card');
    if (!restaurantCards.length) return;

    const normalized = query.trim().toLowerCase();
    restaurantCards.forEach(card => {
        const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
        const match = !normalized || title.includes(normalized) || desc.includes(normalized);
        card.style.display = match ? '' : 'none';
    });
}

// FOR THE SEARCH BAR FUNCTIONALITY
function performSearch() {
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        searchMessage.textContent = '';
        return;
    }

    let found = false;

    // Search foods
    const foodCards = document.querySelectorAll('.food-card');

    foodCards.forEach(card => {
        const foodName = card.querySelector('p')?.textContent.toLowerCase() || '';

        if (!found && foodName.includes(query)) {
            found = true;

            card.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            card.classList.add('search-highlight');

            setTimeout(() => {
                card.classList.remove('search-highlight');
            }, 2000);
        }
    });

    // Search restaurants only if food wasn't found
    if (!found) {
        const restaurantCards = document.querySelectorAll('.restaurant-image-layout .card');

        restaurantCards.forEach(card => {
            const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent.toLowerCase() || '';

            if (!found && (title.includes(query) || desc.includes(query))) {
                found = true;

                card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                card.classList.add('search-highlight');

                setTimeout(() => {
                    card.classList.remove('search-highlight');
                }, 2000);
            }
        });
    }

    // Show error message if nothing is found
    if (!found) {
        searchMessage.textContent = `Sorry, we couldn't find "${searchInput.value}".`;
    } else {
        searchMessage.textContent = '';
    }
}
if (searchForm) {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        performSearch();
    });
}
if (searchButton) {
    searchButton.addEventListener('click', event => {
        event.preventDefault();
        performSearch();
    });
}


function handleTrackOrder(orderId) {
    if (!trackStatus) return;
    trackStatus.textContent = `Order ${orderId} is being prepared and will arrive soon.`;
}

function handlePayment(method) {
    if (!checkoutMessage) return;
    if (!cart.length) {
        checkoutMessage.textContent = 'Your cart is empty. Please add items before completing checkout.';
        return;
    }
    checkoutMessage.textContent = `Thank you! Your order has been placed using ${method}. We will deliver it soon.`;
    cart = [];
    saveCart();
    updateCart();
    renderOrderSummary();
}


//REVIEW FORM FUNCTIONALITY TO ADD REVIEWS AND SAVE TO LOCAL STORAGE & CUSTOMER REVIEWS, SAVE TO LOCAL STORAGE AND SHOW MORE OR LESS REVIEWS
const storedReviews = JSON.parse(localStorage.getItem('customerReviews') || 'null');
const reviews = storedReviews || [
    { name: 'Amaka O.', text: 'The delivery was on time and the food was still hot. Best service in town!', rating: '4.9/5' },
    { name: 'David N.', text: 'Easy to use website and the menu is amazing. I order every week.', rating: '5.0/5' },
    { name: 'Mercy A.', text: 'Excellent customer support and flavorful dishes. Highly recommended.', rating: '4.8/5' }
];
const reviewIncrement = 3;
let visibleReviewCount = reviewIncrement;

function saveReviews() {
    localStorage.setItem('customerReviews', JSON.stringify(reviews));
}

function renderReviews() {
    if (!reviewGrid) return;
    reviewGrid.innerHTML = '';
    const displayReviews = reviews.slice(0, visibleReviewCount);
    displayReviews.forEach(review => {
        const card = document.createElement('article');
        card.classList.add('review-card');
        card.innerHTML = `
            <p>"${review.text}"</p>
            <h4>${review.name}</h4>
            <span>${review.rating}</span>
        `;
        reviewGrid.appendChild(card);
    });
    if (reviewLoadMoreBtn) {
        if (reviews.length <= reviewIncrement) {
            reviewLoadMoreBtn.style.display = 'none';
        } else {
            reviewLoadMoreBtn.style.display = 'inline-flex';
            reviewLoadMoreBtn.textContent = visibleReviewCount < reviews.length ? 'Show more reviews' : 'Show fewer reviews';
        }
    }
}

function showMoreReviews() {
    if (visibleReviewCount < reviews.length) {
        visibleReviewCount = Math.min(reviews.length, visibleReviewCount + reviewIncrement);
    } else {
        visibleReviewCount = reviewIncrement;
    }
    renderReviews();
}
if (reviewForm) {
    reviewForm.addEventListener('submit', event => {
        event.preventDefault();
        const nameInput = document.getElementById('review-name');
        const textInput = document.getElementById('review-text');
        if (!nameInput.value.trim() || !textInput.value.trim()) {
            showReviewMessage('Please provide a name and review.');
            return;
        }
        addReview(nameInput.value, textInput.value);
        showReviewMessage('Thanks! Your review has been submitted.');
        reviewForm.reset();
        if (reviewGrid) {
            reviewGrid.firstElementChild?.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
if (reviewGrid) {
    renderReviews();
}
if (reviewLoadMoreBtn) {
    reviewLoadMoreBtn.addEventListener('click', showMoreReviews);
}
function showReviewMessage(message) {
    if (!reviewMessage) return;
    reviewMessage.textContent = message;
}

function addReview(name, text) {
    const newReview = {
        name: name.trim(),
        text: text.trim(),
        rating: '5.0/5'
    };
    reviews.unshift(newReview);
    saveReviews();
    renderReviews();
}


if (trackForm) {
    trackForm.addEventListener('submit', event => {
        event.preventDefault();
        const orderId = document.getElementById('order-id').value.trim();
        if (!orderId) {
            if (trackStatus) trackStatus.textContent = 'Please enter a valid order ID.';
            return;
        }
        handleTrackOrder(orderId);
    });
}

if (payDeliveryBtn) {
    payDeliveryBtn.addEventListener('click', () => handlePayment('Pay on Delivery'));
}

if (payOnlineBtn) {
    payOnlineBtn.addEventListener('click', () => handlePayment('Online Payment'));
}

updateCartCount();
updateCart();
renderOrderSummary();

//TO SHOW LOGGED IN USER IN THE NAVBAR
const userAuth = document.querySelector('.user-auth');

const user = JSON.parse(localStorage.getItem('foodUser'));
const loggedIn = localStorage.getItem('loggedIn');

if (loggedIn === 'true' && user) {
    userAuth.innerHTML = `
        <span class="welcome-user">
            Welcome, ${user.fullname}
        </span>

        <a href="#" id="logout-btn">
            Logout
        </a>
    `;

    document
    .getElementById('logout-btn')
    .addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        location.reload();
    });
}

