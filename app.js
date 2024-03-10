// Sample API endpoints for room booking and food ordering
const API_URL = 'http://localhost:3000'; // Replace with your server URL

function loadFoodMenu() {
    // Dynamically change background image with a smooth transition
    document.body.style.transition = "background-image 0.5s ease-in-out";
    document.body.style.backgroundImage = "url('images/pngtree-many-different-kinds-of-food-are-on-display-at-a-hotel-picture-image_2496274.jpg')"; // Replace with the correct path

    fetch(`${API_URL}/menu`)
        .then(response => response.json())
        .then(menu => {
            const foodList = menu.map(item => `
                <div class="food-item">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button onclick="orderFood(${item.id})">Order</button>
                </div>
            `).join('');

            document.getElementById('content').innerHTML = `
                <h2>Food Menu</h2>
                <div class="food-container">
                    ${foodList}
                </div>
            `;
        })
        .catch(error => console.error('Error fetching menu:', error));
}

function orderFood(itemId) {
    // Add the ordered item to the orders array in the database
    fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
    })
    .then(response => response.json())
    .then(order => {
        console.log(`Food item with ID ${itemId} ordered.`);
        // Display a success message
        alert('Food Ordered!');
        // Refresh the food menu after ordering
        loadFoodMenu();
    })
    .catch(error => console.error(`Error ordering food item ${itemId}:`, error));
}
