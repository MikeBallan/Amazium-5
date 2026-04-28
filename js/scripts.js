const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

if (hamburger && navigation) {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		navigation.classList.toggle("show");
	});
} else {
	console.warn("Hamburger or navigation not found", hamburger, navigation);
}

// Nav scroll styling
const nav = document.querySelector(".navigation");

function handleScroll() {
    if (!nav) return;

    if (window.scrollY > 200) {
        nav.classList.add("navigation--active");
    } else {
        nav.classList.remove("navigation--active");
    }
}

window.addEventListener("scroll", handleScroll);

// Run once on page load
handleScroll();