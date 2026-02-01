/* ========================================
   MODERN SAAS FAQ PAGE - INTERACTIVE SCRIPTS
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFAQAccordions();
    initializeCategoryNavigation();
    initializeSearchFunctionality();
    initializeFeedbackButtons();
});

/* ========================================
   FAQ ACCORDION FUNCTIONALITY
   ======================================== */

function initializeFAQAccordions() {
    const faqCards = document.querySelectorAll('.faq-card');
    
    faqCards.forEach(card => {
        const questionButton = card.querySelector('.faq-question');
        
        questionButton.addEventListener('click', () => {
            toggleAccordion(card);
        });
    });
}

function toggleAccordion(card) {
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other accordions in the same section
    const allCards = card.closest('.category-section').querySelectorAll('.faq-card');
    allCards.forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('expanded');
        }
    });
    
    // Toggle current accordion
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }
}

/* ========================================
   CATEGORY NAVIGATION
   ======================================== */

function initializeCategoryNavigation() {
    const categoryButtons = document.querySelectorAll('.category-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchCategory(button);
        });
    });
}

function switchCategory(button) {
    const categoryId = button.dataset.category;
    
    // Update active state on navigation buttons
    document.querySelectorAll('.category-item').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Show corresponding category section
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(categoryId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Scroll to content area on mobile
    if (window.innerWidth <= 1024) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/* ========================================
   SEARCH FUNCTIONALITY (UI ONLY)
   ======================================== */

function initializeSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearchInput(e.target.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
    }
}

function handleSearchInput(query) {
    // Visual feedback only - no actual search logic
    // In production, this would filter FAQ items or trigger API search
    console.log('Search query:', query);
}

function performSearch(query) {
    // Placeholder for search execution
    // In production, this would perform the actual search
    if (query.trim().length > 0) {
        console.log('Performing search for:', query);
        // Add search results display logic here
    }
}

/* ========================================
   FEEDBACK BUTTONS
   ======================================== */

function initializeFeedbackButtons() {
    const feedbackButtons = document.querySelectorAll('.feedback-btn');
    
    feedbackButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleFeedback(button);
        });
    });
}

function handleFeedback(button) {
    const feedbackType = button.dataset.feedback;
    const feedbackSection = button.closest('.feedback-section');
    
    // Visual feedback
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
    
    // Show thank you message
    const thankYouMessage = document.createElement('span');
    thankYouMessage.className = 'feedback-thanks';
    thankYouMessage.textContent = 'Thanks for your feedback!';
    thankYouMessage.style.cssText = `
        margin-left: 12px;
        font-size: 14px;
        color: #6BCF9B;
        font-weight: 500;
        animation: fadeIn 0.3s ease;
    `;
    
    // Remove existing thank you messages
    const existingThanks = feedbackSection.querySelector('.feedback-thanks');
    if (existingThanks) {
        existingThanks.remove();
    }
    
    feedbackSection.appendChild(thankYouMessage);
    
    // In production, send feedback to analytics/backend
    console.log('Feedback submitted:', feedbackType);
    
    // Remove thank you message after 3 seconds
    setTimeout(() => {
        thankYouMessage.style.opacity = '0';
        setTimeout(() => thankYouMessage.remove(), 300);
    }, 3000);
}

/* ========================================
   SMOOTH SCROLL BEHAVIOR
   ======================================== */

// Add smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ========================================
   RESPONSIVE BEHAVIOR
   ======================================== */

// Handle window resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        handleResponsiveAdjustments();
    }, 250);
});

function handleResponsiveAdjustments() {
    // Close all expanded accordions on mobile when switching to desktop
    if (window.innerWidth > 1024) {
        document.querySelectorAll('.faq-card.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    }
}

/* ========================================
   KEYBOARD NAVIGATION
   ======================================== */

document.addEventListener('keydown', (e) => {
    // ESC key to close expanded accordions
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-card.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    }
});
