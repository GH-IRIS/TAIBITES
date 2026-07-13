// AuraBites Swiggy-Style Food Delivery App Controller

// 1. Restaurant & Menu Database
const restaurantsData = [
    {
        id: "rest-1",
        name: "The Burger Club",
        cuisine: "burger",
        cuisineLabel: "Burgers, Sides, Shakes",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
        rating: 4.4,
        reviews: 240,
        deliveryTime: 25,
        costForTwo: 400,
        isVegOnly: false,
        menu: [
            { id: "item-101", name: "Classic Veg Crunch Burger", price: 149.00, desc: "Crispy vegetable patty with fresh lettuce, tomato, onions and our signature club sauce.", category: "mains", isVeg: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
            { id: "item-102", name: "Spicy Smoked Chicken Burger", price: 199.00, desc: "Flame-grilled smoked chicken breast coated in spicy habanero sauce with cheddar cheese.", category: "mains", isVeg: false, image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=300&q=80" },
            { id: "item-103", name: "Cheesy Loaded Fries", price: 129.00, desc: "Golden crinkle-cut fries topped with melted mozzarella cheese sauce and jalapeno toppings.", category: "sides", isVeg: true, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=300&q=80" },
            { id: "item-104", name: "Classic Salted Fries", price: 99.00, desc: "Crispy french fries tossed with sea salt.", category: "sides", isVeg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80" },
            { id: "item-105", name: "Double Chocolate Oreo Shake", price: 119.00, desc: "Thick vanilla milkshake blended with crunchy chocolate cookies and whipped cream.", category: "drinks", isVeg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "rest-2",
        name: "Spice & Sizzle",
        cuisine: "indian",
        cuisineLabel: "North Indian, Tandoori",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 410,
        deliveryTime: 35,
        costForTwo: 600,
        isVegOnly: false,
        menu: [
            { id: "item-201", name: "Butter Chicken Masala", price: 349.00, desc: "Tender boneless chicken roasted in tandoor, cooked in rich creamy tomato butter gravy.", category: "mains", isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80" },
            { id: "item-202", name: "Paneer Butter Masala", price: 299.00, desc: "Fresh cottage cheese chunks cooked in rich onion tomato butter cream gravy.", category: "mains", isVeg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80" },
            { id: "item-203", name: "Garlic Tandoori Naan", price: 69.00, desc: "Soft leavened tandoor-baked flatbread infused with fresh minced garlic and butter.", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=300&q=80" },
            { id: "item-204", name: "Jeera Basmati Rice", price: 129.00, desc: "Aromatic long-grain basmati rice steamed with cumin seeds and pure ghee.", category: "breads", isVeg: true, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "rest-3",
        name: "Green Garden Cafeteria",
        cuisine: "lifestyle",
        cuisineLabel: "Salads, Juices, Healthy",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        reviews: 180,
        deliveryTime: 20,
        costForTwo: 350,
        isVegOnly: true,
        menu: [
            { id: "item-301", name: "Avocado Quinoa Salad", price: 199.00, desc: "Fresh avocado slices, organic quinoa, cherry tomatoes, and cucumber tossed in lemon vinaigrette.", category: "mains", isVeg: true, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" },
            { id: "item-302", name: "Paneer Pesto Grilled Sandwich", price: 149.00, desc: "Multi-grain toasted bread stuffed with fresh basil pesto sauce, paneer cubes, and cheese.", category: "mains", isVeg: true, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80" },
            { id: "item-303", name: "Detox Green Juice", price: 99.00, desc: "Fresh cold-pressed cucumber, green apple, spinach, celery, mint, and lemon juice.", category: "drinks", isVeg: true, image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=300&q=80" },
            { id: "item-304", name: "Energy Fruit Bowl", price: 129.00, desc: "A mix of fresh strawberries, blueberries, kiwi, banana, and pomegranate with honey glaze.", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "rest-4",
        name: "Wok & Roll Asian Kitchen",
        cuisine: "asian",
        cuisineLabel: "Noodles, Sushi, Dimsums",
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=400&q=80",
        rating: 4.2,
        reviews: 320,
        deliveryTime: 30,
        costForTwo: 500,
        isVegOnly: false,
        menu: [
            { id: "item-401", name: "Chili Garlic Hakka Noodles", price: 189.00, desc: "Stir-fried noodles with mixed julienne vegetables, burnt garlic, and red chili paste.", category: "mains", isVeg: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80" },
            { id: "item-402", name: "Spicy Schezwan Chicken", price: 249.00, desc: "Tender chicken cubes stir-fried in hot Schezwan pepper sauce with spring onions.", category: "mains", isVeg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=300&q=80" },
            { id: "item-403", name: "Steamed Dumplings", price: 129.00, desc: "Delicate wrappers stuffed with cabbage, carrot, and water chestnuts, steamed to perfection.", category: "appetizers", isVeg: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "rest-5",
        name: "Pizzeria Roma",
        cuisine: "pizza",
        cuisineLabel: "Woodfired Pizzas, Pastas",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        reviews: 580,
        deliveryTime: 38,
        costForTwo: 700,
        isVegOnly: false,
        menu: [
            { id: "item-501", name: "Margherita Woodfired Pizza", price: 249.00, desc: "Sourdough crust topped with classic Italian tomato sauce, fresh mozzarella cheese and fresh basil.", category: "pizzas", isVeg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80" },
            { id: "item-502", name: "Double Pepperoni Pizza", price: 349.00, desc: "Rich tomato base loaded with pepperoni slices and extra mozzarella.", category: "pizzas", isVeg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80" },
            { id: "item-503", name: "Creamy Alfredo Penne Pasta", price: 219.00, desc: "Penne pasta cooked in rich garlic cream parmesan cheese sauce with fresh mushrooms.", category: "mains", isVeg: true, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "rest-6",
        name: "Sweet Treats & Waffles",
        cuisine: "dessert",
        cuisineLabel: "Waffles, Ice Creams, Cakes",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        rating: 4.3,
        reviews: 150,
        deliveryTime: 18,
        costForTwo: 300,
        isVegOnly: true,
        menu: [
            { id: "item-601", name: "Belgian Waffle with Berries", price: 149.00, desc: "Freshly baked warm Belgian waffle topped with fresh strawberries, blueberries, and maple syrup.", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=300&q=80" },
            { id: "item-602", name: "Classic Red Velvet Slice", price: 119.00, desc: "Rich and moist red velvet cake layer slice topped with velvety cream cheese frosting.", category: "desserts", isVeg: true, image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=300&q=80" },
            { id: "item-603", name: "Cold Brew Affogato", price: 99.00, desc: "A double scoop of vanilla ice cream drowned in a shot of bold cold brew espresso.", category: "drinks", isVeg: true, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80" }
        ]
    }
];

// 2. Global State Variables
let cart = [];
let currentUser = null;
let isMockLoggedIn = false;
let isClerkActive = false;
let clerkInstance = null;
let currentActiveCuisine = "all";
let trackingTimer = null;

// Replace with Clerk Publishable Key
const CLERK_PUBLISHABLE_KEY = "pk_test_Z3JhbmQtcXVldHphbC0yLmNsZXJrLmFjY291bnRzLmRldiQ";

// 3. App Controller Initialization
window.addEventListener("DOMContentLoaded", async () => {
    loadCartFromLocalStorage();
    setupRouter();
    setupFiltersAndToggles();
    setupCheckoutForm();
    setupHeroCarousel();
    setupMobileMenu();
    await initAuth();
});

// Hero Carousel Controller (Vanilla JS autoplay & navigation)
function setupHeroCarousel() {
    const carousel = document.getElementById("hero-carousel");
    if (!carousel) return;

    const slides = carousel.querySelectorAll(".carousel-slide");
    const indicators = carousel.querySelectorAll(".indicator-dot");
    const prevBtn = document.getElementById("carousel-prev-btn");
    const nextBtn = document.getElementById("carousel-next-btn");

    let currentSlide = 0;
    let autoplayTimer = null;
    const autoplayInterval = 5000; // 5 seconds

    function goToSlide(index) {
        // Remove active class from current slide and indicator
        slides[currentSlide].classList.remove("active");
        indicators[currentSlide].classList.remove("active");

        // Set new index
        currentSlide = (index + slides.length) % slides.length;

        // Add active class to new slide and indicator
        slides[currentSlide].classList.add("active");
        indicators[currentSlide].classList.add("active");

        // Restart autoplay timer
        startAutoplay();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = setInterval(nextSlide, autoplayInterval);
    }

    // Attach click events to control buttons
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);

    // Attach click events to indicators
    indicators.forEach((dot, idx) => {
        dot.addEventListener("click", () => goToSlide(idx));
    });

    // Start autoplay initially
    startAutoplay();
}

// 4. Client-side Router
function setupRouter() {
    function navigateToView() {
        const hash = window.location.hash || "#home";
        
        // Hide all views
        document.querySelectorAll(".route-view").forEach(view => view.classList.add("hidden"));
        
        // Remove active class from nav link items
        document.querySelectorAll(".nav-btn-link").forEach(link => link.classList.remove("active"));
        document.getElementById("cart-badge-trigger").classList.remove("active");

        // Clear tracking intervals when leaving order-success
        if (!hash.startsWith("#order-success")) {
            if (trackingTimer) {
                clearInterval(trackingTimer);
                trackingTimer = null;
            }
        }

        if (hash === "#home" || hash === "") {
            document.getElementById("view-home").classList.remove("hidden");
            document.querySelectorAll(".nav-btn-link")[0]?.classList.add("active");
            renderFeaturedRestaurants();
            renderTopDishes();
        } else if (hash === "#restaurants") {
            document.getElementById("view-restaurants").classList.remove("hidden");
            document.querySelectorAll(".nav-btn-link")[0]?.classList.add("active");
            renderAllRestaurants();
        } else if (hash.startsWith("#menu")) {
            document.getElementById("view-menu").classList.remove("hidden");
            const urlParams = new URLSearchParams(hash.substring(hash.indexOf("?")));
            const id = urlParams.get("id");
            renderRestaurantMenu(id);
        } else if (hash === "#cart") {
            document.getElementById("view-cart").classList.remove("hidden");
            document.getElementById("cart-badge-trigger").classList.add("active");
            renderCartPage();
        } else if (hash === "#checkout") {
            document.getElementById("view-checkout").classList.remove("hidden");
            renderCheckoutPage();
        } else if (hash.startsWith("#order-success")) {
            document.getElementById("view-order-success").classList.remove("hidden");
            const urlParams = new URLSearchParams(hash.substring(hash.indexOf("?")));
            const ref = urlParams.get("ref");
            const client = urlParams.get("client") || "Customer";
            const total = urlParams.get("total") || "0.00";
            const address = urlParams.get("address") || "Home Address";
            
            renderOrderSuccessPage(ref, client, total, address);
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    window.addEventListener("hashchange", navigateToView);
    navigateToView(); // Initial run

    // Wire category carousel items on landing page
    document.querySelectorAll(".category-item").forEach(item => {
        item.addEventListener("click", () => {
            const cuisine = item.getAttribute("data-cuisine");
            window.location.hash = "#restaurants";
            
            setTimeout(() => {
                const tagBtn = document.querySelector(`.filter-tag[data-cuisine="${cuisine}"]`);
                if (tagBtn) {
                    // Trigger tag select
                    document.querySelectorAll(".filter-tag").forEach(b => b.classList.remove("active"));
                    tagBtn.classList.add("active");
                    currentActiveCuisine = cuisine;
                    renderAllRestaurants();
                }
            }, 100);
        });
    });
}

// Helper to wait for Clerk to be defined on window
function waitForClerk() {
    return new Promise((resolve) => {
        if (window.Clerk) {
            resolve(window.Clerk);
            return;
        }
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (window.Clerk) {
                clearInterval(interval);
                resolve(window.Clerk);
            } else if (attempts > 50) { // 2.5 seconds timeout
                clearInterval(interval);
                resolve(null);
            }
        }, 50);
    });
}

// 5. Authentication Initialization (Clerk with Mock Fallback)
async function initAuth() {
    const loadingSpinner = document.getElementById("auth-loading-spinner");
    const clerkSignBtn = document.getElementById("clerk-signin-btn");

    const clerk = await waitForClerk();
    if (clerk) {
        try {
            clerkInstance = clerk;
            await clerkInstance.load({
                publishableKey: CLERK_PUBLISHABLE_KEY,
                afterSignInUrl: window.location.origin + window.location.pathname + "#checkout",
                afterSignUpUrl: window.location.origin + window.location.pathname + "#checkout"
            });
            isClerkActive = true;
            loadingSpinner.classList.add("hidden");
            
            // Explicitly hide mock auth UI since Clerk loaded successfully
            const fallbackUi = document.getElementById("fallback-auth-ui");
            if (fallbackUi) {
                fallbackUi.classList.add("hidden");
            }
            
            // Listen for auth state changes
            clerkInstance.addListener(({ user }) => {
                const clerkUserBtn = document.getElementById("clerk-user-button");
                const clerkUserInfo = document.getElementById("clerk-user-info");
                const clerkUsername = document.getElementById("clerk-username");
                
                if (user) {
                    currentUser = {
                        name: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || "User",
                        email: user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : "",
                        avatar: user.imageUrl
                    };
                    
                    if (clerkUsername) {
                        clerkUsername.textContent = user.firstName || user.fullName || "User";
                    }
                    
                    if (clerkUserInfo) {
                        clerkUserInfo.classList.remove("hidden");
                    }
                    
                    clerkSignBtn.classList.add("hidden");
                    
                    if (clerkUserBtn) {
                        clerkInstance.mountUserButton(clerkUserBtn);
                    }
                } else {
                    currentUser = null;
                    if (clerkUserInfo) {
                        clerkUserInfo.classList.add("hidden");
                    }
                    if (clerkUserBtn) {
                        clerkUserBtn.innerHTML = "";
                    }
                    clerkSignBtn.classList.remove("hidden");
                }
                
                // Automatically update checkout page locking and details if on that view
                if (window.location.hash === "#checkout") {
                    renderCheckoutPage();
                }
            });

            // Wire Sign In triggers
            clerkSignBtn.querySelector("button").addEventListener("click", () => {
                clerkInstance.redirectToSignIn({
                    redirectUrl: window.location.href,
                    afterSignInUrl: window.location.href,
                    afterSignUpUrl: window.location.href
                });
            });
            
            const checkoutLoginTrigger = document.getElementById("checkout-login-trigger");
            if (checkoutLoginTrigger) {
                checkoutLoginTrigger.addEventListener("click", () => {
                    clerkInstance.redirectToSignIn({
                        redirectUrl: window.location.href,
                        afterSignInUrl: window.location.href,
                        afterSignUpUrl: window.location.href
                    });
                });
            }

        } catch (err) {
            console.warn("Clerk initialization failed or key was invalid. Activating fallback Mock Auth.", err);
            activateMockAuth();
        }
    } else {
        console.warn("Clerk JS SDK not loaded. Activating fallback mock auth.");
        activateMockAuth();
    }
}

function activateMockAuth() {
    document.getElementById("auth-loading-spinner").classList.add("hidden");
    const fallbackUi = document.getElementById("fallback-auth-ui");
    const fallbackLoginBtn = document.getElementById("fallback-login-btn");
    const fallbackUserMenu = document.getElementById("fallback-user-menu");
    const fallbackAvatar = document.getElementById("fallback-avatar");
    const fallbackUsername = document.getElementById("fallback-username");
    const fallbackLogout = document.getElementById("fallback-logout-btn");
    const checkoutLoginTrigger = document.getElementById("checkout-login-trigger");

    fallbackUi.classList.remove("hidden");

    function loginMock() {
        isMockLoggedIn = true;
        currentUser = {
            name: "Girish Naik",
            email: "girish.naik@domain.com",
            avatar: "https://picsum.photos/100/100?random=50"
        };

        fallbackLoginBtn.classList.add("hidden");
        fallbackUserMenu.classList.remove("hidden");
        fallbackAvatar.src = currentUser.avatar;
        fallbackUsername.textContent = currentUser.name;

        if (window.location.hash === "#checkout") {
            renderCheckoutPage();
        }
    }

    function logoutMock() {
        isMockLoggedIn = false;
        currentUser = null;
        fallbackLoginBtn.classList.remove("hidden");
        fallbackUserMenu.classList.add("hidden");

        if (window.location.hash === "#checkout") {
            renderCheckoutPage();
        }
    }

    fallbackLoginBtn.addEventListener("click", loginMock);
    fallbackLogout.addEventListener("click", logoutMock);
    
    if (checkoutLoginTrigger) {
        checkoutLoginTrigger.addEventListener("click", loginMock);
    }
}

function isAuthenticated() {
    if (isClerkActive && clerkInstance) {
        return clerkInstance.user !== null;
    }
    return isMockLoggedIn;
}

// 6. Cart Manager (Add, Quantity updates, Remove, LocalStorage persistence)
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem("taibites-cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
    updateCartNavbarBadge();
}

function saveCartToLocalStorage() {
    localStorage.setItem("taibites-cart", JSON.stringify(cart));
    updateCartNavbarBadge();
}

function updateCartNavbarBadge() {
    const badge = document.getElementById("cart-count");
    if (!badge) return;
    
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function addToCart(itemObj, restaurantId, restaurantName) {
    // Note: Food apps lock cart to a single restaurant. Let's warn or clear cart if adding from a different restaurant!
    if (cart.length > 0 && cart[0].restaurantId !== restaurantId) {
        // Clear cart from previous restaurant and start new cart
        const confirmNew = confirm(`Your cart contains items from another restaurant. Would you like to clear your cart and add items from ${restaurantName}?`);
        if (!confirmNew) return;
        cart = [];
    }

    const existing = cart.find(i => i.id === itemObj.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: itemObj.id,
            name: itemObj.name,
            price: itemObj.price,
            qty: 1,
            restaurantId: restaurantId,
            restaurantName: restaurantName,
            isVeg: itemObj.isVeg,
            image: itemObj.image
        });
    }
    saveCartToLocalStorage();
    
    // Animate cart badge
    const cartTrigger = document.getElementById("cart-badge-trigger");
    cartTrigger.style.transform = "scale(1.25)";
    setTimeout(() => {
        cartTrigger.style.transform = "scale(1)";
    }, 150);
}

function updateCartQuantity(itemId, newQty) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.qty = parseInt(newQty);
        if (item.qty <= 0) {
            removeFromCart(itemId);
            return;
        }
    }
    saveCartToLocalStorage();
    
    // Refresh current view if we are on cart or menu page
    if (window.location.hash === "#cart") {
        renderCartPage();
    } else if (window.location.hash.startsWith("#menu")) {
        const urlParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf("?")));
        const id = urlParams.get("id");
        renderRestaurantMenu(id);
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCartToLocalStorage();
    
    if (window.location.hash === "#cart") {
        renderCartPage();
    } else if (window.location.hash.startsWith("#menu")) {
        const urlParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf("?")));
        const id = urlParams.get("id");
        renderRestaurantMenu(id);
    }
}

function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = subtotal > 300 || subtotal === 0 ? 0.00 : 40.00;
    const GST = subtotal * 0.05; // 5% GST on food
    const grandTotal = subtotal + deliveryFee + GST;

    return { subtotal, deliveryFee, GST, grandTotal };
}

// Get item quantity currently in cart
function getItemQtyInCart(itemId) {
    const item = cart.find(i => i.id === itemId);
    return item ? item.qty : 0;
}

// 7. Rendering Functions

// A. Renders 3 Top Rated restaurants on Landing Page
function renderFeaturedRestaurants() {
    const container = document.getElementById("featured-restaurants-grid");
    if (!container) return;

    // Take top 3 rated restaurants
    const featured = [...restaurantsData].sort((a, b) => b.rating - a.rating).slice(0, 3);

    container.innerHTML = featured.map(r => `
        <a href="#menu?id=${r.id}" class="restaurant-card">
            <div class="res-img-wrap">
                <img src="${r.image}" alt="${r.name}" class="res-img" loading="lazy">
                <span class="veg-icon-badge ${r.isVegOnly ? 'veg-badge-veg' : 'veg-badge-both'}">
                    ${r.isVegOnly ? 'PURE VEG' : 'VEG / NON-VEG'}
                </span>
            </div>
            <div class="res-info">
                <h3>${r.name}</h3>
                <p class="res-cuisines">${r.cuisineLabel}</p>
                <div class="res-meta-row">
                    <span class="rating-badge">
                        <span class="material-symbols-rounded">star</span>
                        <span>${r.rating.toFixed(1)}</span>
                    </span>
                    <span class="res-time">${r.deliveryTime} Mins</span>
                    <span class="res-cost">₹${r.costForTwo} for two</span>
                </div>
            </div>
        </a>
    `).join("");
}

// A2. Renders 8 Top food/dishes on Landing Page (2 rows of 4)
function renderTopDishes() {
    const container = document.getElementById("top-dishes-grid");
    if (!container) return;

    // Compile a list of all dishes across all restaurants
    const allDishes = [];
    restaurantsData.forEach(r => {
        r.menu.forEach(item => {
            allDishes.push({
                ...item,
                restaurantId: r.id,
                restaurantName: r.name
            });
        });
    });

    // Let's take a diverse set of 8 dishes
    const topDishes = allDishes.slice(0, 8); // Take first 8 dishes (2 rows of 4)

    container.innerHTML = topDishes.map(d => `
        <div class="dish-card">
            <div class="dish-img-wrap">
                <img src="${d.image}" alt="${d.name}" class="dish-img" loading="lazy">
                <span class="dish-rating-badge">
                    <span class="material-symbols-rounded">star</span>
                    <span>4.7</span>
                </span>
            </div>
            <div class="dish-info">
                <div class="dish-header-row">
                    <div class="veg-indicator" style="margin-bottom:0">
                        <span class="veg-dot ${d.isVeg ? '' : 'non-veg'}"></span>
                        <span class="veg-label" style="font-size:0.7rem">${d.isVeg ? 'VEG' : 'NON-VEG'}</span>
                    </div>
                    <span class="dish-price">₹${d.price.toFixed(2)}</span>
                </div>
                <h3>${d.name}</h3>
                <p class="dish-restaurant">by ${d.restaurantName}</p>
                <button class="add-dish-btn" onclick="triggerAddFoodDirect('${d.id}', '${d.restaurantId}', '${d.restaurantName}')">
                    <span>ADD TO CART</span>
                    <span class="material-symbols-rounded" style="font-size:0.95rem">add_shopping_cart</span>
                </button>
            </div>
        </div>
    `).join("");
}

// Helper to add food directly from home page top dishes list
window.triggerAddFoodDirect = function(itemId, resId, resName) {
    const res = restaurantsData.find(r => r.id === resId);
    if (!res) return;
    const item = res.menu.find(i => i.id === itemId);
    if (item) {
        addToCart(item, resId, resName);
        renderTopDishes(); // Refresh list to reflect state (though badge animates, standard add is enough)
    }
};

// B. Renders Restaurant Listing Grid with working search/cuisines/Veg/Rating filters
function renderAllRestaurants() {
    const container = document.getElementById("all-restaurants-grid");
    if (!container) return;

    const searchQuery = document.getElementById("restaurant-search").value.trim().toLowerCase();
    const isVegOnly = document.getElementById("toggle-veg-only").checked;
    const isTopRated = document.getElementById("toggle-top-rated").checked;
    const isFastDelivery = document.getElementById("toggle-fast-delivery").checked;

    let filtered = restaurantsData.filter(r => {
        const matchesCuisine = currentActiveCuisine === "all" || r.cuisine === currentActiveCuisine;
        const matchesSearch = r.name.toLowerCase().includes(searchQuery) || r.cuisineLabel.toLowerCase().includes(searchQuery);
        const matchesVeg = !isVegOnly || r.isVegOnly;
        const matchesRating = !isTopRated || r.rating >= 4.4;
        const matchesTime = !isFastDelivery || r.deliveryTime <= 30;

        return matchesCuisine && matchesSearch && matchesVeg && matchesRating && matchesTime;
    });

    document.getElementById("res-count-total").textContent = `${filtered.length} Restaurant${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results-state" style="grid-column:span 3; text-align:center; padding: 48px;">No restaurants match your active filter settings.</div>`;
        return;
    }

    container.innerHTML = filtered.map(r => `
        <a href="#menu?id=${r.id}" class="restaurant-card">
            <div class="res-img-wrap">
                <img src="${r.image}" alt="${r.name}" class="res-img" loading="lazy">
                <span class="veg-icon-badge ${r.isVegOnly ? 'veg-badge-veg' : 'veg-badge-both'}">
                    ${r.isVegOnly ? 'PURE VEG' : 'VEG / NON-VEG'}
                </span>
            </div>
            <div class="res-info">
                <h3>${r.name}</h3>
                <p class="res-cuisines">${r.cuisineLabel}</p>
                <div class="res-meta-row">
                    <span class="rating-badge">
                        <span class="material-symbols-rounded">star</span>
                        <span>${r.rating.toFixed(1)}</span>
                    </span>
                    <span class="res-time">${r.deliveryTime} Mins</span>
                    <span class="res-cost">₹${r.costForTwo} for two</span>
                </div>
            </div>
        </a>
    `).join("");
}

// C. Renders Detailed Restaurant Menu Page with categories side navigation
function renderRestaurantMenu(id) {
    const res = restaurantsData.find(r => r.id === id);
    const menuContainer = document.getElementById("menu-items-container");
    const bannerContainer = document.getElementById("menu-restaurant-details");
    const sidebarContainer = document.getElementById("menu-categories-sidebar");

    if (!res) {
        menuContainer.innerHTML = `<div class="error-detail-state">Restaurant not found. <a href="#restaurants">Go back</a></div>`;
        return;
    }

    // 1. Render Restaurant Banner Card
    bannerContainer.innerHTML = `
        <div class="res-banner-info">
            <h1>${res.name}</h1>
            <p>${res.cuisineLabel} • Bengaluru</p>
            <div class="res-banner-badges">
                <span><span class="material-symbols-rounded">schedule</span>${res.deliveryTime} Mins</span>
                <span><span class="material-symbols-rounded">payments</span>₹${res.costForTwo} For Two</span>
                <span class="${res.isVegOnly ? 'badge-val-green' : ''}">
                    <span class="material-symbols-rounded">restaurant</span>${res.isVegOnly ? 'Pure Veg' : 'Veg & Non-Veg'}
                </span>
            </div>
        </div>
        
        <div class="res-banner-rating">
            <div class="rating-num">
                <span class="material-symbols-rounded">star</span>
                <span>${res.rating}</span>
            </div>
            <div class="rating-count-txt">${res.reviews} Reviews</div>
        </div>
    `;

    // 2. Extract unique menu categories
    const categories = [...new Set(res.menu.map(item => item.category))];

    // 3. Render Sidebar Categories Nav
    sidebarContainer.innerHTML = `
        <button class="menu-cat-link active" onclick="filterMenuCategory('all', '${res.id}')">All Items</button>
        ` + categories.map(cat => `
            <button class="menu-cat-link" onclick="filterMenuCategory('${cat}', '${res.id}')">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
        `).join("");

    // 4. Render Menu Items list
    renderMenuItems(res.menu, res.id, res.name);
}

// Helper to filter items in menu view
window.filterMenuCategory = function(cat, resId) {
    // Handle active link state
    const links = document.querySelectorAll(".menu-cat-link");
    links.forEach(l => l.classList.remove("active"));
    
    // Find matching link based on text content
    const clickedLink = Array.from(links).find(l => {
        if (cat === "all") return l.textContent.toLowerCase() === "all items";
        return l.textContent.toLowerCase() === cat;
    });
    if (clickedLink) clickedLink.classList.add("active");

    const res = restaurantsData.find(r => r.id === resId);
    if (!res) return;

    document.getElementById("active-menu-category-title").textContent = cat === "all" ? "All Menu Items" : cat.charAt(0).toUpperCase() + cat.slice(1);

    const filteredItems = cat === "all" ? res.menu : res.menu.filter(item => item.category === cat);
    renderMenuItems(filteredItems, res.id, res.name);
};

function renderMenuItems(itemsList, resId, resName) {
    const container = document.getElementById("menu-items-container");
    
    container.innerHTML = itemsList.map(item => {
        const qtyInCart = getItemQtyInCart(item.id);
        
        // Render either add button or quantity adjuster
        let actionWidget = "";
        if (qtyInCart > 0) {
            actionWidget = `
                <div class="item-qty-adjuster">
                    <button class="qty-adjust-btn" onclick="adjustFoodQty('${item.id}', -1, '${resId}', '${resName}')">-</button>
                    <span class="qty-val-lbl">${qtyInCart}</span>
                    <button class="qty-adjust-btn" onclick="adjustFoodQty('${item.id}', 1, '${resId}', '${resName}')">+</button>
                </div>
            `;
        } else {
            actionWidget = `
                <button class="add-food-btn" onclick="triggerAddFood('${item.id}', '${resId}', '${resName}')">
                    <span>ADD</span>
                    <span class="material-symbols-rounded" style="font-size: 0.85rem; margin-left: 2px">add</span>
                </button>
            `;
        }

        return `
            <div class="menu-item-card">
                <div class="menu-item-details">
                    <div class="veg-indicator">
                        <span class="veg-dot ${item.isVeg ? '' : 'non-veg'}"></span>
                        <span class="veg-label">${item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                    </div>
                    <h4>${item.name}</h4>
                    <div class="item-card-price">₹${item.price.toFixed(2)}</div>
                    <p class="item-card-desc">${item.desc}</p>
                </div>
                
                <div class="menu-item-action-wrap">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                    <div class="item-add-btn-container">
                        ${actionWidget}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Global actions for menu item clicks
window.triggerAddFood = function(itemId, resId, resName) {
    const res = restaurantsData.find(r => r.id === resId);
    if (!res) return;
    const item = res.menu.find(i => i.id === itemId);
    if (item) {
        addToCart(item, resId, resName);
        
        // Refresh menu view list
        renderRestaurantMenu(resId);
    }
};

window.adjustFoodQty = function(itemId, amount, resId, resName) {
    const qtyInCart = getItemQtyInCart(itemId);
    updateCartQuantity(itemId, qtyInCart + amount);
    
    // Refresh menu view list
    renderRestaurantMenu(resId);
};

// D. Renders Cart View listing
function renderCartPage() {
    const container = document.getElementById("cart-content-layout");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <span class="material-symbols-rounded">restaurant_menu</span>
                <h3>YOUR CART IS EMPTY</h3>
                <p>Add fresh items from your favorite restaurant menus to order.</p>
                <a href="#restaurants" class="btn btn-primary">Browse Restaurants</a>
            </div>
        `;
        return;
    }

    const itemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img-wrap">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="veg-indicator" style="margin-bottom:0">
                    <span class="veg-dot ${item.isVeg ? '' : 'non-veg'}"></span>
                    <span class="veg-label" style="font-size:0.7rem">${item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                </div>
            </div>
            
            <div class="qty-selector">
                <button class="qty-btn" onclick="adjustCartQty('${item.id}', -1)">-</button>
                <span class="qty-input" style="padding-top:6px">${item.qty}</span>
                <button class="qty-btn" onclick="adjustCartQty('${item.id}', 1)">+</button>
            </div>

            <div class="cart-item-price">₹${(item.price * item.qty).toFixed(2)}</div>

            <button class="remove-cart-item-btn" onclick="removeFromCart('${item.id}')" title="Remove Item">
                <span class="material-symbols-rounded">delete</span>
            </button>
        </div>
    `).join("");

    const totals = getCartTotals();

    container.innerHTML = `
        <div class="cart-items-list" style="display:flex; flex-direction:column; gap:16px">
            <div class="restaurant-name-header" style="font-size:0.85rem; font-weight:700; color:var(--accent-orange); letter-spacing:1px; margin-bottom:4px">
                ORDERING FROM: ${cart[0].restaurantName.toUpperCase()}
            </div>
            ${itemsHTML}
        </div>
        
        <aside class="cart-summary-card">
            <h3>BILL DETAIL</h3>
            <div class="summary-row">
                <span>Item Total</span>
                <span>₹${totals.subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Govt Taxes &amp; GST (5%)</span>
                <span>₹${totals.GST.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Delivery Partner Fee</span>
                <span>${totals.deliveryFee === 0 ? 'FREE' : '₹' + totals.deliveryFee.toFixed(2)}</span>
            </div>
            <div class="summary-row total-row">
                <span>To Pay</span>
                <span>₹${totals.grandTotal.toFixed(2)}</span>
            </div>
            
            <a href="#checkout" class="btn btn-primary btn-block checkout-action-btn">
                <span>PROCEED TO CHECKOUT</span>
                <span class="material-symbols-rounded">shopping_cart_checkout</span>
            </a>
        </aside>
    `;
}

// Global Quantity increment/decrement buttons in Cart view
window.adjustCartQty = function(id, amount) {
    const item = cart.find(i => i.id === id);
    if (item) {
        updateCartQuantity(id, item.qty + amount);
    }
};

// E. Renders Checkout Screen (Verifies auth, locks page, or displays order form)
function renderCheckoutPage() {
    const lockScreen = document.getElementById("checkout-lock-screen");
    const unlockedLayout = document.getElementById("checkout-unlocked-layout");

    if (!isAuthenticated()) {
        lockScreen.classList.remove("hidden");
        unlockedLayout.classList.add("hidden");
        return;
    }

    lockScreen.classList.add("hidden");
    unlockedLayout.classList.remove("hidden");

    // Populate checkout item list
    const itemsContainer = document.getElementById("checkout-summary-items");
    itemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-summary-item">
            <span class="item-title">${item.name}</span>
            <span class="item-qty">x${item.qty}</span>
            <span class="item-price">₹${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join("");

    // Populate pricing
    const totals = getCartTotals();
    const totalsContainer = document.getElementById("checkout-summary-totals");
    totalsContainer.innerHTML = `
        <div class="summary-row">
            <span>Item Subtotal</span>
            <span>₹${totals.subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Delivery Fee</span>
            <span>${totals.deliveryFee === 0 ? 'FREE' : '₹' + totals.deliveryFee.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Govt Tax (5%)</span>
            <span>₹${totals.GST.toFixed(2)}</span>
        </div>
        <div class="summary-row total-row" style="margin-top: 12px; border-top:1px solid var(--border-color); padding-top:12px">
            <span>Grand Total</span>
            <span>₹${totals.grandTotal.toFixed(2)}</span>
        </div>
    `;

    // Prefill user details if available
    if (currentUser) {
        document.getElementById("delivery-name").value = currentUser.name;
    }
}

// F. Renders Live Order Success Tracking screen with simulated delivery progress
function renderOrderSuccessPage(ref, client, total, address) {
    document.getElementById("receipt-ref").textContent = ref;
    document.getElementById("receipt-address").textContent = address;
    document.getElementById("receipt-total").textContent = `₹${parseFloat(total).toFixed(2)}`;
    
    const steps = [
        { el: document.getElementById("step-placed"), conn: null },
        { el: document.getElementById("step-kitchen"), conn: document.getElementById("conn-1") },
        { el: document.getElementById("step-delivery"), conn: document.getElementById("conn-2") },
        { el: document.getElementById("step-delivered"), conn: document.getElementById("conn-3") }
    ];

    // Reset tracking classes
    steps.forEach((step, idx) => {
        if (idx === 0) {
            step.el.classList.add("active");
        } else {
            step.el.classList.remove("active");
            if (step.conn) step.conn.classList.remove("active");
        }
    });

    let currentStep = 0;
    
    // Clean old interval
    if (trackingTimer) clearInterval(trackingTimer);

    // Progressive timeline tracker timer (updates every 6 seconds)
    trackingTimer = setInterval(() => {
        if (currentStep < 3) {
            currentStep++;
            steps[currentStep].el.classList.add("active");
            if (steps[currentStep].conn) steps[currentStep].conn.classList.add("active");
            
            // Adjust status badge text
            const statusBadge = document.querySelector(".receipt-status");
            if (currentStep === 1) {
                statusBadge.textContent = "IN KITCHEN";
                statusBadge.style.backgroundColor = "#ffb300";
            } else if (currentStep === 2) {
                statusBadge.textContent = "ON THE WAY";
                statusBadge.style.backgroundColor = "#ff5722";
                statusBadge.style.color = "#ffffff";
            } else if (currentStep === 3) {
                statusBadge.textContent = "DELIVERED";
                statusBadge.style.backgroundColor = "#00e676";
                statusBadge.style.color = "#000000";
                clearInterval(trackingTimer); // Stop timer at final step
            }
        }
    }, 6000);
}

// 8. Setup listeners for Cuisine filter tags and Veg/Top Rated toggles
function setupFiltersAndToggles() {
    const cuisineTags = document.querySelectorAll(".filter-tag");
    cuisineTags.forEach(tag => {
        tag.addEventListener("click", () => {
            cuisineTags.forEach(b => b.classList.remove("active"));
            tag.classList.add("active");
            
            currentActiveCuisine = tag.getAttribute("data-cuisine");
            renderAllRestaurants();
        });
    });

    document.getElementById("toggle-veg-only").addEventListener("change", renderAllRestaurants);
    document.getElementById("toggle-top-rated").addEventListener("change", renderAllRestaurants);
    document.getElementById("toggle-fast-delivery").addEventListener("change", renderAllRestaurants);

    const search = document.getElementById("restaurant-search");
    const globalSearch = document.getElementById("global-food-search");

    if (search) {
        search.addEventListener("input", () => {
            if (globalSearch) {
                globalSearch.value = search.value;
            }
            if (window.location.hash !== "#restaurants") {
                window.location.hash = "#restaurants";
            }
            renderAllRestaurants();
        });
    }

    if (globalSearch) {
        globalSearch.addEventListener("input", () => {
            if (search) {
                search.value = globalSearch.value;
            }
            if (window.location.hash !== "#restaurants") {
                window.location.hash = "#restaurants";
            }
            renderAllRestaurants();
        });
    }
}

// 9. Checkout billing & address validation
function setupCheckoutForm() {
    const form = document.getElementById("delivery-address-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Clear errors
        document.querySelectorAll(".checkout-form .error-msg").forEach(span => span.textContent = "");

        const name = document.getElementById("delivery-name").value.trim();
        const phone = document.getElementById("delivery-phone").value.trim();
        const address = document.getElementById("delivery-address").value.trim();
        const zip = document.getElementById("delivery-zip").value.trim();

        let isValid = true;

        if (name.length < 3) {
            document.getElementById("name-error").textContent = "Full name must be at least 3 characters.";
            isValid = false;
        }

        if (phone.length < 10) {
            document.getElementById("phone-error").textContent = "Please enter a valid mobile number.";
            isValid = false;
        }

        if (address.length < 8) {
            document.getElementById("address-error").textContent = "Please enter a complete street address.";
            isValid = false;
        }

        if (zip.length < 5) {
            document.getElementById("zip-error").textContent = "Please enter a valid PIN code.";
            isValid = false;
        }

        if (isValid) {
            const totals = getCartTotals();
            const randomRef = Math.floor(10000 + Math.random() * 90000);
            
            // Empty cart
            cart = [];
            saveCartToLocalStorage();

            // Redirect to order success page passing query details
            window.location.hash = `#order-success?ref=TAIBITES-${randomRef}-G&client=${encodeURIComponent(name)}&total=${totals.grandTotal.toFixed(2)}&address=${encodeURIComponent(address)}`;
        }
    });
}

// Mobile Hamburger Menu Toggle
function setupMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu-wrapper");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("open");
            
            const icon = toggleBtn.querySelector("span");
            if (navMenu.classList.contains("open")) {
                icon.textContent = "close";
            } else {
                icon.textContent = "menu";
            }
        });

        // Close menu when clicking navigation links or buttons
        navMenu.querySelectorAll(".nav-btn-link, .signin-btn").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                const icon = toggleBtn.querySelector("span");
                if (icon) icon.textContent = "menu";
            });
        });

        // Close menu when clicking outside of navbar
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                navMenu.classList.remove("open");
                const icon = toggleBtn.querySelector("span");
                if (icon) icon.textContent = "menu";
            }
        });
    }
}
