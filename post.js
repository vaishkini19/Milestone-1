// ----------------------------------------------------
// Expand / Collapse full blog post content
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const postContent = btn.previousElementSibling;

            if (postContent.classList.contains("expanded")) {
                postContent.classList.remove("expanded");
                btn.textContent = "Read More";
            } else {
                postContent.classList.add("expanded");
                btn.textContent = "Read Less";
            }
        });
    });
});

// ----------------------------------------------------
// Like Button Interaction
// ----------------------------------------------------
document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("liked");

        // Optional counter
        const counter = button.querySelector(".like-count");
        if (counter) {
            let count = parseInt(counter.innerText);
            if (button.classList.contains("liked")) {
                counter.innerText = count + 1;
            } else {
                counter.innerText = count - 1;
            }
        }
    });
});

// ----------------------------------------------------
// Bookmark / Save feature
// ----------------------------------------------------
document.querySelectorAll(".bookmark-btn").forEach(bookmark => {
    bookmark.addEventListener("click", () => {
        bookmark.classList.toggle("saved");
        bookmark.innerText = bookmark.classList.contains("saved")
            ? "Saved ★"
            : "Save ★";
    });
});

// ----------------------------------------------------
// Comment Box Expand
// ----------------------------------------------------
document.querySelectorAll(".comment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const commentSection = btn.nextElementSibling;
        commentSection.classList.toggle("open");
    });
});

// ----------------------------------------------------
// Auto resize comment text area
// ----------------------------------------------------
document.querySelectorAll(".comment-input").forEach(textarea => {
    textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    });
});

// ----------------------------------------------------
// Scroll animations for blog cards
// ----------------------------------------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible-post");
        }
    });
});

document.querySelectorAll(".post").forEach(post => {
    post.classList.add("hidden-post");
    observer.observe(post);
});
