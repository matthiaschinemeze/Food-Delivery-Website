// CHECKOUT PAGE

const checkoutBtn = document.querySelector('.checkout-btn');
const payDeliveryBtn = document.getElementById('payDelivery');
const payOnlineBtn = document.getElementById('payOnline');
const checkoutMessage = document.querySelector('.checkout-message');

// Validate checkout form
function validateCheckoutForm() {
    const customerName = document.getElementById('customer-name');
    const customerAddress = document.getElementById('customer-address');
    const customerPhone = document.getElementById('customer-phone');

    if (!customerName || !customerAddress || !customerPhone) return false;

    if (!customerName.value.trim() || !customerAddress.value.trim() || !customerPhone.value.trim()) {
        if (checkoutMessage) {
            checkoutMessage.textContent = 'Please fill in all required delivery information.';
            checkoutMessage.style.color = '#c1121f';
        }
        return false;
    }
    return true;
}

// Handle payment
function handlePayment(method) {
    if (!checkoutMessage) return;

    if (!cart.length) {
        checkoutMessage.textContent = 'Your cart is empty. Please add items before completing checkout.';
        checkoutMessage.style.color = '#c1121f';
        return;
    }

    if (!validateCheckoutForm()) {
        return;
    }

    checkoutMessage.textContent = `Thank you! Your order has been placed using ${method}. We will deliver it soon.`;
    checkoutMessage.style.color = '#22c55e';

    clearCart();
    renderOrderSummary();

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Payment button handlers
if (payDeliveryBtn) {
    payDeliveryBtn.addEventListener('click', () => handlePayment('Pay on Delivery'));
}

if (payOnlineBtn) {
    payOnlineBtn.addEventListener('click', () => handlePayment('Online Payment'));
}

// Initialize checkout page
renderOrderSummary();
