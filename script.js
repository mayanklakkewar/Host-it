document.addEventListener('DOMContentLoaded', function () {
    // Get all FAQ items
    const faqItems = document.querySelectorAll('.faq-styles-inside');

    // Loop through each FAQ item
    faqItems.forEach(item => {
        // Add a click event listener to each item
        item.addEventListener('click', function () {
            // Check if the current item is already open
            const isOpen = this.hasAttribute('open');

            // Close all other open FAQ items
            faqItems.forEach(faq => faq.removeAttribute('open'));

            // If the clicked item wasn't open, open it
            if (!isOpen) {
                this.setAttribute('open', '');
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get all testimonials and controls
    const testimonials = document.querySelectorAll(".testimonial-animate");
    const prevBtn = document.getElementById("prev-test");
    const nextBtn = document.getElementById("next-test");

    let currentIndex = 0; // Track current testimonial

    // Function to show testimonial based on index
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = "block";
                testimonial.style.opacity = "1";
                testimonial.style.transform = "none";
            } else {
                testimonial.style.display = "none";
                testimonial.style.opacity = "0";
                testimonial.style.transform = "translateY(10px) rotateX(-10deg)";
            }
        });
    }

    // Show the first testimonial initially
    showTestimonial(currentIndex);

    // Event listener for next button
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length; // Increment index
        showTestimonial(currentIndex); // Show next testimonial
    });

    // Event listener for previous button
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Decrement index
        showTestimonial(currentIndex); // Show previous testimonial
    });
});
