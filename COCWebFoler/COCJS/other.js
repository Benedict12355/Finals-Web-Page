const infoContent = {
    title: "Other",
    subtitle: "What Makes Click Order Calapan Different?",
    features: [
        {
            emoji: "🚚",
            title: "Fast, Reliable, and Low-Cost Deliveries",
            description: "We prioritize affordable and efficient delivery to all parts of Calapan City."
        },
        {
            emoji: "🏪",
            title: "Support for Small Businesses",
            description: "We give small and local businesses a chance to expand online and reach more customers."
        },
        {
            emoji: "🥬",
            title: "Daily Essentials at Your Doorstep",
            description: "Order fresh market goods without leaving your home."
        },
        {
            emoji: "🎁",
            title: "Customer Rewards and Discounts",
            description: "Earn points for every order (₱200 = 1 point = ₱1 discount) and enjoy exclusive promos and coupons."
        },
        {
            emoji: "🤝",
            title: "Direct Communication with Sellers",
            description: "Negotiate prices, confirm availability, or make special requests—all within the platform."
        }
    ],
    conclusion: "Click Order Calapan is not just a service—it's a community-driven platform committed to uplifting local livelihoods, promoting inclusive access to daily needs, and embracing the power of digital solutions for a better Calapan."
};

function renderInfoSection() {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.marginRight = '50px';
    
    const textSection = document.createElement('section');
    textSection.id = 'info3';
    textSection.className = 'section';
    textSection.style.marginRight = '50px';
    

    textSection.innerHTML = `
        <h2>${infoContent.title}</h2>
        <h3>${infoContent.subtitle}</h3>
        <ul></ul>
    `;
    
    const ul = textSection.querySelector('ul');
    infoContent.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${feature.emoji} ${feature.title}</strong><br>${feature.description}`;
        ul.appendChild(li);
    });
    
    const conclusion = document.createElement('p');
    conclusion.style.marginTop = '20px';
    conclusion.textContent = infoContent.conclusion;
    textSection.appendChild(conclusion);
    

    const img = document.createElement('img');
    img.src = 'Image/storeIcon.webp';
    img.alt = 'store';
    img.style.width = '325px';
    img.style.height = '325px';
    

    container.appendChild(textSection);
    container.appendChild(img);
    
    return container;
}

document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('info-container'); // You'll need an element with this ID in your HTML
    if (targetElement) {
        targetElement.appendChild(renderInfoSection());
    }
});