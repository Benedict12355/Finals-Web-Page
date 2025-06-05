const guideContent = {
            title: "🛒 Click Order Calapan – Customer Guide",
            steps: [
                {
                    title: "📝 Step-by-Step Guide for Customers",
                    subtitle: "1. Create an Account (Sign-Up)",
                    items: [
                        "Go to [clickordercalapan.com] (or your actual URL).",
                        "Click 'Sign Up'.",
                        "Fill in your:",
                        "Full name",
                        "Address in Calapan City",
                        "Contact number",
                        "Email address",
                        "Password",
                        "Click 'Create Account'.",
                        "Verify your email or number if prompted."
                    ],
                    benefits: [
                        "Earn points on purchases",
                        "Get discount coupons",
                        "Track order history",
                        "Chat directly with sellers"
                    ]
                },
                {
                    subtitle: "2. Browse Categories",
                    items: [
                        "Homepage shows different categories like:",
                        "🍔 Fast Food (e.g. Jollibee, McDonald's)",
                        "🍛 Local Eats (Karinderya, food stalls)",
                        "🥬 Market Goods (Vegetables, Fruits, Meats)",
                        "🛒 Supermarket Essentials",
                        "Use the search bar or filter by location, price, or store."
                    ]
                },
                {
                    subtitle: "3. Place an Order",
                    items: [
                        "Select an item you want to buy.",
                        "Choose quantity or portion.",
                        "Add to cart.",
                        "When finished, go to your Cart and click 'Checkout.'"
                    ]
                },
                {
                    subtitle: "4. Payment and Delivery Options",
                    items: [
                        "Choose a Payment Method:",
                        "Cash on Delivery (COD)",
                        "GCash / E-Wallet",
                        "Bank Transfer (if available)",
                        "Choose a Delivery Option:",
                        "Standard delivery",
                        "Priority delivery (faster, may cost a bit more)",
                        "Pick-up (optional, if you can pick it up yourself)"
                    ]
                },
                {
                    subtitle: "5. Track Your Order",
                    items: [
                        "Go to your Account > My Orders",
                        "Check real-time status: Preparing → Out for Delivery → Delivered",
                        "Estimated delivery time is displayed."
                    ]
                },
                {
                    subtitle: "6. Rate and Review",
                    items: [
                        "After delivery, rate the seller and delivery.",
                        "Leave a review to help others."
                    ]
                }
            ]
        };
function renderGuideSection() {
            const guideSection = document.createElement('div');
            guideSection.className = 'guide-section';
            
            
            guideSection.innerHTML = `<h2>${guideContent.title}</h2>`;
            
          
            guideContent.steps.forEach((step, index) => {
                const stepDiv = document.createElement('div');
                stepDiv.className = 'guide-step';
                
                
                stepDiv.innerHTML += `<h3>${step.subtitle}</h3>`;
                
                
                const ul = document.createElement('ul');
                step.items.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = item;
                    ul.appendChild(li);
                });
                stepDiv.appendChild(ul);
                
              
                if (step.benefits) {
                    const benefitsDiv = document.createElement('div');
                    benefitsDiv.className = 'benefits-box';
                    benefitsDiv.innerHTML = '<strong>🎉 Benefits of Signing Up:</strong><ul></ul>';
                    const benefitsUl = benefitsDiv.querySelector('ul');
                    step.benefits.forEach(benefit => {
                        const li = document.createElement('li');
                        li.textContent = benefit;
                        benefitsUl.appendChild(li);
                    });
                    stepDiv.appendChild(benefitsDiv);
                }
                
           
                if (index < guideContent.steps.length - 1) {
                    const divider = document.createElement('div');
                    divider.className = 'divider';
                    stepDiv.appendChild(divider);
                }
                
                guideSection.appendChild(stepDiv);
            });
            
            return guideSection;
        }

        document.addEventListener('DOMContentLoaded', function() {
            const infoContainer = document.getElementById('info-container');
            if (infoContainer) {
                infoContainer.appendChild(renderInfoSection());
            }
            
            const guideContainer = document.getElementById('guide-container');
            if (guideContainer) {
                guideContainer.appendChild(renderGuideSection());
            }
        });