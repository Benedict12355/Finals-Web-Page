// policy
const policyContent = {
    title: "Policy",
    sections: [
        {
            title: "Click Order Calapan – Website Policy",
            description: "Welcome to Click Order Calapan. This Website Policy outlines the rules and guidelines for using our platform, ensuring safety, transparency, and convenience for all users.",
            subsections: [
                {
                    emoji: "✅",
                    title: "Terms of Use",
                    description: "By accessing or using Click Order Calapan, you agree to be bound by the following terms:",
                    items: [
                        "You must be at least 18 years old or have parental/guardian consent to use this platform.",
                        "You agree to provide accurate, current, and complete information during sign-up.",
                        "You are responsible for maintaining the confidentiality of your account and password.",
                        "Abusive, fraudulent, or misleading behavior on the platform is prohibited and may result in account termination."
                    ]
                },
                {
                    emoji: "🔐",
                    title: "Privacy Policy",
                    description: "Your privacy is important to us. Click Order Calapan collects and uses your personal data solely for the purpose of processing orders and improving user experience.",
                    subsections: [
                        {
                            title: "Information We Collect:",
                            items: [
                                "Name, address, and contact details",
                                "Purchase history and preferences",
                                "Payment method (no credit card or e-wallet data is stored on our servers)"
                            ]
                        },
                        {
                            title: "How We Use Your Information:",
                            items: [
                                "To fulfill and deliver your orders",
                                "To provide customer service",
                                "To notify you of promotions or changes to our service",
                                "To improve our platform through feedback and analytics"
                            ]
                        }
                    ]
                },
                {
                    emoji: "🚚",
                    title: "Delivery Policy",
                    description: "",
                    items: [
                        "Delivery is available only within Calapan City.",
                        "Delivery times may vary depending on item type, vendor location, and weather conditions.",
                        "Standard delivery time is between 30 minutes to 2 hours.",
                        "Buyers will be notified of estimated delivery times upon checkout.",
                        "Delivery fees are calculated based on location and order value."
                    ]
                },
                {
                    emoji: "🔁",
                    title: "Return and Refund Policy",
                    description: "Click Order Calapan acts as a bridge between customers and sellers. As such, return and refund policies may vary per vendor. We guarantee refunds if:",
                    items: [
                        "The item received is incorrect or incomplete",
                        "The item was damaged during delivery",
                        "The vendor failed to fulfill the order"
                    ],
                    subsections: [
                        {
                            title: "Request Process:",
                            items: [
                                "Report the issue within 24 hours after delivery",
                                "Include photos and order details",
                                "Contact us through support@clickordercalapan.com or use the 'Help' button in your account"
                            ]
                        }
                    ]
                },
                {
                    emoji: "🎁",
                    title: "Rewards and Coupons Policy",
                    description: "",
                    items: [
                        "Users earn 1 reward point per ₱200 spent (excluding delivery fees)",
                        "1 point = ₱1 discount",
                        "Points are non-transferable and can be used only within the platform",
                        "Coupons and discounts are subject to availability and expiration terms"
                    ]
                },
                {
                    emoji: "💬",
                    title: "Seller Communication Policy",
                    description: "",
                    items: [
                        "Users are allowed to message vendors to clarify product details or negotiate.",
                        "All conversations must be respectful and business-related.",
                        "Click Order Calapan reserves the right to moderate or review communication if abuse is reported."
                    ]
                },
                {
                    emoji: "⚠️",
                    title: "Account Suspension",
                    description: "Click Order Calapan may suspend or delete user accounts for:",
                    items: [
                        "Multiple order cancellations without valid reason",
                        "Providing false or misleading information",
                        "Abusive language or harassment toward sellers or staff",
                        "Fraudulent activity"
                    ]
                },
                {
                    emoji: "🛡️",
                    title: "Liability Disclaimer",
                    description: "Click Order Calapan is not liable for:",
                    items: [
                        "Any health issues caused by food/products (vendors are responsible for product safety)",
                        "Delays due to force majeure (weather, disasters, traffic)",
                        "Incomplete delivery due to incorrect user address or unavailability"
                    ]
                }
            ]
        }
    ],
    contact: {
        title: "Contact Us",
        items: [
            "📧 support@clickordercalapan.com",
            "📞 [Insert business contact number]",
            "📍 Based in Calapan City, Oriental Mindoro"
        ]
    },
    updates: {
        title: "Policy Updates",
        description: "This policy may be updated periodically. Users will be notified of significant changes through email or platform announcements."
    }
};
 function renderPolicySection() {
            const policySection = document.createElement('div');
            policySection.className = 'section';
            
            let policyHTML = `<h2>${policyContent.title}</h2>`;
            policyHTML += `<p><strong>${policyContent.sections[0].title}</strong><br>${policyContent.sections[0].description}</p>`;

            policyContent.sections[0].subsections.forEach(section => {
                policyHTML += `<h3>${section.emoji} ${section.title}</h3>`;
                if (section.description) policyHTML += `<p>${section.description}</p>`;
                
                if (section.items && section.items.length > 0) {
                    policyHTML += '<ul>';
                    section.items.forEach(item => {
                        policyHTML += `<li>${item}</li>`;
                    });
                    policyHTML += '</ul>';
                }
                
                if (section.subsections) {
                    section.subsections.forEach(subsection => {
                        policyHTML += `<p><strong>${subsection.title}</strong></p>`;
                        policyHTML += '<ul>';
                        subsection.items.forEach(item => {
                            policyHTML += `<li>${item}</li>`;
                        });
                        policyHTML += '</ul>';
                    });
                }
                
                policyHTML += '<hr>';
            });

            policyHTML += `<p><strong>${policyContent.contact.title}</strong><br>`;
            policyContent.contact.items.forEach(item => {
                policyHTML += `${item}<br>`;
            });
            policyHTML += '</p><hr>';

            policyHTML += `<p><strong>${policyContent.updates.title}</strong><br>${policyContent.updates.description}</p>`;

            policySection.innerHTML = policyHTML;
            return policySection;
        }

//comminity rule
const communityRulesContent = {
    title: "Community Rules",
    introduction: "To ensure a positive experience for all users, please follow these guidelines when using Click Order Calapan:",
    sections: [
        {
            emoji: "👥",
            title: "Respectful Communication",
            items: [
                "Be polite and respectful in all interactions with sellers and other users",
                "No harassment, hate speech, or discriminatory language",
                "Avoid using all caps (considered shouting online)",
                "Keep conversations relevant to transactions"
            ]
        },
        {
            emoji: "🛒",
            title: "Transaction Guidelines",
            items: [
                "Only place orders you intend to purchase",
                "False orders or prank orders will result in account suspension",
                "Be clear about your requirements when messaging sellers",
                "Payment should be completed as agreed"
            ]
        },
        {
            emoji: "📸",
            title: "Content Standards",
            items: [
                "Product photos must accurately represent items",
                "No misleading or false advertisements",
                "Keep product descriptions factual and clear",
                "No inappropriate imagery or content"
            ]
        },
        {
            emoji: "🔍",
            title: "Honest Reviews",
            items: [
                "Provide honest but constructive feedback",
                "Reviews should be based on actual experiences",
                "No fake reviews (positive or negative)",
                "Report any suspicious activity"
            ]
        },
        {
            emoji: "🛡️",
            title: "Safety & Privacy",
            items: [
                "Never share personal payment details in chats",
                "All transactions must stay within the platform",
                "Report any requests for outside transactions",
                "Protect your account credentials"
            ]
        },
        {
            emoji: "⚖️",
            title: "Dispute Resolution",
            items: [
                "Attempt to resolve issues directly with the seller first",
                "Provide evidence (photos, screenshots) when reporting issues",
                "False reports may lead to account restrictions",
                "Click Order Calapan will mediate when necessary"
            ]
        }
    ],
    consequences: {
        title: "Consequences for Violations",
        items: [
            "⚠️ Warning for first minor offense",
            "🔇 Temporary suspension for repeated violations",
            "❌ Permanent ban for severe or repeated violations",
            "👮 Legal action for fraudulent activities"
        ]
    },
    contact: {
        title: "Report Violations",
        items: [
            "📧 Email: safety@clickordercalapan.com",
            "📱 In-app reporting feature",
            "🆘 Use the 'Help' section in your account",
            "⏰ Response time: Within 24-48 hours"
        ]
    }
};

function renderCommunityRules() {
            const rulesSection = document.createElement('div');
            rulesSection.className = 'section';
            
            let rulesHTML = `
                <h2>${communityRulesContent.title}</h2>
                <p>${communityRulesContent.introduction}</p>
            `;

            communityRulesContent.sections.forEach(section => {
                rulesHTML += `
                    <h3>${section.emoji} ${section.title}</h3>
                    <ul>
                `;
                
                section.items.forEach(item => {
                    rulesHTML += `<li>${item}</li>`;
                });
                
                rulesHTML += `</ul><hr>`;
            });

            
            rulesHTML += `
                <div class="consequences">
                    <h3>${communityRulesContent.consequences.title}</h3>
                    <ul>
            `;
            
            communityRulesContent.consequences.items.forEach(item => {
                rulesHTML += `<li>${item}</li>`;
            });
            
            rulesHTML += `
                    </ul>
                </div>
            `;

            
            rulesHTML += `
                <div class="report-box">
                    <h4>${communityRulesContent.contact.title}</h4>
                    <ul>
            `;
            
            communityRulesContent.contact.items.forEach(item => {
                rulesHTML += `<li>${item}</li>`;
            });
            
            rulesHTML += `
                    </ul>
                </div>
            `;

            rulesSection.innerHTML = rulesHTML;
            return rulesSection;
        }

        
        document.addEventListener('DOMContentLoaded', function() {
            const policyContainer = document.getElementById('policy-container');
            if (policyContainer) {
                policyContainer.appendChild(renderPolicySection());
            }

            const rulesContainer = document.getElementById('rules-container');
            if (rulesContainer) {
                rulesContainer.appendChild(renderCommunityRules());
            }
        });


