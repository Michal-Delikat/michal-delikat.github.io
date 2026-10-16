class SiteHeader extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") {
            return;
        }
        this.dataset.rendered = "true";

        const brand = this.getAttribute("brand") || "";
        const links = Array.from(this.querySelectorAll("a"));

        const logo = document.createElement("a");
        logo.className = "logo";
        logo.href = "/";
        logo.textContent = brand;
        logo.addEventListener("click", function (event) {
            const path = location.pathname;
            if (path === "/" || path.endsWith("/index.html")) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });

        const toggle = document.createElement("button");
        toggle.className = "nav-toggle";
        toggle.type = "button";
        toggle.setAttribute("aria-label", "Menu");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-controls", "primary-nav");
        for (let i = 0; i < 3; i++) {
            const bar = document.createElement("span");
            bar.className = "nav-toggle-bar";
            toggle.appendChild(bar);
        }

        const nav = document.createElement("nav");
        nav.className = "nav";
        nav.id = "primary-nav";
        links.forEach(function (link) {
            nav.appendChild(link);
        });

        const inner = document.createElement("div");
        inner.className = "container header-inner";
        inner.appendChild(logo);
        inner.appendChild(toggle);
        inner.appendChild(nav);

        this.replaceChildren(inner);
    }
}

customElements.define("site-header", SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") {
            return;
        }
        this.dataset.rendered = "true";

        const brand = this.getAttribute("brand") || "";
        const privacyHref = this.getAttribute("privacy-href");

        const tag = document.createElement("p");
        tag.id = "copyright-tag";
        tag.appendChild(document.createTextNode("\u00A9 "));
        const year = document.createElement("span");
        year.id = "year";
        year.textContent = String(new Date().getFullYear());
        tag.appendChild(year);
        tag.appendChild(document.createTextNode(" " + brand));

        const inner = document.createElement("div");
        inner.className = "container footer-inner";
        inner.appendChild(tag);

        if (privacyHref) {
            const privacy = document.createElement("a");
            privacy.className = "footer-link";
            privacy.href = privacyHref;
            privacy.textContent = "Privacy Policy";
            inner.appendChild(privacy);
        }

        this.replaceChildren(inner);
    }
}

customElements.define("site-footer", SiteFooter);

class ProjectCard extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") {
            return;
        }
        this.dataset.rendered = "true";

        const logo = document.createElement("img");
        logo.src = this.getAttribute("logo") || "";
        logo.alt = this.getAttribute("logo-alt") || "";
        if (this.hasAttribute("cover")) {
            logo.className = "logo-cover";
        }

        const logoWrap = document.createElement("div");
        logoWrap.className = "project-logo";
        logoWrap.appendChild(logo);

        const title = document.createElement("h3");
        title.textContent = this.getAttribute("title") || "";

        const description = document.createElement("p");
        description.textContent = this.getAttribute("description") || "";

        const body = document.createElement("div");
        body.className = "project-body";
        body.appendChild(title);
        body.appendChild(description);

        const linkText = this.getAttribute("link-text");
        const linkHref = this.getAttribute("link-href");
        if (linkText && linkHref) {
            const link = document.createElement("a");
            link.className = "project-link";
            link.href = linkHref;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = linkText + " \u2192";
            body.appendChild(link);
        }

        this.replaceChildren(logoWrap, body);
    }
}

customElements.define("project-card", ProjectCard);

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
