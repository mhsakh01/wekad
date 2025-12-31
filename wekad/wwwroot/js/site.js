document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("nav .active")?.classList.remove("active");
        link.classList.add("active");
    });
});
