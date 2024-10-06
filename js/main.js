document.addEventListener("DOMContentLoaded", () => {

    // Handle Hamburger Menu

    const menuToggle = document.getElementById("menu-toggle"); // Hamburger icon

    const closeMenu = document.getElementById("close-menu"); // Close ('X') icon

    const mobileMenu = document.getElementById("mobile-menu"); // Mobile menu container



    // Toggle menu visibility

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.remove("hidden"); // Show menu

        menuToggle.classList.add("hidden"); // Hide hamburger icon

        closeMenu.classList.remove("hidden"); // Show close icon

    });



    // Close menu

    closeMenu.addEventListener("click", () => {

        mobileMenu.classList.add("hidden"); // Hide menu

        menuToggle.classList.remove("hidden"); // Show hamburger icon

        closeMenu.classList.add("hidden"); // Hide close icon

    });



    // Smooth Scrolling

    const links = document.querySelectorAll('nav a, #mobile-menu a');

    links.forEach(link => {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");

            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({ behavior: "smooth" });

            

            // Close mobile menu when a link is clicked

            if (mobileMenu.classList.contains("hidden") === false) {

                mobileMenu.classList.add("hidden"); // Hide menu

                menuToggle.classList.remove("hidden"); // Show hamburger icon

                closeMenu.classList.add("hidden"); // Hide close icon

            }

        });

    });



    // Fade-In Effects

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                observer.unobserve(entry.target);

            }

        });

    });



    fadeInElements.forEach(element => {

        observer.observe(element);

    });



    // Trigger fade-in for hero section on load

    const heroElements = document.querySelectorAll('#hero .fade-in');

    heroElements.forEach(element => {

        element.classList.add('show');

    });

});

