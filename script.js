// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded'), function() {
    // Restaurant data - in a real app, this would come from an API
    const restaurants = [
        {
            name: "Burger Haven",
            deliveryTime: "20-30 min",
            rating: 4.6,
            tags: ["Burgers", "American", "Fast Food"],
            image: "burger-haven.jpg"
        },
        {
            name: "Pizza Paradise",
            deliveryTime: "25-40 min",
            rating: 4.8,
            tags: ["Pizza", "Italian", "Pasta"],
            image: "pizza-paradise.jpg"
        },
        {
            name: "Sushi Express",
            deliveryTime: "30-45 min",
            rating: 4.7,
            tags: ["Sushi", "Japanese", "Healthy"],
            image: "sushi-express.jpg"
        },
        {
            name: "Taco Fiesta",
            deliveryTime: "15-25 min",
            rating: 4.5,
            tags: ["Mexican", "Tacos", "Burritos"],
            image: "taco-fiesta.jpg"
        }
    ];

    // Elements
    const restaurantContainer = document.getElementById('restaurant-container');
    const addressInput = document.getElementById('address-input');
    const findFoodBtn = document.getElementById('find-food-btn');
    const authBtn = document.getElementById('auth-btn');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Populate restaurant grid
    function populateRestaurants() {
        if (!restaurantContainer) return;
        
        restaurantContainer.innerHTML = '';
        
        restaurants.forEach(restaurant => {
            // Create restaurant card
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            
            // Build card HTML
            card.innerHTML = `
                <div class="restaurant-img">Restaurant Image Placeholder</div>
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <div class="restaurant-meta">
                        <span class="delivery-time">${restaurant.deliveryTime}</span>
                        <span class="rating">★★★★☆ ${restaurant.rating}</span>
                    </div>
                    <div class="restaurant-tags">
                        ${restaurant.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="btn restaurant-btn" data-restaurant="${restaurant.name}">Order Now</a>
                </div>
            `;
            
            restaurantContainer.appendChild(card);
        });
        
        // Add event listeners to restaurant buttons
        const restaurantBtns = document.querySelectorAll('.restaurant-btn');
        restaurantBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const restaurantName = this.getAttribute('data-restaurant');
                alert(`You selected ${restaurantName}. In a real app, this would take you to the restaurant's menu.`);
            });
        });
    }
    
    // Initialize restaurant grid
    populateRestaurants();
    
    // Find Food button functionality
    if (findFoodBtn) {
        findFoodBtn.addEventListener('click', function() {
            const address = addressInput.value.trim();
            if (address) {
                alert(`Searching for restaurants near ${address}. In a real app, this would filter restaurants by location.`);
            } else {
                alert('Please enter your delivery address');
            }
        });
    }
    
    // Auth button functionality
    if (authBtn) {
        authBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('In a real app, this would open a sign in/sign up modal');
        });
    }
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function()) {
            navLinks.classList.toggle('nav-active');
        }
    }
}