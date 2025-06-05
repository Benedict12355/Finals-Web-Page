const contacts = [
    {
        title: "🧑‍💻 Customer Support",
        items: [
            "Email: support@clickordercalapan.com",
            "Phone: 0912-345-6789",
            "Operating Hours: Monday to Sunday, 8:00 AM – 8:00 PM"
        ]
    },
    {
        title: "📦 For Business Inquiries",
        items: [
            "Are you a local seller or small business owner interested in joining our platform?",
            "Email: partner@clickordercalapan.com",
            "Phone: 0912-987-6543",
            "Operating Hours: Monday to Friday, 9:00 AM – 5:00 PM"
        ]
    },
    {
        title: "📍 Office Address",
        items: [
            "Click Order Calapan",
            "Brgy. Lumangbayan, Calapan City, Oriental Mindoro, Philippines"
        ]
    },
    {
        title: "🌐 Follow Us on Social Media",
        items: [
            "Stay updated with promotions, announcements, and featured local sellers!",
            "Facebook: Click Order Calapan",
            "Instagram: @clickordercalapan",
            "Tiktok: @clickordercalapan"
        ]
    }
];

function renderContacts() {
    const container = document.querySelector(".contact-container");
    
    contacts.forEach(contact => {
        const section = document.createElement("div");
        section.className = "contact-section";
        
        let itemsHTML = `<p><b>${contact.title}</b></p><ul>`;
        contact.items.forEach(item => {
            itemsHTML += `<li>${item}</li>`;
        });
        itemsHTML += "</ul>";
        
        section.innerHTML = itemsHTML;
        container.appendChild(section);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    renderContacts();
    
    
});