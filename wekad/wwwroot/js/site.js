const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("nav-hover");
    });

    item.addEventListener("mouseout", () => {
        item.classList.remove("nav-hover");
    });
});
