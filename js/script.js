(function () {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    if (!toggle || !nav) {
        return;
    }

    function setOpen(open) {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        nav.classList.toggle("is-open", open);
        document.body.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setOpen(false);
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 860) {
            setOpen(false);
        }
    });
})();
