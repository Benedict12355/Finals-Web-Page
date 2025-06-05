const restaurantsData = [
        {
            name: "Casa Napoli Calapan",
            location: "J.P. Rizal St., Calero, Calapan City",
            image: "Image/casa-napoli.jpg",
            description: "Authentic Italian-style pizza and pasta in a casual dining setting.",
        },
        {
            name: "Mang Inasal – Calapan",
            location: "Ground Floor, Xentro Mall, Calapan City",
            image: "Image/mang-inasal.jpg",
            description: "Famous for its grilled chicken and unlimited rice meals."
        },
        {
            name: "McDonald's Calapan",
            location: "Lumang Bayan, Calapan City",
            image: "Image/mcdo.jpg",
            description: "Popular international fast-food chain serving burgers, fries, and more."
        },
        {
            name: "Jollibee Calapan",
            location: "Del Pilar St., Calapan City",
            image: "Image/jollibee.jpg",
            description: "Well-loved Filipino fast-food chain offering Chickenjoy and spaghetti."
        },
        {
            name: "Big Boss Pizza Calapan",
            location: "Near Calapan Medical Center, Calapan City",
            image: "Image/bigboss-pizza.jpg",
            description: "Known for giant-sized pizzas perfect for group sharing."
        },
        {
            name: "Boodle King",
            location: "Sta. Maria Village, Calapan City",
            image: "Image/boodle-king.jpg",
            description: "Filipino-style boodle fights and grilled specialties for sharing."
        },
        {
            name: "Sweet Avenue Café",
            location: "Del Pilar St., beside Novo, Calapan City",
            image: "Image/sweet-avenue.png",
            description: "Cozy café offering coffee, cakes, and all-day breakfast meals."
        },
        {
            name: "The Daily Dose Café",
            location: "Catiningan St., Calapan City",
            image: "Image/daily-dose.jpg",
            description: "Trendy spot for coffee, pastries, and comfort food."
        },
        {
            name: "Chowking Calapan",
            location: "Xentro Mall, Calapan City",
            image: "Image/chowking.jpg",
            description: "Chinese-style fast food with rice bowls, dim sum, and halo-halo."
        },
        {
            name: "Naty's Eatery",
            location: "Brgy. Bayanan II, Calapan City",
            image: "Image/naty-eatery.jpg",
            description: "Home-style Filipino dishes at affordable prices."
        },
        {
            name: "Spice Plates",
            location: "Sto. Niño, Calapan City",
            image: "Image/spice-plates.jpg",
            description: "A fusion of Indian and Filipino dishes in a garden setting."
        },
        {
            name: "Grillo Pizzeria Ristorante",
            location: "Governor Ignacio Street, Calapan City",
            image: "Image/grillo.jpg",
            description: "Authentic Italian cuisine with wood-fired pizza and pasta."
        },
        {
            name: "Mr. Won's Samgyeopsal",
            location: "Calapan City",
            image: "Image/mr.won.jpg",
            description: "Unlimited Korean BBQ with a variety of meats and side dishes."
        },
        {
            name: "Casa Estela Cafe",
            location: "Calapan City",
            image: "Image/casa-estela.jpg",
            description: "Instagrammable cafe serving fusion meals and creative drinks."
        },
        {
            name: "MND Coffee and Bar",
            location: "Calapan City",
            image: "Image/mnd.jpg",
            description: "Modern café bar offering coffee, cocktails, and casual food."
        },
        {
            name: "Fuxion",
            location: "Calapan City",
            image: "Image/fuxion.jpg",
            description: "Blends Filipino and Chinese comfort food in one menu."
        },
        {
            name: "Arsenia's Hapag Kainan",
            location: "Biga, Calapan City",
            image: "Image/arsenias.jpg",
            description: "A countryside eatery known for its native dishes and rustic ambiance."
        },
        {
            name: "Dutch Cafe",
            location: "JP Rizal, Calapan City",
            image: "Image/dutch-cafe.jpg",
            description: "Relaxed café inside Filipiniana Hotel serving local and continental meals."
        },
    {
        name: "Calapan City Supermarket",
        location: "Xentro mall, Calapan City",
        image: "Image/supermarket.jpg",
        description: "One-stop shop for fresh produce, groceries, and household essentials."
    },
    {
        name: "Puregold Calapan",
        location: "Mimosa St., Calapan City",
        image: "Image/puregold.jpg",
        description: "Large supermarket chain with affordable prices and wide selection."
    },
    {
        name: "SM Savemore Market Calapan",
        location: "Gov. Pascual St., Calapan City",
        image: "Image/savemore.jpg",
        description: "Convenient market offering fresh goods and daily necessities."
    },
    {
        name: "RJ Grocery and Supermarket",
        location: "Del Pilar St., Calapan City",
        image: "Image/rj.jpg",
        description: "Local grocery known for friendly service and fresh supplies."
    },
    {
        name: "Dali Supermarket",
        location: "Lalud, Calapan City",
        image: "Image/dali.jpg",
        description: "A hard discount grocery chain offering essential household items at low prices through efficient, no-frills operations."
    },
    {
        name: "Comming Soon",
        location: "ordering is unavailable, stay tuned for announcement to order from different stores at calapan",
        image: "",
        description: "want us to deliver from your own restaurant? contact us below to add your restaurant to our list"
    }
    ];

 function renderRestaurantsSection() {
    const section = document.createElement('div');
    section.className = 'restaurants-section';
    section.innerHTML = `<h2>🍽️ Restaurants in Calapan City</h2>`;

    const grid = document.createElement('div');
    grid.className = 'restaurant-grid';

    restaurantsData.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';

        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img" />
            <h3 class="restaurant-name">${restaurant.name}</h3>
            <p class="restaurant-location">${restaurant.location}</p>
            <p class="restaurant-description"><em>${restaurant.description}</em></p>
        `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
}

const authButtons = document.getElementById('authButtons');
const userProfile = document.getElementById('userProfile');
const displayName = document.getElementById('displayName');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
    updateUserProfile(currentUser.name);
}

if (loginBtn) loginBtn.addEventListener('click', () => toggleModal(loginModal));
if (signupBtn) signupBtn.addEventListener('click', () => toggleModal(signupModal));
if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
if (loginForm) loginForm.addEventListener('submit', handleLogin);
if (signupForm) signupForm.addEventListener('submit', handleSignup);

window.addEventListener('click', (e) => {
    if (e.target === loginModal || e.target === signupModal) {
        toggleModal();
    }
});

function updateUserProfile(name) {
    if (displayName) displayName.textContent = name;
    if (authButtons) authButtons.style.display = 'none';
    if (userProfile) userProfile.style.display = 'flex';
}

function toggleModal(modalToShow = null) {
    [loginModal, signupModal].forEach(modal => {
        if (modal) modal.style.display = 'none';
    });
    if (modalToShow) modalToShow.style.display = 'block';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) return;

    const user = {
        name: email.split('@')[0] || 'User',
        email: email
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    updateUserProfile(user.name);
    toggleModal();
    e.target.reset();
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (!name || !email) return;
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const user = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(user));
    updateUserProfile(user.name);
    toggleModal();
    e.target.reset();
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    if (authButtons) authButtons.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('restaurants-container');
    if (container) {
        container.appendChild(renderRestaurantsSection());
    }
});