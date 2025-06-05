const reviewsContent = {
            title: "⭐⭐⭐⭐⭐ Customer Reviews",
            reviews: [
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Janine R. – Teacher",
                    text: "Love this app! It makes ordering groceries so much easier, especially on weekends. The rewards system is a nice bonus too."
                },
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Carlo M. – Small Business Owner",
                    text: "This helped my karinderya reach more customers. Very thankful to be part of the platform. Delivery is reliable and customers are happy."
                },
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Luz A. – Senior Citizen",
                    text: "Napaka-handy para sa amin na hindi na makalabas ng bahay. Malinis ang packaging at mababait ang mga delivery riders."
                },
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Aldrin P. – Call Center Agent",
                    text: "Super convenient! I always order late-night snacks and deliveries are still fast and fresh."
                },
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Bea N. – Working Mom",
                    text: "Everything I need is just a click away. From fast food to fresh gulay—this app is a lifesaver!"
                },
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Ella K. – Freelance Artist",
                    text: "Easy to use and supports local vendors. I prefer this over bigger apps because of the personal touch."
                },
                {
                    rating: "⭐⭐⭐⭐ (4 stars)",
                    author: "Marvin G. – Student",
                    text: "The selection is good, especially from the market. Just hope they add more payment options like GCash or Maya."
                },
                {
                    rating: "⭐⭐⭐⭐ (4 stars)",
                    author: "Trina S. – New User",
                    text: "Good service overall. I love that I can talk directly to the seller, but delivery sometimes takes longer during lunch hours."
                },
                {
                    rating: "⭐⭐⭐ (3 stars)",
                    author: "Richard V. – Office Clerk",
                    text: "It's okay but the mobile version of the site is a bit buggy. Needs some UI improvements."
                },
                {
                    rating: "⭐⭐ (2 stars)",
                    author: "Camille D. – First-Time Buyer",
                    text: "Tried to order vegetables but some were missing upon delivery. No one responded when I reported it. Needs better support."
                },
                {
                    rating: "⭐⭐⭐⭐⭐ (5 stars)",
                    author: "Maria T. – Senior Citizen",
                    text: "Very helpful for seniors like me! I don't have to walk far to buy fruits and vegetables anymore. The app is easy to use and the delivery is fast. I also love the discount points!"
                },
                {
                    rating: "⭐⭐⭐⭐ (4 stars)",
                    author: "Jerome D. – Office Worker",
                    text: "Very convenient for busy people. I use this almost every day to order lunch. I hope more small food stalls join so there's more variety."
                },
                {
                    rating: "⭐⭐⭐ (3 stars)",
                    author: "Anna G. – Pregnant Woman",
                    text: "The service is okay and the delivery fee is low, but sometimes the items from the market are not fresh. I hope they improve quality checking."
                },
                {
                    rating: "⭐⭐ (2 stars)",
                    author: "Leo M. – Student",
                    text: "Good idea but the interface of the website is a bit laggy on my phone. Also, I had trouble using the coupon code."
                },
                {
                    rating: "⭐ (1 star)",
                    author: "Rina B. – First-time User",
                    text: "Placed an order and waited for more than 2 hours. No updates from the seller or delivery. I had to cancel. Needs major improvement in tracking and communication."
                }
            ]
        };
        function renderReviewsSection() {
            const reviewsSection = document.createElement('div');
            reviewsSection.className = 'reviews-section';
            
            
            reviewsSection.innerHTML = `<h2>${reviewsContent.title}</h2>`;
            
            
            const gridContainer = document.createElement('div');
            gridContainer.className = 'review-grid';
            
        
            reviewsContent.reviews.forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review-item';
                
                reviewDiv.innerHTML = `
                    <div class="star-rating">${review.rating}</div>
                    <div class="review-author">${review.author}</div>
                    <div class="review-text">"${review.text}"</div>
                `;
                
                gridContainer.appendChild(reviewDiv);
            });
            
            reviewsSection.appendChild(gridContainer);
            return reviewsSection;
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
            
            const reviewsContainer = document.getElementById('reviews-container');
            if (reviewsContainer) {
                reviewsContainer.appendChild(renderReviewsSection());
            }
        });