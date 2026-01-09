// Redirect to Landing Page 2 when clicking anywhere on the page
function redirectToLP2() {
    // Add loading animation
    document.body.style.cursor = 'wait';
    
    // Save confirmation in sessionStorage
    sessionStorage.setItem('ageConfirmed', 'true');
    sessionStorage.setItem('confirmTime', new Date().getTime());
    
    // Redirect to Landing Page 2
    window.location.href = 'https://promotionnova855.com';
}

// Make entire page clickable
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to entire document
    document.body.addEventListener('click', function(e) {
        redirectToLP2();
    });
    
    // Also add cursor pointer to show it's clickable
    document.body.style.cursor = 'pointer';
    
    // Add hover effect to popup
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        popup.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Check if user already confirmed (within same session)
window.addEventListener('load', function() {
    const ageConfirmed = sessionStorage.getItem('ageConfirmed');
    const confirmTime = sessionStorage.getItem('confirmTime');
    const currentTime = new Date().getTime();
    
    // If confirmed within last 30 minutes, redirect automatically
    if (ageConfirmed === 'true' && confirmTime && (currentTime - confirmTime < 1800000)) {
        window.location.href = 'https://promotionnova855.com';
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Track user interaction for analytics (optional)
let interactionStartTime = new Date().getTime();

window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((new Date().getTime() - interactionStartTime) / 1000);
    console.log('Time spent on page:', timeSpent, 'seconds');
    // You can send this to analytics service
});
