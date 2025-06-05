const casaNapoliProducts = [
    {
        name: "Margherita Pizza",
        price: "₱320",
        image: "Image/casa-napoli/margherita.jpg",
        description: "Classic pizza with fresh tomatoes, mozzarella, and basil."
    },
    {
        name: "Pepperoni Pizza",
        price: "₱370",
        image: "Image/casa-napoli/pepperoni.jpg",
        description: "Topped with savory pepperoni slices and mozzarella cheese."
    },
    {
        name: "Four Cheese Pizza",
        price: "₱420",
        image: "Image/casa-napoli/fourcheese.jpg",
        description: "Rich and gooey blend of mozzarella, parmesan, cheddar, and blue cheese."
    },
    {
        name: "Carbonara",
        price: "₱260",
        image: "Image/casa-napoli/carbonara.jpg",
        description: "Creamy pasta with bacon and parmesan cheese."
    },
    {
        name: "Bolognese Pasta",
        price: "₱280",
        image: "Image/casa-napoli/bolognese.jpg",
        description: "Hearty tomato and meat sauce tossed with spaghetti."
    },
    {
        name: "Truffle Mushroom Pizza",
        price: "₱450",
        image: "Image/casa-napoli/truffle.jpg",
        description: "Aromatic truffle oil with mushrooms and creamy cheese blend."
    },
    {
        name: "Garlic Shrimp Pasta",
        price: "₱350",
        image: "Image/casa-napoli/garlic-shrimp.jpg",
        description: "Pasta with sautéed shrimp, garlic, olive oil, and chili flakes."
    },
    {
        name: "Calzone",
        price: "₱300",
        image: "Image/casa-napoli/calzone.jpg",
        description: "Folded pizza stuffed with cheese, ham, and tomato sauce."
    },
    {
        name: "Lasagna",
        price: "₱320",
        image: "Image/casa-napoli/lasagna.jpg",
        description: "Layered pasta with meat, béchamel, and cheese."
    },
    {
        name: "Panna Cotta",
        price: "₱180",
        image: "Image/casa-napoli/panna-cotta.jpg",
        description: "Creamy Italian dessert topped with berry compote."
    }
];
function handleSpecialAction() {
    const productContainer = document.getElementById("CasaNapoliProduct");
    productContainer.innerHTML = ""; 

    const section = document.createElement('div');
    section.className = 'menu-section';
    section.innerHTML = `<h2>🍕 Casa Napoli Calapan – Menu</h2>`;

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    casaNapoliProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="menu-img" />
            <h4>${product.name}</h4>
            <p><strong>${product.price}</strong></p>
            <p>${product.description}</p>
        `;
        grid.appendChild(item);
    });

    section.appendChild(grid);
    productContainer.appendChild(section);
}
