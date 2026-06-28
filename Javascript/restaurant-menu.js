const restaurantData = {
    savor: {
        name: 'Savor Foods & Delicacy',
        desc: 'Authentic local meals prepared fresh every day',
        image: 'images/restauarant 1.jpg',
        rating: '4.9/5',
        menu: {
            main: [
                { name: 'Egusi Soup & Swallow', price: 4500, desc: 'Rich egusi soup with fufu' },
                { name: 'Jollof Rice & Chicken', price: 5500, desc: 'Spiced jollof rice with grilled chicken' },
                { name: 'Pepper Soup', price: 3500, desc: 'Hot pepper soup with meat' },
                { name: 'Afang Soup & Fufu', price: 5000, desc: 'Traditional afang with cassava fufu' },
                { name: 'Ofe Akwu (Palmoil Soup)', price: 4800, desc: 'Creamy palmoil soup with meat' },
                { name: 'Catfish Pepper Soup', price: 6500, desc: 'Fresh catfish in hot pepper broth' },
                { name: 'Banga Soup & Eba', price: 5200, desc: 'Coconut banga soup with garri' },
                { name: 'Okra Soup & Pounded Yam', price: 4200, desc: 'Silky okra soup with yam' },
                { name: 'Bush Meat Stew', price: 7200, desc: 'Tender bush meat with vegetables' },
                { name: 'Suya with Jollof Rice', price: 5800, desc: 'Spiced grilled meat with rice' }
            ],
            desserts: [
                { name: 'Choco Cake', price: 2500, desc: 'Homemade chocolate cake' },
                { name: 'Fruit Salad', price: 2000, desc: 'Fresh mixed fruits' },
                { name: 'Custard & Pineapple', price: 1800, desc: 'Creamy custard with pineapple' },
                { name: 'Mango Sorbet', price: 1500, desc: 'Chilled mango ice' },
                { name: 'Carrot Cake', price: 2200, desc: 'Moist carrot cake with frosting' },
                { name: 'Coconut Pudding', price: 1900, desc: 'Silky coconut pudding' }
            ],
            beverages: [
                { name: 'Fresh Juice', price: 1200, desc: 'Orange or mango juice' },
                { name: 'Zobo Drink', price: 1000, desc: 'Cold hibiscus drink' },
                { name: 'Smoothie', price: 1500, desc: 'Mixed fruit smoothie' },
                { name: 'Mineral Water', price: 500, desc: '500ml bottled water' },
                { name: 'Ginger & Lemon', price: 1100, desc: 'Refreshing ginger lemon drink' },
                { name: 'Pineapple Punch', price: 1400, desc: 'Tropical pineapple juice' }
            ]
        }
    },
    nacho: {
        name: 'Nacho Daddy',
        desc: 'Spicy and savory dishes with fast delivery',
        image: 'images/restauarant 2.jpg',
        rating: '4.7/5',
        menu: {
            main: [
                { name: 'Loaded Nachos Supreme', price: 5500, desc: 'Crispy nachos with all toppings' },
                { name: 'Burrito Bowl', price: 4800, desc: 'Rice, beans, meat and veggie bowl' },
                { name: 'Spicy Tacos x3', price: 4200, desc: 'Three soft tacos with hot salsa' },
                { name: 'Quesadilla Deluxe', price: 5000, desc: 'Grilled tortilla with cheese and meat' },
                { name: 'Chili Con Carne', price: 4500, desc: 'Spiced beef chili with rice' },
                { name: 'Enchiladas', price: 5200, desc: 'Rolled tortillas in red sauce' },
                { name: 'Fajitas Plate', price: 5800, desc: 'Grilled peppers and meat strips' },
                { name: 'Chimichangas', price: 5300, desc: 'Deep-fried burrito with sauce' },
                { name: 'Taco Salad', price: 4600, desc: 'Crispy shell with taco filling' },
                { name: 'Burrito Supreme', price: 6200, desc: 'Giant burrito with all fixings' }
            ],
            desserts: [
                { name: 'Churros', price: 2200, desc: 'Spanish fried pastry with chocolate' },
                { name: 'Flan', price: 2500, desc: 'Creamy caramel custard' },
                { name: 'Tres Leches Cake', price: 3000, desc: 'Three-milk sponge cake' },
                { name: 'Mango Cheesecake', price: 3200, desc: 'Mango-flavored cheesecake' },
                { name: 'Chocolate Churro Bomb', price: 2800, desc: 'Churro with chocolate filling' },
                { name: 'Cinnamon Sugar Donut', price: 1900, desc: 'Soft donut with cinnamon' }
            ],
            beverages: [
                { name: 'Spicy Mango Margarita', price: 2500, desc: 'Virgin margarita with mango' },
                { name: 'Horchata', price: 1800, desc: 'Creamy rice drink' },
                { name: 'Agua Fresca', price: 1500, desc: 'Refreshing fruit water' },
                { name: 'Cold Brew Coffee', price: 1600, desc: 'Smooth cold coffee' },
                { name: 'Piña Colada', price: 2200, desc: 'Coconut and pineapple blend' },
                { name: 'Lime Agua', price: 1400, desc: 'Fresh lime refresher' }
            ]
        }
    },
    casablanca: {
        name: 'Casablanca Restaurants & Winery',
        desc: 'Premium meals for a delightful dining experience',
        image: 'images/restauarant 3.jpg',
        rating: '5.0/5',
        menu: {
            main: [
                { name: 'Grilled Steak with Truffle', price: 8500, desc: 'Premium cut steak with truffle oil' },
                { name: 'Salmon Fillet', price: 7800, desc: 'Pan-seared salmon with lemon butter' },
                { name: 'Tagine Chicken', price: 6500, desc: 'Moroccan spiced chicken in clay pot' },
                { name: 'Lamb Couscous', price: 7200, desc: 'Tender lamb with fluffy couscous' },
                { name: 'Seafood Paella', price: 8200, desc: 'Spanish rice with shrimp and mussels' },
                { name: 'Duck Breast', price: 7500, desc: 'Crispy duck breast with berry sauce' },
                { name: 'Lobster Thermidor', price: 9500, desc: 'Luxury lobster with cream sauce' },
                { name: 'Beef Wellington', price: 8800, desc: 'Tender beef in pastry crust' },
                { name: 'Sea Bass Provençale', price: 8200, desc: 'Whole fish with Mediterranean herbs' },
                { name: 'Veal Scaloppine', price: 8000, desc: 'Tender veal with lemon caper sauce' }
            ],
            desserts: [
                { name: 'Chocolate Mousse', price: 3500, desc: 'Silky smooth chocolate mousse' },
                { name: 'Baklava', price: 3200, desc: 'Flaky pastry with honey and nuts' },
                { name: 'Crème Brûlée', price: 3800, desc: 'Classic caramelized custard' },
                { name: 'Fruit Tart', price: 4000, desc: 'Fresh seasonal fruits on pastry' },
                { name: 'Panna Cotta', price: 3600, desc: 'Italian cream dessert with berries' },
                { name: 'Tiramisu', price: 3900, desc: 'Classic Italian layered dessert' }
            ],
            beverages: [
                { name: 'House Wine (Red)', price: 4500, desc: 'Premium red wine' },
                { name: 'House Wine (White)', price: 4500, desc: 'Premium white wine' },
                { name: 'Moroccan Tea', price: 2000, desc: 'Mint tea with dates' },
                { name: 'Sparkling Water', price: 1200, desc: 'Premium sparkling water' },
                { name: 'Aperol Spritz', price: 3500, desc: 'Italian sparkling cocktail' },
                { name: 'Espresso', price: 1500, desc: 'Strong Italian espresso' }
            ]
        }
    },
    native: {
        name: 'Native Foods & Delicacy',
        desc: 'Fresh, traditional dishes from trusted chefs',
        image: 'images/restauarant 4.jpg',
        rating: '4.8/5',
        menu: {
            main: [
                { name: 'Abacha & Ugba', price: 3500, desc: 'Shredded cassava with ukazi leaves' },
                { name: 'Nkwobi', price: 4200, desc: 'Spiced cow foot with ataba leaves' },
                { name: 'Pounded Yam & Okro Soup', price: 4800, desc: 'Smooth pounded yam with okro' },
                { name: 'Bitter Leaf Soup', price: 4500, desc: 'Traditional bitter leaf with meat' },
                { name: 'Moi Moi & Rice', price: 2800, desc: 'Steamed bean pudding with rice' },
                { name: 'Suya & Pap', price: 3200, desc: 'Spiced meat skewers with pap' },
                { name: 'Isi Ewu', price: 5500, desc: 'Spicy goat head with native spices' },
                { name: 'Oha Soup & Fufu', price: 5200, desc: 'Traditional oha soup with fufu' },
                { name: 'Akamu & Beans', price: 2500, desc: 'Corn pap with beans' },
                { name: 'Pepper Soup Special', price: 4900, desc: 'Mixed meat pepper soup' }
            ],
            desserts: [
                { name: 'Coconut Bread', price: 2000, desc: 'Traditional coconut bread' },
                { name: 'Chin Chin', price: 1800, desc: 'Crispy fried snack' },
                { name: 'Puff Puff', price: 1600, desc: 'Sweet fried dough balls' },
                { name: 'Agidi Jelly', price: 2200, desc: 'Corn jelly with honey' },
                { name: 'Bole & Pepper', price: 2100, desc: 'Roasted plantain with pepper sauce' },
                { name: 'Zobo Gelatin', price: 1900, desc: 'Hibiscus flavored gelatin' }
            ],
            beverages: [
                { name: 'Palm Wine', price: 2000, desc: 'Fresh palm wine' },
                { name: 'Ginger Drink', price: 1200, desc: 'Spiced ginger beverage' },
                { name: 'Kunun Aya', price: 1000, desc: 'Peanut milk drink' },
                { name: 'Fresh Lime Juice', price: 1300, desc: 'Lime juice with ginger' },
                { name: 'Hibiscus Zobo', price: 1100, desc: 'Cold hibiscus drink' },
                { name: 'Tamarind Drink', price: 1200, desc: 'Tangy tamarind juice' }
            ]
        }
    }
};

const cartItemsContainer = document.querySelector('.cart-items');
const totalText = document.querySelector('.cart-footer h3');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.querySelector('.cart-link');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const tabButtons = document.querySelectorAll('.tab-btn');
const checkoutBtn = document.querySelector('.checkout-btn');

let cart = JSON.parse(localStorage.getItem('foodCart') || '[]');

function getRestaurantFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('rest') || 'savor';
}

function loadRestaurantMenu() {
    const restaurantId = getRestaurantFromURL();
    const restaurant = restaurantData[restaurantId];

    if (!restaurant) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('rest-name').textContent = restaurant.name;
    document.getElementById('rest-desc').textContent = restaurant.desc;
    document.getElementById('rest-image').src = restaurant.image;
    document.getElementById('rest-rating').textContent = restaurant.rating + ' ⭐';

    renderMenuCategory('main', restaurant.menu.main);
    renderMenuCategory('desserts', restaurant.menu.desserts);
    renderMenuCategory('beverages', restaurant.menu.beverages);
}

function renderMenuCategory(category, items) {
    const container = document.getElementById(category);
    container.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        card.innerHTML = `
            <div class="menu-card-content">
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="menu-item-footer">
                    <span class="price">₦${item.price}</span>
                    <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}" data-img="images/placeholder.jpg">Add</button>
                </div>
            </div>
        `;
        container.appendChild(card);

        const addBtn = card.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('click', () => {
            addToCart({
                name: item.name,
                price: item.price,
                img: 'images/placeholder.jpg'
            });
        });
    });
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
    localStorage.setItem('foodCart', JSON.stringify(cart));
}

function updateCartCount() {
    if (!cartCount) return;
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

function addToCart(food) {
    const existingItem = cart.find(item => item.name === food.name);
    if (existingItem) {
        cartSidebar.classList.add('active');
        return;
    } 
    cart.push({
         ...food, 
         quantity: 1 
    });
    
    updateCart();
    if (cartSidebar) cartSidebar.classList.add('active');
}

// Tab switching
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.menu-grid').forEach(grid => grid.style.display = 'none');
        document.getElementById(btn.dataset.tab).style.display = 'grid';
    });
});

// Cart sidebar
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

if (checkoutBtn) {

    checkoutBtn.addEventListener('click', () => {

        if (!cart.length) {

            alert("Your cart is empty.");
            return;

        }

        if (localStorage.getItem("loggedIn") !== "true") {

            alert("Please login before checking out.");

            window.location.href = "login.html";

            return;
        }

        window.location.href = "checkout.html";

    });

}

// Initialize
loadRestaurantMenu();
updateCartCount();
updateCart();
