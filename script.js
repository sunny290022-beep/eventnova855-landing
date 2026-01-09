// Get elements
const checkbox = document.getElementById('ageConfirm');
const continueBtn = document.getElementById('continueBtn');

// Enable/disable continue button based on checkbox
checkbox.addEventListener('change', function() {
    if (this.checked) {
        continueBtn.disabled = false;
        continueBtn.style.cursor = 'pointer';
    } else {
        continueBtn.disabled = true;
        continueBtn.style.cursor = 'not-allowed';
    }
});

// Handle continue button click
continueBtn.addEventListener('click', function() {
    if (!checkbox.checked) {
        return;
    }
    
    // Add loading state
    this.classList.add('loading');
    this.disabled = true;
    
    // Save confirmation in sessionStorage
    sessionStorage.setItem('ageConfirmed', 'true');
    sessionStorage.setItem('confirmTime', new Date().getTime());
    
    // Redirect to Landing Page 2 after short delay
    setTimeout(function() {
        window.location.href = 'https://promotionnova855.com';
    }, 500);
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

// Prevent form submission on Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (checkbox.checked) {
            continueBtn.click();
        }
    }
});

// Add visual feedback for checkbox
checkbox.parentElement.addEventListener('click', function(e) {
    if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    }
});

// Track user interaction for analytics (optional)
let interactionStartTime = new Date().getTime();

window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((new Date().getTime() - interactionStartTime) / 1000);
    console.log('Time spent on page:', timeSpent, 'seconds');
    // You can send this to analytics service
});

// Add animation when checkbox is checked
checkbox.addEventListener('change', function() {
    const customCheckbox = this.nextElementSibling;
    if (this.checked) {
        customCheckbox.style.transform = 'scale(1.1)';
        setTimeout(() => {
            customCheckbox.style.transform = 'scale(1)';
        }, 200);
    }
});

// Disable right-click (optional security measure)
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

// Disable text selection on button (for better UX)
continueBtn.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
