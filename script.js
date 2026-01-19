// script.js
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        media: "https://via.placeholder.com/300x200.png?text=Product+1",
        type: "image"
    },
    {
        id: 2,
        name: "Product 2",
        price: 39.99,
        media: "https://www.w3schools.com/html/mov_bbb.mp4",
        type: "video"
    },
    {
        id: 3,
        name: "Product 3",
        price: 19.99,
        media: "https://via.placeholder.com/300x200.png?text=Product+3",
        type: "image"
    }
];

let cart = [];

function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let mediaElement;
        if (product.type === 'video') {
            mediaElement = `
                <video controls>
                    <source src="${product.media}" type="video/mp4">
                </video>
            `;
        } else {
            mediaElement = `<img src="${product.media}" alt="${product.name}">`;
        }

        productCard.innerHTML = `
            ${mediaElement}
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});