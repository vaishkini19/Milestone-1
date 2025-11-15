
// ----------------------------------------------------
// 1. Sticky Navigation Bar on Scroll
// ----------------------------------------------------
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header");
    if (window.scrollY > 80) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }
});

// ----------------------------------------------------
// 2. Smooth Scrolling for All Links
// ----------------------------------------------------
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ----------------------------------------------------
// 3. Scroll-To-Top Button
// ----------------------------------------------------
const topBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ----------------------------------------------------
// 4. Image Hover Zoom Effect
// ----------------------------------------------------
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.08)";
        img.style.transition = "0.4s ease";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// ----------------------------------------------------
// 5. Fade-In Animation for Sections & Cards
// ----------------------------------------------------
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active-reveal");
        }
    });
});

revealElements.forEach(el => revealObserver.observe(el));

// ----------------------------------------------------
// 6. Mobile Menu Toggle (Hamburger Menu)
// ----------------------------------------------------
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("open-nav");
        menuBtn.classList.toggle("open-icon");
    });
}

// ----------------------------------------------------
// 7. Horizontal Scroll Buttons for Sliders
// ----------------------------------------------------
document.querySelectorAll(".scroll-container").forEach(container => {
    const leftBtn = container.previousElementSibling;
    const rightBtn = container.nextElementSibling;

    if (leftBtn && leftBtn.classList.contains("scroll-left")) {
        leftBtn.addEventListener("click", () => {
            container.scrollBy({ left: -300, behavior: "smooth" });
        });
    }

    if (rightBtn && rightBtn.classList.contains("scroll-right")) {
        rightBtn.addEventListener("click", () => {
            container.scrollBy({ left: 300, behavior: "smooth" });
        });
    }
});

// ----------------------------------------------------
// 8. Active Link Highlighter (Navigation)
// ----------------------------------------------------
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active-page");
    }
});

// ----------------------------------------------------
// 9. Dark/Light Mode Toggle (Optional)
// ----------------------------------------------------
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerText =
            document.body.classList.contains("dark-mode")
                ? "Light Mode ☀️"
                : "Dark Mode 🌙";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".btn-primary");
    if (!startBtn) return;

    startBtn.addEventListener("click", () => {
        let savedName = localStorage.getItem("userName");
        let savedPhone = localStorage.getItem("phone");

        if (savedName && savedPhone) {
            alert(`Welcome back, ${savedName}!`);
            return;
        }

        // create popup dynamically
        const popup = document.createElement("div");
        popup.classList.add("popup-form");
        popup.style.display = "flex"; // ensure flex display
        popup.innerHTML = `
            <div class="popup-content">
                <h2>Enter Your Details</h2>
                <input type="text" id="userName" placeholder="Your Name" required>
                <input type="tel" id="userPhone" placeholder="Phone Number (10 digits)" required>
                <button id="submitDetails">Submit</button>
                <button id="closePopup">Close</button>
            </div>
        `;
        document.body.appendChild(popup);

        // submit
        document.getElementById("submitDetails").addEventListener("click", () => {
            const name = document.getElementById("userName").value.trim();
            const phone = document.getElementById("userPhone").value.trim();

            if (!name) { alert("Name cannot be empty!"); return; }
            if (!/^\d{10}$/.test(phone)) { alert("Enter a valid 10-digit phone number."); return; }

            localStorage.setItem("userName", name);
            localStorage.setItem("phone", phone);

            alert(`Thanks, ${name}! Your details were saved.`);
            popup.remove(); // hide popup
        });

        // close
        document.getElementById("closePopup").addEventListener("click", () => {
            popup.remove();
        });
    });
});
