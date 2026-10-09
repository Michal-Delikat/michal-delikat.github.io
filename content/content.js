const content = {
    en: {
        meta: {
            title: "Michał Delikat — Portfolio",
            description:
                "Michał Delikat — web developer building fast, clean, and reliable websites for clients."
        },
        brand: "Michał Delikat",
        nav: {
            projects: "Projects",
            services: "Services",
            process: "Process",
            about: "About",
            contact: "Contact"
        },
        hero: {
            title: "Make your business {stand out}",
            lead: "Your next best marketing decision starts here.",
            primaryCta: "Book a meeting",
            secondaryCta: "View my work"
        },
        projects: {
            heading: "Projects",
            groups: [
                {
                    title: "Client work",
                    items: [
                        {
                            title: "maciekginalski.com",
                            description:
                                "Portfolio website for Hotel & Lifestyle photographer Maciek Ginalski.",
                            logo: { src: "assets/maciekginalskicom_thumbnail.png", alt: "maciekginalski.com logo" },
                            link: { text: "Visit site", href: "https://maciekginalski.com" }
                        }
                    ]
                },
                {
                    title: "Other projects",
                    items: [
                        {
                            title: "Maquis for Board Game Arena",
                            description:
                                "A digital adaptation of the acclaimed board game, published on " +
                                "Board Game Arena under the license of Side Room Games. I implemented " +
                                "the game logic, user interface, and collaborated with the publisher " +
                                "and platform through development and release.\n" +
                                "It reached 5,000+ plays within two months and earned glowing player reviews.",
                            logo: {
                                src: "assets/maquis_thumbnail.png",
                                alt: "Maquis box art",
                                cover: true
                            },
                            link: {
                                text: "Play it",
                                href: "https://pl.boardgamearena.com/gamepanel?game=maquis"
                            }
                        }
                    ]
                }
            ]
        },
        services: {
            eyebrow: "SERVICES",
            heading: "From design to launch. Everything your website needs.",
            intro:
                "One point of contact for your whole website, from first sketch to " +
                "ongoing care. When a project needs more, like professional photography or " + 
                "copywriting, I bring in trusted collaborators, so nothing falls between " +
                "the cracks.",
            cards: [
                {
                    icon: "",
                    title: "Design & branding",
                    description: "A website that looks like your business, not like a template.",
                    points: [
                        "Layout, typography and colour palette matched to your brand",
                        "Mockups you approve before any code is written",
                        "Consistent look across desktop, tablet and phone"
                    ]
                },
                {
                    icon: "",
                    title: "Development",
                    description: "Fast, clean, reliable code built to last.",
                    points: [
                        "Responsive, accessible, quick-loading pages",
                        "Contact forms, maps, booking and newsletter integrations",
                        "Easy content editing, if you need it"
                    ]
                },
                {
                    icon: "",
                    title: "Launch",
                    description: "From finished site to live site, without the technical headaches.",
                    points: [
                        "Domain, hosting, SSL and business email setup",
                        "Analytics and testing before going live",
                        "Redirects from your old website, so you don't lose visitors"
                    ]
                },
                {
                    icon: "",
                    title: "SEO & Google visibility",
                    description: "A site built so search engines understand it and customers find it.",
                    points: [
                        "Technical SEO: structure, meta data, page speed (Core Web Vitals)",
                        "Google Business Profile and local SEO",
                        "Ongoing SEO (content, link building) available as a separate service"
                    ]
                },
                {
                    icon: "",
                    title: "Content & messaging",
                    description: "Clear words and strong images that turn visitors into enquiries.",
                    points: [
                        "Help structuring your offer and calls to action",
                        "Guidance on copy and photography",
                        "Optional collaboration with a copywriter or photographer"
                    ]
                },
                {
                    icon: "",
                    title: "Care & maintenance",
                    description: "Your website stays secure, up to date and working.",
                    points: [
                        "Updates, backups and uptime monitoring",
                        "Small content changes included in a monthly plan",
                        "Quick help when something needs fixing"
                    ]
                }
            ],
            ctaText: "Not sure what you need? Let's talk, the first conversation is free.",
            ctaButton: "Book a meeting"
        },
        process: {
            eyebrow: "PROCESS",
            heading: "How we work together",
            intro:
                "A simple, transparent process, so you always know what's happening " +
                "and what I need from you.",
            steps: [
                {
                    title: "Conversation & brief",
                    description:
                        "We talk about your business, your customers and your goals, and look at " +
                        "what your competitors are doing."
                },
                {
                    title: "Design",
                    description:
                        "I prepare a mockup with layout, typography and colours for your approval " +
                        "before building anything."
                },
                {
                    title: "Build",
                    description:
                        "I develop the website, set up the technical SEO and add your content."
                },
                {
                    title: "Launch",
                    description:
                        "Domain, hosting, testing and going live. I make sure everything works " +
                        "on every device."
                },
                {
                    title: "Care",
                    description:
                        "After launch I keep your website updated, secure and improving, as much " +
                        "or as little as you need."
                }
            ]
        },
        about: {
            heading: "About me",
            paragraphs: [
                "I'm Michał, a web designer & developer based in Poland with a background in " +
                    "front-end engineering, most recently building a retail banking " +
                    "application at Pekao S.A.",
                "Whether you need a brand-new site or a refresh of an existing one, I'll " +
                    "work closely with you to turn your ideas into a finished product you're " +
                    "proud to share."
            ]
        },
        contact: {
            heading: "Contact",
            intro: "Tell me about your project and I'll get back to you.",
            labels: {
                name: "Name",
                email: "Email",
                message: "Message"
            },
            submit: "Send message"
        },
        footer: {
            copyright: "Michał Delikat"
        }
    }
};

window.PORTFOLIO_CONTENT = content;
