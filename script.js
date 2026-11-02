document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION MENU
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    if (nav && header) {
        let menuButton = document.querySelector(".menu-toggle");

        if (!menuButton) {
            menuButton = document.createElement("button");
            menuButton.className = "menu-toggle";
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Toggle navigation");
            menuButton.setAttribute("aria-expanded", "false");

            header.insertBefore(menuButton, nav);
        }

        menuButton.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("active");

            menuButton.textContent = isOpen ? "✕" : "☰";
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("active");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }
// WhatsApp Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        const phoneNumber = "918109701805";

        const whatsappMessage =
            "Hello Helping Hands NGO!\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Message: " + message;

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}

    // 3. GALLERY IMAGE LIGHTBOX
    const galleryImages = document.querySelectorAll(
        ".gallery-item img, .gallery-grid img"
    );

    galleryImages.forEach(function (img) {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.className = "image-lightbox";

            const largeImage = document.createElement("img");
            largeImage.src = img.src;
            largeImage.alt = img.alt || "Gallery image";

            const closeButton = document.createElement("button");
            closeButton.className = "lightbox-close";
            closeButton.textContent = "✕";
            closeButton.setAttribute("aria-label", "Close image");

            overlay.appendChild(largeImage);
            overlay.appendChild(closeButton);
            document.body.appendChild(overlay);

            function closeLightbox() {
                overlay.remove();
                document.removeEventListener("keydown", escapeHandler);
            }

            function escapeHandler(event) {
                if (event.key === "Escape") {
                    closeLightbox();
                }
            }

            closeButton.addEventListener("click", closeLightbox);

            overlay.addEventListener("click", function (event) {
                if (event.target === overlay) {
                    closeLightbox();
                }
            });

            document.addEventListener("keydown", escapeHandler);
        });
    });

    // 4. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(
        ".service-box, .work-card, .about-content, .section-heading"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("show");
        });
    }

    // 5. BACK TO TOP BUTTON
    const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.className = "back-to-top";
    topButton.setAttribute("aria-label", "Back to top");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        topButton.classList.toggle("visible", window.scrollY > 300);
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 6. CURRENT YEAR
    document.querySelectorAll(".copyright").forEach(function (element) {
        element.innerHTML = element.innerHTML.replace(
            /2026/,
            new Date().getFullYear()
        );
        // Active Navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav ul li a").forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
    });
// Hide Loading Animation
window.addEventListener("load", function() {
    const loader = document.getElementById("pageLoader");

    if (loader) {
        loader.classList.add("hide");

        setTimeout(function() {
            loader.style.display = "none";
        }, 500);
    }
    });
// Scroll Progress Bar
    window.addEventListener("scroll", function () {
        const progressBar = document.getElementById("progressBar");

        if (progressBar) {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

            progressBar.style.width = progress + "%";
        }
    });

    // Dark Mode with Memory
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    if (darkModeToggle) {
        darkModeToggle.textContent =
            document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");

            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
            darkModeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // FAQ Toggle
    document.querySelectorAll(".faq-item h3").forEach(function (question) {
        question.addEventListener("click", function () {
            question.parentElement.classList.toggle("active");
        });
    });
// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter) {
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;
    const speed = 20;

    const updateCounter = function() {
        const increment = Math.ceil(target / speed);
        count = Math.min(count + increment, target);

        counter.textContent = count + "+";

        if (count < target) {
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
    // CONTACT FORM WHATSAPP SETUP

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill all fields.");
            return;
        }

        const whatsappMessage =
            "Hello Helping Hands NGO!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Subject: " + subject + "\n" +
            "Message: " + message;

        const whatsappURL =
            "https://wa.me/918109701805?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}
// ==========================
// DONATE PAGE FUNCTIONALITY
// ==========================

const donationCards = document.querySelectorAll(".donation-card");
const customAmount = document.getElementById("customAmount");
const donateButton = document.getElementById("donateButton");

let selectedAmount = 0;

// Select donation amount
donationCards.forEach(function(card) {
    card.addEventListener("click", function() {

        donationCards.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        selectedAmount = this.dataset.amount;

        if (customAmount) {
            customAmount.value = selectedAmount;
        }
    });
});

// Update amount when user enters a custom amount
if (customAmount) {
    customAmount.addEventListener("input", function() {
        selectedAmount = this.value;

        donationCards.forEach(function(item) {
            item.classList.remove("active");
        });
    });
}

// Donate button
if (donateButton) {
    donateButton.addEventListener("click", function() {

        const amount = customAmount.value || selectedAmount;

        if (!amount || amount <= 0) {
            alert("Please select or enter a valid donation amount.");
            return;
        }

        alert(
            "Thank you for choosing to donate ₹" +
            amount +
            "! Payment integration will be added soon."
        );
    });
}
});
});