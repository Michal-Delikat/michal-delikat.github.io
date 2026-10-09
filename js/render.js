(function () {
    const content = window.PORTFOLIO_CONTENT;
    if (!content) {
        return;
    }

    const locale = document.documentElement.lang || "en";
    const t = content[locale] || content.en;

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) {
            node.className = className;
        }
        if (text) {
            node.textContent = text;
        }
        return node;
    }

    function applyMeta() {
        if (!t.meta) {
            return;
        }
        document.title = t.meta.title;
        let tag = document.querySelector('meta[name="description"]');
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("name", "description");
            document.head.appendChild(tag);
        }
        tag.setAttribute("content", t.meta.description);
    }

    function applyBrand() {
        const logo = document.querySelector(".logo");
        if (logo) {
            logo.textContent = t.brand;
        }
    }

    function renderNav() {
        const nav = document.querySelector(".nav");
        if (!nav || !t.nav) {
            return;
        }
        const links = [
            ["#projects", t.nav.projects],
            ["#services", t.nav.services],
            ["#process", t.nav.process],
            ["#about", t.nav.about],
            ["#contact", t.nav.contact]
        ];
        nav.textContent = "";
        links.forEach(function (link) {
            const a = el("a", null, link[1]);
            a.href = link[0];
            nav.appendChild(a);
        });
    }

    function renderHero() {
        const root = document.querySelector(".hero");
        if (!root || !t.hero) {
            return;
        }
        const h1 = root.querySelector("h1");
        const lead = root.querySelector(".lead");
        const actions = root.querySelector(".hero-actions");

        const title = t.hero.title;
        const open = title.indexOf("{");
        const close = title.indexOf("}");
        h1.textContent = "";
        if (open !== -1 && close !== -1) {
            h1.appendChild(document.createTextNode(title.slice(0, open)));
            h1.appendChild(el("span", "highlight", title.slice(open + 1, close)));
            h1.appendChild(document.createTextNode(title.slice(close + 1)));
        } else {
            h1.textContent = title;
        }

        lead.textContent = t.hero.lead;
        actions.textContent = "";
        const primary = el("a", "btn btn-primary", t.hero.primaryCta);
        primary.href = "#contact";
        const secondary = el("a", "btn btn-ghost", t.hero.secondaryCta);
        secondary.href = "#projects";
        actions.appendChild(primary);
        actions.appendChild(secondary);
    }

    function renderProjects() {
        const root = document.getElementById("projects");
        if (!root || !t.projects) {
            return;
        }
        const container = el("div", "container");
        container.appendChild(el("h2", "section-title", t.projects.heading));

        t.projects.groups.forEach(function (group) {
            container.appendChild(el("h3", "subsection-title", group.title));

            const grid = el("div", "projects-grid");
            group.items.forEach(function (item) {
                const card = el("article", "project-card");

                const logo = el("div", "project-logo");
                const img = document.createElement("img");
                img.src = item.logo.src;
                img.alt = item.logo.alt;
                if (item.logo.cover) {
                    img.className = "logo-cover";
                }
                logo.appendChild(img);
                card.appendChild(logo);

                const body = el("div", "project-body");
                body.appendChild(el("h3", null, item.title));

                const p = el("p", null, item.description);
                body.appendChild(p);

                if (item.link) {
                    const a = el("a", "project-link", item.link.text + " \u2192");
                    a.href = item.link.href;
                    a.target = "_blank";
                    a.rel = "noopener";
                    body.appendChild(a);
                }

                card.appendChild(body);
                grid.appendChild(card);
            });
            container.appendChild(grid);
        });

        root.textContent = "";
        root.appendChild(container);
    }

    function renderServices() {
        const root = document.getElementById("services");
        if (!root) {
            return;
        }
        const data = t.services;

        const container = el("div", "container");

        container.appendChild(el("p", "eyebrow", data.eyebrow));
        container.appendChild(el("h2", "section-title", data.heading));
        if (data.intro) {
            container.appendChild(el("p", "section-intro", data.intro));
        }

        const grid = el("div", "services-grid");
        data.cards.forEach(function (card) {
            const item = el("article", "service-card");

            if (card.icon) {
                item.appendChild(el("div", "service-icon", card.icon));
            }

            item.appendChild(el("h3", "service-card-title", card.title));
            item.appendChild(el("p", "service-card-desc", card.description));

            const list = el("ul", "service-list");
            card.points.forEach(function (point) {
                list.appendChild(el("li", null, point));
            });
            item.appendChild(list);

            grid.appendChild(item);
        });
        container.appendChild(grid);

        const cta = el("div", "section-cta");
        cta.appendChild(el("p", "section-cta-text", data.ctaText));
        const btn = el("a", "btn btn-primary", data.ctaButton);
        btn.href = "#contact";
        cta.appendChild(btn);
        container.appendChild(cta);

        root.appendChild(container);
    }

    function renderProcess() {
        const root = document.getElementById("process");
        if (!root) {
            return;
        }
        const data = t.process;

        const container = el("div", "container");

        container.appendChild(el("p", "eyebrow", data.eyebrow));
        container.appendChild(el("h2", "section-title", data.heading));
        container.appendChild(el("p", "section-intro", data.intro));

        const steps = el("ol", "process-steps");
        data.steps.forEach(function (step, index) {
            const item = el("li", "process-step");

            item.appendChild(el("span", "process-number", String(index + 1)));
            item.appendChild(el("h3", "process-step-title", step.title));
            item.appendChild(el("p", "process-step-desc", step.description));

            const you = el("p", "process-you");
            you.appendChild(el("strong", null, "You:"));
            you.appendChild(document.createTextNode(" " + step.you));
            item.appendChild(you);

            steps.appendChild(item);
        });
        container.appendChild(steps);

        root.appendChild(container);
    }

    function renderAbout() {
        const root = document.getElementById("about");
        if (!root || !t.about) {
            return;
        }
        const container = el("div", "container about-grid");
        const text = el("div", "about-text");
        text.appendChild(el("h2", "section-title", t.about.heading));
        t.about.paragraphs.forEach(function (paragraph) {
            text.appendChild(el("p", null, paragraph));
        });
        container.appendChild(text);

        root.textContent = "";
        root.appendChild(container);
    }

    function renderContact() {
        const root = document.getElementById("contact");
        if (!root || !t.contact) {
            return;
        }
        const container = el("div", "container");
        container.appendChild(el("h2", "section-title", t.contact.heading));
        container.appendChild(el("p", "section-intro", t.contact.intro));

        const form = el("form", "contact-form");
        form.action = "https://formsubmit.co/";
        form.method = "POST";

        const row = el("div", "form-row");

        const nameLabel = el("label", null, t.contact.labels.name);
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "name";
        nameInput.required = true;
        nameLabel.appendChild(nameInput);

        const emailLabel = el("label", null, t.contact.labels.email);
        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.name = "email";
        emailInput.required = true;
        emailLabel.appendChild(emailInput);

        row.appendChild(nameLabel);
        row.appendChild(emailLabel);

        const messageLabel = el("label", null, t.contact.labels.message);
        const textarea = document.createElement("textarea");
        textarea.name = "message";
        textarea.rows = 5;
        textarea.required = true;
        messageLabel.appendChild(textarea);

        const submit = el("button", "btn btn-primary", t.contact.submit);
        submit.type = "submit";

        form.appendChild(row);
        form.appendChild(messageLabel);
        form.appendChild(submit);
        container.appendChild(form);

        root.textContent = "";
        root.appendChild(container);
    }

    function renderFooter() {
        const tag = document.getElementById("copyright-tag");
        if (!tag || !t.footer) {
            return;
        }
        tag.textContent = "";
        tag.appendChild(document.createTextNode("\u00A9 "));
        const year = el("span", null, String(new Date().getFullYear()));
        year.id = "year";
        tag.appendChild(year);
        tag.appendChild(document.createTextNode(" " + t.footer.copyright));
    }

    applyMeta();
    applyBrand();
    renderNav();
    renderHero();
    renderProjects();
    renderServices();
    renderProcess();
    renderAbout();
    renderContact();
    renderFooter();
})();
