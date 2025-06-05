const aboutContent = {
    mission: {
        title: "Mission",
        items: [
            "Promotes and supports both large and small local businesses",
            "Makes everyday shopping and food delivery accessible to everyone",
            "Offers value through loyalty points, discounts, and direct communication with sellers"
        ]
    },
    vision: {
        title: "Vision",
        description: "We envision Click Order Calapan as the leading community-driven e-commerce platform in the region—where technology, convenience, and community support meet to uplift local businesses and improve the quality of life for every Calapeño."
    }
};

function renderAboutSections() {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between';

    const missionSection = document.createElement('section');
    missionSection.id = 'mission';
    missionSection.className = 'section';
    missionSection.style.width = '700px';
    missionSection.style.marginLeft = '20px';
    
    let missionHTML = `<h2>${aboutContent.mission.title}</h2><ul>`;
    aboutContent.mission.items.forEach(item => {
        missionHTML += `<li>${item}</li>`;
    });
    missionHTML += '</ul>';
    
    missionSection.innerHTML = missionHTML;

    const visionSection = document.createElement('section');
    visionSection.id = 'vision';
    visionSection.className = 'section';
    visionSection.style.width = '700px';
    visionSection.style.marginLeft = '70px';
    
    visionSection.innerHTML = `
        <h2>${aboutContent.vision.title}</h2>
        <p>${aboutContent.vision.description}</p>
    `;

    container.appendChild(missionSection);
    container.appendChild(visionSection);

    return container;
}

document.addEventListener('DOMContentLoaded', function() {
    
    const infoContainer = document.getElementById('info-container');
    if (infoContainer) {
        infoContainer.appendChild(renderInfoSection());
    }

    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer) {
        aboutContainer.appendChild(renderAboutSections());
    }
});
document.getElementById("about-container").style.margin = "35px";