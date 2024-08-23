// Initialize Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_KEY'; // Replace with your Supabase Key
const { createClient } = supabase;
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', function() {
    // Toggle theme
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        });
    }

    // Smooth scrolling for Learn More and Notify Me buttons
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const notifyMeTopBtn = document.getElementById('notify-me-top');
    const signupSection = document.getElementById('signup-section');
    const featuresSection = document.getElementById('features');

    if (learnMoreBtn && featuresSection) {
        learnMoreBtn.addEventListener('click', function() {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (notifyMeTopBtn && signupSection) {
        notifyMeTopBtn.addEventListener('click', function() {
            signupSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Handle form submission
    const form = document.getElementById('signup-form');
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const email = form.email.value;

            const { data, error } = await supabase
                .from('subscribers')
                .insert([{ email }]);

            if (error) {
                console.error('Error:', error.message);
            } else {
                document.getElementById('thank-you-message').style.display = 'block';
                form.reset();
            }
        });
    }

    // Handle Notify Me button beside the email textbox
    const notifyMeBottomBtn = document.getElementById('notify-me-bottom');
    const emailInput = document.getElementById('email-input');

    if (notifyMeBottomBtn && emailInput) {
        notifyMeBottomBtn.addEventListener('click', async function() {
            const email = emailInput.value;

            if (email) {
                const { data, error } = await supabase
                    .from('subscribers')
                    .insert([{ email }]);

                if (error) {
                    console.error('Error:', error.message);
                } else {
                    document.getElementById('thank-you-message').style.display = 'block';
                    emailInput.value = '';
                }
            }
        });
    }

    // Simple animations for feature and testimonial cards
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});



function scrollToSignup() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}
