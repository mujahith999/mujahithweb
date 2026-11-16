const ORIGINAL_CUTOUT_AVATAR = "user_uploaded_files/ttl=63d/tool_generated/mujahith_avatar_cutout.png";
    const ORIGINAL_FULL_3D_CUTOUT = "user_uploaded_files/ttl=63d/tool_generated/mujahith_3d_cutout.png";
    const ORIGINAL_UPLOADED_JPG = "user_uploaded_files/ttl=63d/user_uploaded/98e9641e-6f65-4c0a-991d-c05cf4e1691e.jpg";

    const THEME_HEX_MAP = {
      gold: "#ffdb70",
      cyan: "#38bdf8",
      emerald: "#34d399",
      crimson: "#fb7185",
      purple: "#c084fc"
    };

    const DEFAULT_PORTFOLIO_DATA = {
      theme: "gold",
      customColor: "#ffdb70",
      autoTintServiceIcons: true,
      avatarMode: "depth",
      profile: {
        name: "Aathambawa Mujahith",
        title: "Founder & CEO, Digital Nexus",
        email: "mujahithmujahith123123@gmail.com",
        phone: "+94 741659086",
        birthday: "January 03, 2002",
        location: "Kalmunai, Sri Lanka",
        avatarUrl: ORIGINAL_CUTOUT_AVATAR,
        full3dUrl: ORIGINAL_FULL_3D_CUTOUT,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15815.178746850504!2d81.8235371!3d7.4216761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0167d2d50a94b3%3A0x534e9264dfe87c41!2sKalmunai!5e0!3m2!1sen!2slk!4v1718726020172!5m2!1sen!2slk",
        social: {
          facebook: "https://web.facebook.com/aathambawa.mujahith.5",
          tiktok: "https://www.tiktok.com/@digital_nexus.help?_t=ZS-8xImJde5WXg&_r=1",
          instagram: "https://www.instagram.com/digital_nexus.help?igsh=Y296MmpjcndyeHF2",
          linkedin: "https://www.linkedin.com/in/aathambawa-mujahith/"
        }
      },
      aboutParagraphs: [
        "I'm the Founder & CEO of Digital Nexus, a results-driven Software Engineer, Full-Stack Web Developer, and Digital Marketer based in Sainthamaruthu, Sri Lanka. I specialize in creating powerful, intuitive, and user-focused digital solutions for web and mobile platforms.",
        "My job is to craft scalable web systems and applications that are not only functional and secure but also visually appealing and responsive. I combine modern technologies like React.js and Laravel with smart digital marketing strategies to boost brand presence. From development to design to promotion, I ensure every project I handle delivers real value and standout user experiences."
      ],
      services: [
        {
          id: "srv-1",
          title: "Software Development",
          icon: "https://i.postimg.cc/SRNKTHr1/Untitled-design-13.png",
          description: "Custom software solutions built with clean, efficient code to meet complex business needs."
        },
        {
          id: "srv-2",
          title: "Web Development",
          icon: "https://i.postimg.cc/nr73Wwh7/Untitled-design-12.png",
          description: "High-quality, full-stack development of scalable and secure websites using the latest technologies."
        },
        {
          id: "srv-3",
          title: "Digital Marketing",
          icon: "https://i.postimg.cc/C1LjprMX/Untitled-design-10.png",
          description: "Result-driven strategies in SEO, social media, and online advertising to grow your digital presence."
        },
        {
          id: "srv-4",
          title: "IT Support Specialist",
          icon: "https://i.postimg.cc/NMHrthqN/Untitled-design-11.png",
          description: "Reliable technical support and maintenance to ensure your systems run smoothly and securely."
        }
      ],
      testimonials: [
        {
          id: "test-1",
          name: "Ihsan - Ottamavadi",
          date: "24 May, 2025",
          avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
          text: "Working with Mujahith was a game-changer for our business. He developed a fast, responsive website and handled everything from design to deployment. His attention to detail and technical expertise are unmatched."
        },
        {
          id: "test-2",
          name: "Market Sniper Trader",
          date: "12 June, 2025",
          avatar: "https://i.postimg.cc/zXv1Xv81/avatar-4.png",
          text: "Mujahith’s digital marketing campaigns helped us grow our social media reach by over 300% in just a few weeks. He knows how to target the right audience and deliver real results."
        },
        {
          id: "test-3",
          name: "MYMUN Executive - Addalaichenai",
          date: "18 July, 2025",
          avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
          text: "We hired Mujahith to create a POS system for our store, and he delivered exactly what we needed. It's simple, efficient, and has improved our daily operations significantly."
        },
        {
          id: "test-4",
          name: "MACN. Shafana (HOD - FMC) - SEUSL",
          date: "05 August, 2025",
          avatar: "https://i.postimg.cc/DwY0yHtx/avatar-2.png",
          text: "Mujahith fixed our entire lab setup at the university—hardware, software, and networking. He’s a reliable IT support specialist who solves problems quickly and professionally."
        }
      ],
      clients: [
        { id: "cli-1", name: "Client Partner 1", logo: "https://i.postimg.cc/YqfKyG66/logo-1-color.png", link: "" },
        { id: "cli-2", name: "Client Partner 2", logo: "https://i.postimg.cc/fWm6JtgG/logo-2-color.png", link: "" },
        { id: "cli-3", name: "Client Partner 3", logo: "https://i.postimg.cc/Bb07xpwd/logo-3-color.png", link: "" },
        { id: "cli-4", name: "Client Partner 4", logo: "https://i.postimg.cc/hv1yMmkh/logo-4-color.png", link: "" },
        { id: "cli-5", name: "Client Partner 5", logo: "https://i.postimg.cc/ry1P86Dc/logo-5-color.png", link: "" },
        { id: "cli-6", name: "Client Partner 6", logo: "https://i.postimg.cc/SsWDN8NV/logo-6-color.png", link: "" }
      ],
      education: [
        {
          id: "edu-1",
          title: "Higher National Diploma in Information Technology",
          period: "2022 to 2024",
          institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE), Sammanthurai. - Sri Lanka",
          grade: "GPA - 3.6"
        },
        {
          id: "edu-2",
          title: "Diploma in Information Technology",
          period: "April 9, 2016 – October 9, 2016",
          institution: "Sri Lanka Unites - Sri Lanka",
          grade: "First-Class Distinction"
        },
        {
          id: "edu-3",
          title: "International Bridging Programme",
          period: "June 2015 – December 2015",
          institution: "CIMS Campus - Sri Lanka",
          grade: "A Grade Distinction"
        }
      ],
      experience: [
        {
          id: "exp-1",
          title: "Founder & CEO",
          company: "Digital Nexus",
          period: "2018 - Present",
          description: "Founded and lead Digital Nexus, a digital services company offering web development, social media marketing, IT support, and software solutions. Delivered full-stack web platforms with secure payment gateways, responsive UI/UX, and custom automation tools. Directed a cross-functional team to complete high-impact projects, ensuring client satisfaction through innovative, scalable, and data-driven solutions. Managed branding, business strategy, and digital advertising to grow a strong local and online presence."
        },
        {
          id: "exp-2",
          title: "Cashier, Digital Marketer & Social Media Manager",
          company: "MYMUN (Pvt) Ltd - MYMUN Executive",
          period: "Mar 2025 - May 2025",
          description: "Developed and implemented a custom POS system using HTML5, CSS3, and JavaScript to improve billing and sales operations. Designed a user-friendly interface with real-time calculations, receipt generation, and inventory tracking. Managed daily cash handling, financial reporting, and customer service. Led social media marketing across Facebook, Instagram, and TikTok, producing high-quality graphics, promotional videos, and paid ad campaigns. Analyzed insights, optimized strategies, and supported merchandising efforts to drive engagement and sales."
        },
        {
          id: "exp-3",
          title: "Web Application Developer",
          company: "South Eastern University of Sri Lanka (SEUSL)",
          period: "Aug 2024 - Feb 2025",
          description: "Developed a Lab Management System using Laravel and React.js with responsive design and secure RESTful APIs. Integrated AJAX for faster load times and optimized MySQL queries for performance. Followed Agile (Scrum), participated in code reviews, and collaborated with cross-functional teams. Performed hardware diagnostics, CMOS battery replacements, OS/software installations, and network troubleshooting for 90 computers."
        },
        {
          id: "exp-4",
          title: "Volunteer - 13th Annual International Research Conference",
          company: "South Eastern University of Sri Lanka (SEUSL)",
          period: "Nov 27, 2024",
          description: "Provided technical support for conference operations, including audiovisual setup and troubleshooting. Assisted with website updates, digital documentation, and cybersecurity. Supported data management and improved digital engagement for attendees."
        },
        {
          id: "exp-5",
          title: "Managing Assistant",
          company: "Lanka IOC Petrol Station, Sainthamaruthu",
          period: "May 2017 - Feb 2020",
          description: "Oversaw daily petrol station operations, inventory, staff scheduling, and financial reporting. Handled customer service, enforced safety protocols, coordinated with suppliers, and maintained accurate sales records. Worked with maintenance teams to ensure fuel dispenser and facility functionality."
        },
        {
          id: "exp-6",
          title: "Government Welfare Program Enumerator",
          company: "Ministry of Finance - Aswasuma Welfare Program",
          period: "Feb 2023 - Mar 2023",
          description: "Collected and digitized beneficiary data across 17 GN divisions in Sainthamaruthu. Ensured accurate data entry, collaborated with local officials, and maintained confidentiality. Completed fieldwork ahead of schedule, supporting timely program rollout."
        },
        {
          id: "exp-7",
          title: "Volunteer Member - Youth Combat Force (YCF)",
          company: "National Ethnic Unity Foundation, Ampara District, Sri Lanka",
          period: "Jan 2017 - Jan 2025",
          description: "Contributed to the Plastic Waste Management Project (2023-25), supporting environmental sustainability through waste collection, segregation, and awareness campaigns. Collaborated with local communities and partner organizations to implement eco-friendly practices and reduce plastic pollution. Organized workshops and public outreach campaigns to promote recycling and responsible plastic use. Maintained progress reports and provided regular updates to stakeholders. Received recognition from the Canada Fund for Local Initiatives for impactful contributions to environmental sustainability."
        },
        {
          id: "exp-8",
          title: "Member - #Politicslk Youth Collective",
          company: "Politicslk",
          period: "Oct 2024 - Present",
          description: "Appointed to the #Politicslk Youth Collective to enhance civic engagement and policy awareness among youth in Sri Lanka. Led project planning, reporting, and execution of educational programs focused on citizen empowerment and democratic literacy. Collaborated with changemakers and policymakers to implement impactful community initiatives and youth-led advocacy campaigns. Participated in national discussions, workshops, and outreach events to drive social change and governance awareness."
        },
        {
          id: "exp-9",
          title: "Volunteer",
          company: "Digizen.lk",
          period: "Oct 2024 - Present",
          description: "Engaged in digital literacy and cybersecurity awareness programs for youth and communities. Supported the organization of workshops on online safety, cyber ethics, and responsible digital behavior. Contributed to content creation, including articles, infographics, and social media posts. Collaborated with educators and tech experts to develop interactive educational materials. Provided technical support for webinars and digital events, while researching trends in digital safety and misinformation to improve educational outreach."
        }
      ],
      skills: [
        { id: "sk-1", name: "Software Development", percentage: 80 },
        { id: "sk-2", name: "Web Development", percentage: 85 },
        { id: "sk-3", name: "Digital Marketing", percentage: 90 },
        { id: "sk-4", name: "IT Support", percentage: 95 },
        { id: "sk-5", name: "Video Editing", percentage: 70 },
        { id: "sk-6", name: "Content Creation", percentage: 75 },
        { id: "sk-7", name: "Graphic Design", percentage: 85 }
      ],
      categories: [
        "Web Design",
        "Applications",
        "Web Development"
      ],
      projects: [
        { id: "prj-1", title: "Finance", category: "Web Development", image: "https://i.postimg.cc/qRHpHMyd/project-1.jpg", link: "https://digitalnexus.lk" },
        { id: "prj-2", title: "Orizon", category: "Web Development", image: "https://i.postimg.cc/bNrcM2Wt/project-2.png", link: "https://mujahithweb.pages.dev" },
        { id: "prj-3", title: "Fundo", category: "Web Design", image: "https://i.postimg.cc/jSJVqYsq/project-3.jpg", link: "" },
        { id: "prj-4", title: "Brawlhalla", category: "Applications", image: "https://i.postimg.cc/dtpXxNGb/project-4.png", link: "" },
        { id: "prj-5", title: "DSM.", category: "Web Design", image: "https://i.postimg.cc/43T0JKLw/project-5.png", link: "" },
        { id: "prj-6", title: "Metaspark", category: "Web Design", image: "https://i.postimg.cc/qR1DX1kZ/project-6.png", link: "" },
        { id: "prj-7", title: "Summary", category: "Web Development", image: "https://i.postimg.cc/Kj4q9tjc/project-7.png", link: "" },
        { id: "prj-8", title: "Task Manager", category: "Applications", image: "https://i.postimg.cc/rw2j4B1w/project-8.jpg", link: "" },
        { id: "prj-9", title: "Arrival", category: "Web Development", image: "https://i.postimg.cc/7LxNsSQv/project-9.png", link: "" }
      ],
      blogs: [
        { id: "blg-1", title: "13th AIRC - SEUSL", date: "Nov 27, 2024", image: "https://i.postimg.cc/sDvsp5JY/3.jpg", link: "" },
        { id: "blg-2", title: "Youth Combat Force - NEUF", date: "Jan 27, 2025", image: "https://i.postimg.cc/0QV1SNMX/4.jpg", link: "" },
        { id: "blg-3", title: "#Politicslk Youth Collective", date: "Oct 27, 2024", image: "https://i.postimg.cc/Zn0txh6b/6.jpg", link: "" },
        { id: "blg-4", title: "SEDR Programme - Ocean Hotel & Radisson Hotel Colombo", date: "2024", image: "https://i.postimg.cc/xCfSqmCb/2.jpg", link: "" },
        { id: "blg-5", title: "Voter Education Workshop held at NH Collection Colombo - #PoliticsLK in collaboration with IFES.", date: "2024", image: "https://i.postimg.cc/NFZV82gD/10.jpg", link: "" },
        { id: "blg-6", title: "Farewell Functions - SLIATE", date: "2024", image: "https://i.postimg.cc/mg7xwj1H/7.jpg", link: "" },
        { id: "blg-7", title: "Disarming Disinformation Training Program - SLIATE", date: "May 28, 2024", image: "https://i.postimg.cc/25TKcKkV/12.jpg", link: "" },
        { id: "blg-8", title: "Farewell Functions - Oluvil", date: "2024", image: "https://i.postimg.cc/mZ8RsrJ8/11.jpg", link: "" },
        { id: "blg-9", title: "Farewell Functions - Oluvil", date: "2024", image: "https://i.postimg.cc/0QyWd9ny/16.jpg", link: "" },
        { id: "blg-10", title: "Digital Ninjas, the force behind a safer digital space in Sri Lanka! - Digizen.lk", date: "2024", image: "https://i.postimg.cc/s2vKvTgM/13.jpg", link: "" },
        { id: "blg-11", title: "Freshers Function - SLIATE", date: "Jan 29, 2024", image: "https://i.postimg.cc/xC9C64NC/14.jpg", link: "" },
        { id: "blg-12", title: "2nd Place in Art competition - Al Ashraq National School, Nintavur", date: "2020", image: "https://i.postimg.cc/XJvWGSyw/9.jpg", link: "" }
      ],
      messages: [
        {
          id: "msg-1",
          fullname: "Ihsan (Ottamavadi)",
          email: "ihsan@example.lk",
          message: "Assalamu Alaikum Mujahith, thank you for launching our Digital Nexus business platform!",
          date: "2026-11-14"
        }
      ]
    };

    const STORAGE_KEY = "mujahithweb_v4_cms_state";
    let appState = normalizeState(loadState());
    let currentFilter = "all";
    let isAdminLoggedIn = false;

    function normalizeState(st) {
      if (Array.isArray(st.clients)) {
        st.clients = st.clients.map((c, idx) => {
          if (typeof c === "string") {
            return { id: "cli-" + (idx + 1), name: "Client Partner " + (idx + 1), logo: c, link: "" };
          }
          return c;
        });
      }
      if (typeof st.autoTintServiceIcons === "undefined") st.autoTintServiceIcons = true;
      if (!Array.isArray(st.categories) || st.categories.length === 0) {
        const baseCats = ["Web Design", "Applications", "Web Development"];
        (st.projects || []).forEach(p => {
          if (p.category && !baseCats.some(c => c.toLowerCase() === p.category.toLowerCase())) {
            baseCats.push(p.category);
          }
        });
        st.categories = baseCats;
      }
      return st;
    }

    function loadState() {
      if (window.__SERVER_PORTFOLIO_STATE) {
        return Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA)), window.__SERVER_PORTFOLIO_STATE);
      }
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          return Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA)), parsed);
        }
      } catch (e) {}
      return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }

    function saveState(msg) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      } catch (e) {}
      if (typeof window.__onServerSave === 'function') { window.__onServerSave(appState); }
      renderAll();
      if (msg) showToast(msg);
    }

    function showToast(message) {
      const toast = document.getElementById("toast-notification");
      const text = document.getElementById("toast-message");
      if (!toast || !text) return;
      text.textContent = message;
      toast.classList.remove("hidden");
      toast.classList.add("flex");
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
      }, 3000);
    }

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    // Dynamic SVG Filter & CSS Variable Updater so Service Icons Automatically Match Theme Color
    function applyThemeAndServiceIconColor() {
      const theme = appState.theme || "gold";
      document.body.setAttribute("data-theme", theme);
      document.body.classList.toggle("auto-tint-icons", appState.autoTintServiceIcons !== false);

      let hex = THEME_HEX_MAP[theme] || appState.customColor || "#ffdb70";
      if (theme === "custom" && appState.customColor) {
        hex = appState.customColor;
        document.documentElement.style.setProperty("--accent-primary", hex);
        document.documentElement.style.setProperty("--accent-secondary", hex);
        document.documentElement.style.setProperty("--accent-glow", hex + "44");
        document.documentElement.style.setProperty("--glass-border-highlight", hex + "66");
      } else {
        document.documentElement.style.removeProperty("--accent-primary");
        document.documentElement.style.removeProperty("--accent-secondary");
        document.documentElement.style.removeProperty("--accent-glow");
        document.documentElement.style.removeProperty("--glass-border-highlight");
      }

      // Convert hex to normalized R, G, B (0..1) for the SVG feColorMatrix
      const cleanHex = hex.replace("#", "");
      const r = parseInt(cleanHex.substring(0, 2), 16) / 255 || 1;
      const g = parseInt(cleanHex.substring(2, 4), 16) / 255 || 0.86;
      const b = parseInt(cleanHex.substring(4, 6), 16) / 255 || 0.44;

      const matrixEl = document.getElementById("srv-color-matrix");
      if (matrixEl) {
        matrixEl.setAttribute(
          "values",
          `0 0 0 0 ${r.toFixed(3)}  0 0 0 0 ${g.toFixed(3)}  0 0 0 0 ${b.toFixed(3)}  0 0 0 1 0`
        );
      }

      if (window.__threeParticlesMat) {
        window.__threeParticlesMat.color.set(hex);
      }
      if (window.__threeWireMat) {
        window.__threeWireMat.color.set(hex);
      }
    }

    // ============================================================
    // RENDER PORTFOLIO SECTIONS FROM STATE
    // ============================================================
    function renderAll() {
      applyThemeAndServiceIconColor();

      // 1. Sidebar Profile
      const p = appState.profile;
      const nameParts = (p.name || "Aathambawa Mujahith").trim().split(/\s+/);
      const nameHtml = nameParts.length > 1
        ? escapeHtml(nameParts[0]) + " <br>" + escapeHtml(nameParts.slice(1).join(" "))
        : escapeHtml(p.name);
      document.getElementById("profile-name-display").innerHTML = nameHtml;
      document.getElementById("profile-title-display").textContent = p.title;

      const emailLink = document.getElementById("contact-email-link");
      emailLink.textContent = p.email;
      emailLink.href = "mailto:" + p.email;

      const phoneLink = document.getElementById("contact-phone-link");
      phoneLink.textContent = p.phone;
      phoneLink.href = "tel:" + p.phone.replace(/\s+/g, "");

      document.getElementById("contact-birthday-text").textContent = p.birthday;
      document.getElementById("contact-location-text").textContent = p.location;

      const mapIframe = document.getElementById("contact-map-iframe");
      if (p.mapUrl && mapIframe && mapIframe.getAttribute("src") !== p.mapUrl) {
        mapIframe.setAttribute("src", p.mapUrl);
      }

      const avatarImg = document.getElementById("sidebar-avatar-img");
      const large3dImg = document.getElementById("large-3d-portrait-img");
      const avatarBox = document.getElementById("avatar-3d-box");
      avatarBox.classList.toggle("mode-hologram", appState.avatarMode === "hologram");

      if (appState.avatarMode === "original") {
        avatarImg.src = ORIGINAL_UPLOADED_JPG;
        large3dImg.src = ORIGINAL_UPLOADED_JPG;
      } else {
        avatarImg.src = p.avatarUrl || ORIGINAL_CUTOUT_AVATAR;
        large3dImg.src = p.full3dUrl || ORIGINAL_FULL_3D_CUTOUT;
      }

      if (p.social) {
        document.getElementById("social-fb").href = p.social.facebook || "#";
        document.getElementById("social-tiktok").href = p.social.tiktok || "#";
        document.getElementById("social-ig").href = p.social.instagram || "#";
        document.getElementById("social-li").href = p.social.linkedin || "#";
      }

      // 2. About Text
      const aboutContainer = document.getElementById("about-text-container");
      aboutContainer.innerHTML = (appState.aboutParagraphs || [])
        .map(para => `<p>${escapeHtml(para)}</p>`)
        .join("");

      // 3. Services (With Auto-Theme Tinted Service Icons)
      const srvContainer = document.getElementById("services-list-container");
      srvContainer.innerHTML = (appState.services || []).map(s => `
        <li class="service-item">
          <div class="service-icon-box">
            <img src="${escapeHtml(s.icon)}" alt="${escapeHtml(s.title)}" class="service-icon-img">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">${escapeHtml(s.title)}</h4>
            <p class="service-item-text">${escapeHtml(s.description)}</p>
          </div>
        </li>
      `).join("");

      // 4. Testimonials Marquee (Duplicated for Seamless Infinite Loop)
      const testList = appState.testimonials || [];
      const testLoop = testList.length > 0 ? [...testList, ...testList] : [];
      const testContainer = document.getElementById("testimonials-list-container");
      testContainer.innerHTML = testLoop.map(t => `
        <li class="testimonials-item-card" data-testimonial-id="${escapeHtml(t.id)}">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img src="${escapeHtml(t.avatar)}" alt="${escapeHtml(t.name)}" width="58">
            </figure>
            <h4 class="h4 testimonials-item-title">${escapeHtml(t.name)}</h4>
            <div class="testimonials-text">
              <p>${escapeHtml(t.text)}</p>
            </div>
          </div>
        </li>
      `).join("");

      // 5. Clients Logo Marquee (Duplicated for Seamless Infinite Loop)
      const clientList = appState.clients || [];
      const clientLoop = clientList.length > 0 ? [...clientList, ...clientList] : [];
      const clientsContainer = document.getElementById("clients-list-container");
      clientsContainer.innerHTML = clientLoop.map((c, idx) => {
        const hasLink = c.link && c.link.trim() !== "" && c.link.trim() !== "#";
        return `
          <li class="clients-marquee-item">
            <a href="${hasLink ? escapeHtml(c.link) : "#portfolio"}"
               ${hasLink ? 'target="_blank" rel="noopener noreferrer"' : 'data-jump-portfolio="true"'}
               title="${escapeHtml(c.name || "Client " + (idx + 1))}">
              <img src="${escapeHtml(c.logo)}" alt="${escapeHtml(c.name || "Client Logo")}">
            </a>
          </li>
        `;
      }).join("");

      // 6. Resume: Education
      const eduContainer = document.getElementById("education-list-container");
      eduContainer.innerHTML = (appState.education || []).map(e => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${escapeHtml(e.title)}</h4>
          <span>${escapeHtml(e.period)}</span>
          <p class="timeline-text">
            ${escapeHtml(e.institution)}${e.grade ? "<br>" + escapeHtml(e.grade) : ""}
          </p>
        </li>
      `).join("");

      // 7. Resume: Experience
      const expContainer = document.getElementById("experience-list-container");
      expContainer.innerHTML = (appState.experience || []).map(ex => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${escapeHtml(ex.title)}</h4>
          <span>${escapeHtml(ex.company)} | ${escapeHtml(ex.period)}</span>
          <p class="timeline-text">${escapeHtml(ex.description)}</p>
        </li>
      `).join("");

      // 8. Resume: Skills
      const skillsContainer = document.getElementById("skills-list-container");
      skillsContainer.innerHTML = (appState.skills || []).map(sk => `
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">${escapeHtml(sk.name)}</h5>
            <data value="${Number(sk.percentage)}">${Number(sk.percentage)}%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: ${Number(sk.percentage)}%;"></div>
          </div>
        </li>
      `).join("");

      // 9. Dynamic Portfolio Categories (Desktop Filter Bar, Mobile Select Dropdown & Admin Select)
      const cats = appState.categories || ["Web Design", "Applications", "Web Development"];
      const filterListEl = document.getElementById("portfolio-filter-list");
      if (filterListEl) {
        filterListEl.innerHTML = [
          `<li class="filter-item"><button type="button" class="${currentFilter === "all" ? "active" : ""}" data-filter-btn="all">All</button></li>`,
          ...cats.map(c => {
            const cLow = c.toLowerCase();
            return `<li class="filter-item"><button type="button" class="${currentFilter === cLow ? "active" : ""}" data-filter-btn="${escapeHtml(cLow)}">${escapeHtml(c)}</button></li>`;
          })
        ].join("");
      }

      const mobileSelectListEl = document.getElementById("mobile-select-list");
      if (mobileSelectListEl) {
        mobileSelectListEl.innerHTML = [
          `<li class="select-item"><button type="button" data-select-item="all">All</button></li>`,
          ...cats.map(c => `<li class="select-item"><button type="button" data-select-item="${escapeHtml(c.toLowerCase())}">${escapeHtml(c)}</button></li>`)
        ].join("");
      }

      const admCatSelect = document.getElementById("new-proj-cat");
      if (admCatSelect) {
        const prevVal = admCatSelect.value;
        admCatSelect.innerHTML = cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
        if (prevVal && cats.includes(prevVal)) {
          admCatSelect.value = prevVal;
        }
      }

      // 9b. Portfolio Grid (Clicking Opens Provided Viewing Link Directly)
      const portContainer = document.getElementById("portfolio-grid-container");
      portContainer.innerHTML = (appState.projects || []).map(prj => {
        const catLower = (prj.category || "").toLowerCase();
        const isActive = currentFilter === "all" || currentFilter === catLower;
        const hasLink = prj.link && prj.link.trim() !== "" && prj.link.trim() !== "#";
        return `
          <li class="project-item ${isActive ? "active" : ""}" data-filter-item data-category="${escapeHtml(catLower)}" data-project-id="${escapeHtml(prj.id)}">
            <a href="${hasLink ? escapeHtml(prj.link) : "#portfolio"}"
               ${hasLink ? 'target="_blank" rel="noopener noreferrer"' : 'class="project-card-trigger"'}
               data-project-id="${escapeHtml(prj.id)}">
              <figure class="project-img">
                ${hasLink ? `<span class="link-pill-badge"><ion-icon name="link-outline"></ion-icon>Live</span>` : ""}
                <div class="project-item-icon-box">
                  <ion-icon name="${hasLink ? "open-outline" : "eye-outline"}"></ion-icon>
                </div>
                <img src="${escapeHtml(prj.image)}" alt="${escapeHtml(prj.title)}" loading="lazy">
              </figure>
              <div class="project-meta-row">
                <h3 class="project-title">${escapeHtml(prj.title)}</h3>
                <p class="project-category">${escapeHtml(prj.category)}</p>
              </div>
            </a>
          </li>
        `;
      }).join("");

      // 10. Blog Grid (Clicking Opens Provided Blog Link Directly or Lightbox)
      const blogContainer = document.getElementById("blog-grid-container");
      blogContainer.innerHTML = (appState.blogs || []).map(b => {
        const hasLink = b.link && b.link.trim() !== "" && b.link.trim() !== "#";
        return `
          <li class="blog-post-item" data-blog-id="${escapeHtml(b.id)}">
            <a href="${hasLink ? escapeHtml(b.link) : "#blog"}"
               ${hasLink ? 'target="_blank" rel="noopener noreferrer"' : 'class="blog-card-trigger"'}
               data-blog-id="${escapeHtml(b.id)}">
              <figure class="blog-banner-box">
                ${hasLink ? `<span class="link-pill-badge"><ion-icon name="open-outline"></ion-icon>Link</span>` : ""}
                <img src="${escapeHtml(b.image)}" alt="${escapeHtml(b.title)}" loading="lazy">
                <div class="blog-hover-badge">
                  <span class="px-2.5 py-1 rounded-xl bg-zinc-900/90 border border-amber-400/40 text-amber-300 text-xs font-medium inline-flex items-center gap-1">
                    <ion-icon name="${hasLink ? "open-outline" : "expand-outline"}"></ion-icon>
                  </span>
                </div>
              </figure>
              <div class="blog-content">
                <div class="blog-meta">
                  <p class="blog-category">${escapeHtml(b.title)}</p>
                  <span class="blog-Meta-dot"></span>
                  <time>${escapeHtml(b.date)}</time>
                </div>
              </div>
            </a>
          </li>
        `;
      }).join("");

      if (isAdminLoggedIn) {
        renderAdminLists();
      }
    }

    // ============================================================
    // INTERACTIVE NAVIGATION, FILTERS, MODALS & 3D TILT
    // ============================================================
    function setupInteractions() {
      const sidebar = document.getElementById("sidebar-panel");
      const sidebarBtn = document.getElementById("sidebar-toggle-btn");
      sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });

      const navLinks = document.querySelectorAll("[data-nav-link]");
      const pages = document.querySelectorAll("[data-page]");
      navLinks.forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-nav-link");
          navLinks.forEach(b => b.classList.toggle("active", b === btn));
          pages.forEach(p => p.classList.toggle("active", p.getAttribute("data-page") === target));
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });

      // Portfolio Category Filter Buttons (Delegated so dynamic categories work immediately)
      const mobileSelect = document.getElementById("mobile-filter-select");
      const mobileSelectValue = document.getElementById("mobile-select-value");

      function applyFilter(cat) {
        currentFilter = (cat || "all").toLowerCase();
        renderAll();
      }

      document.getElementById("portfolio-filter-list").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-filter-btn]");
        if (!btn) return;
        const cat = btn.getAttribute("data-filter-btn");
        mobileSelectValue.textContent = btn.textContent;
        applyFilter(cat);
      });

      mobileSelect.addEventListener("click", () => {
        mobileSelect.classList.toggle("active");
      });

      document.getElementById("mobile-select-list").addEventListener("click", (e) => {
        const item = e.target.closest("[data-select-item]");
        if (!item) return;
        const cat = item.getAttribute("data-select-item");
        mobileSelectValue.textContent = item.textContent;
        mobileSelect.classList.remove("active");
        applyFilter(cat);
      });

      // Delegated Clicks for Testimonials, Projects, Blogs & Clients
      document.addEventListener("click", (e) => {
        const testItem = e.target.closest("[data-testimonial-id]");
        if (testItem) {
          const id = testItem.getAttribute("data-testimonial-id");
          const item = (appState.testimonials || []).find(t => t.id === id);
          if (item) {
            document.getElementById("modal-testimonial-img").src = item.avatar;
            document.getElementById("modal-testimonial-title").textContent = item.name;
            document.getElementById("modal-testimonial-date").textContent = item.date || "2025";
            document.getElementById("modal-testimonial-text").textContent = item.text;
            openModal("testimonial-modal-container", "testimonial-modal-overlay");
          }
          return;
        }

        const projTrigger = e.target.closest(".project-card-trigger");
        if (projTrigger) {
          e.preventDefault();
          const id = projTrigger.getAttribute("data-project-id");
          const prj = (appState.projects || []).find(p => p.id === id);
          if (prj) {
            openLightbox(prj.image, prj.category, prj.title, `${prj.title} — ${prj.category}`, prj.link);
          }
          return;
        }

        const blogTrigger = e.target.closest(".blog-card-trigger");
        if (blogTrigger) {
          e.preventDefault();
          const id = blogTrigger.getAttribute("data-blog-id");
          const blg = (appState.blogs || []).find(b => b.id === id);
          if (blg) {
            openLightbox(blg.image, blg.date, blg.title, `${blg.title} (${blg.date})`, blg.link);
          }
          return;
        }

        const jumpPort = e.target.closest("[data-jump-portfolio]");
        if (jumpPort) {
          e.preventDefault();
          const portNavBtn = document.querySelector('[data-nav-link="portfolio"]');
          if (portNavBtn) portNavBtn.click();
        }
      });

      setupModalClose("testimonial-modal-container", "testimonial-modal-overlay", "testimonial-modal-close");
      setupModalClose("portrait-3d-modal", "portrait-3d-overlay", "portrait-3d-close");
      setupModalClose("media-lightbox-modal", "media-lightbox-overlay", "media-lightbox-close");
      setupModalClose("admin-login-modal", "admin-login-overlay", "admin-login-close");
      setupModalClose("admin-dashboard-modal", "admin-dashboard-overlay", "admin-dashboard-close");

      // Open 3D Portrait Studio Modal on Avatar Click
      const avatar3DBox = document.getElementById("avatar-3d-box");
      avatar3DBox.addEventListener("click", () => {
        openModal("portrait-3d-modal", "portrait-3d-overlay");
      });

      // 3D Parallax Tilt on Sidebar Avatar & Large 3D Stage
      const avatarStage = document.getElementById("avatar-inner-stage");
      avatar3DBox.addEventListener("mousemove", (e) => {
        const rect = avatar3DBox.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        avatarStage.style.transform = `rotateY(${x * 26}deg) rotateX(${-y * 26}deg)`;
      });
      avatar3DBox.addEventListener("mouseleave", () => {
        avatarStage.style.transform = "rotateY(0deg) rotateX(0deg)";
      });

      const large3DWrap = document.getElementById("large-3d-stage-wrap");
      const large3DImg = document.getElementById("large-3d-portrait-img");
      large3DWrap.addEventListener("mousemove", (e) => {
        const rect = large3DWrap.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        large3DImg.style.transform = `rotateY(${x * 32}deg) rotateX(${-y * 22}deg) scale(1.04)`;
      });
      large3DWrap.addEventListener("mouseleave", () => {
        large3DImg.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
      });

      document.querySelectorAll(".btn-3d-mode").forEach(btn => {
        btn.addEventListener("click", () => {
          const mode = btn.getAttribute("data-3d-mode");
          appState.avatarMode = mode;
          document.querySelectorAll(".btn-3d-mode").forEach(b => {
            b.className = b === btn
              ? "btn-3d-mode px-3.5 py-2 rounded-xl text-xs font-medium bg-amber-400 text-zinc-950 transition"
              : "btn-3d-mode px-3.5 py-2 rounded-xl text-xs font-medium bg-white/10 text-zinc-200 hover:bg-white/15 transition";
          });
          saveState(`Switched 3D Portrait to ${btn.textContent}`);
        });
      });

      // Theme Switcher Button in Sidebar (Auto-Updates Service Icons Color too!)
      const themes = ["gold", "cyan", "emerald", "crimson", "purple"];
      document.getElementById("btn-cycle-theme").addEventListener("click", () => {
        const idx = themes.indexOf(appState.theme || "gold");
        appState.theme = themes[(idx + 1) % themes.length];
        saveState(`Theme & Service Icons switched to ${appState.theme.toUpperCase()}`);
      });

      // Contact Form Submission
      const contactForm = document.getElementById("portfolio-contact-form");
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fullname = document.getElementById("contact-fullname").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();
        if (!fullname || !email || !message) return;

        appState.messages = appState.messages || [];
        appState.messages.unshift({
          id: "msg-" + Date.now(),
          fullname,
          email,
          message,
          date: new Date().toISOString().slice(0, 10)
        });
        saveState("Message sent! Thank you for reaching out.");
        contactForm.reset();

        try {
          await fetch("https://formspree.io/f/xanqykvb", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, email, message })
          });
        } catch (err) {}
      });
    }

    function openLightbox(imgSrc, badgeText, titleText, descText, extLink) {
      document.getElementById("lightbox-img").src = imgSrc;
      document.getElementById("lightbox-badge").textContent = badgeText || "";
      document.getElementById("lightbox-title").textContent = titleText || "";
      document.getElementById("lightbox-desc").textContent = descText || "";
      const extBtn = document.getElementById("lightbox-external-btn");
      if (extLink && extLink.trim() !== "" && extLink.trim() !== "#") {
        extBtn.href = extLink;
        extBtn.classList.remove("hidden");
        extBtn.classList.add("inline-flex");
      } else {
        extBtn.classList.add("hidden");
        extBtn.classList.remove("inline-flex");
      }
      openModal("media-lightbox-modal", "media-lightbox-overlay");
    }

    function openModal(containerId, overlayId) {
      document.getElementById(containerId).classList.add("active");
      document.getElementById(overlayId).classList.add("active");
    }

    function closeModal(containerId, overlayId) {
      document.getElementById(containerId).classList.remove("active");
      document.getElementById(overlayId).classList.remove("active");
    }

    function setupModalClose(containerId, overlayId, closeBtnId) {
      const overlay = document.getElementById(overlayId);
      const closeBtn = document.getElementById(closeBtnId);
      if (overlay) overlay.addEventListener("click", () => closeModal(containerId, overlayId));
      if (closeBtn) closeBtn.addEventListener("click", () => closeModal(containerId, overlayId));
    }

    // Helper for File Upload -> DataURL into an input field
    function bindFileUploadToInput(fileInputId, textInputId, toastMsg) {
      const fileEl = document.getElementById(fileInputId);
      const textEl = document.getElementById(textInputId);
      if (!fileEl || !textEl) return;
      fileEl.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          textEl.value = reader.result;
          showToast(toastMsg || "Image uploaded and ready to save!");
        };
        reader.readAsDataURL(file);
      });
    }

    // ============================================================
    // ADMIN PANEL CMS LOGIC (Full Add + Edit/Change + Delete + Uploads)
    // ============================================================
    function setupAdminPanel() {
      const btnOpenAdmin = document.getElementById("btn-open-admin-login");
      const loginForm = document.getElementById("admin-login-form");
      const loginError = document.getElementById("admin-login-error");

      btnOpenAdmin.addEventListener("click", () => {
        if (isAdminLoggedIn) {
          populateAdminInputs();
          openModal("admin-dashboard-modal", "admin-dashboard-overlay");
        } else {
          document.getElementById("admin-username-input").value = "";
          document.getElementById("admin-password-input").value = "";
          loginError.classList.add("hidden");
          openModal("admin-login-modal", "admin-login-overlay");
        }
      });

      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const u = document.getElementById("admin-username-input").value.trim();
        const p = document.getElementById("admin-password-input").value;
        if (u === "admin" && p === "Mujahith@2026") {
          isAdminLoggedIn = true;
          closeModal("admin-login-modal", "admin-login-overlay");
          populateAdminInputs();
          openModal("admin-dashboard-modal", "admin-dashboard-overlay");
          showToast("Welcome to your Portfolio Admin Panel!");
        } else {
          loginError.classList.remove("hidden");
        }
      });

      document.getElementById("btn-admin-logout").addEventListener("click", () => {
        isAdminLoggedIn = false;
        closeModal("admin-dashboard-modal", "admin-dashboard-overlay");
        showToast("Logged out of Admin Panel");
      });

      // Admin Tabs Switching
      const tabBtns = document.querySelectorAll("[data-admin-tab]");
      const panes = document.querySelectorAll(".admin-pane");
      tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const tab = btn.getAttribute("data-admin-tab");
          tabBtns.forEach(b => b.classList.toggle("active", b === btn));
          panes.forEach(pane => {
            pane.classList.toggle("hidden", pane.id !== `admin-pane-${tab}`);
          });
        });
      });

      // Bind File Uploads for Services, Testimonials, Clients, Portfolio & Blog
      bindFileUploadToInput("new-srv-file", "new-srv-icon", "Service logo uploaded!");
      bindFileUploadToInput("new-test-file", "new-test-avatar", "Client photo uploaded!");
      bindFileUploadToInput("new-client-file", "new-client-logo", "Client logo uploaded!");
      bindFileUploadToInput("new-proj-file", "new-proj-img", "Project image uploaded!");
      bindFileUploadToInput("new-blog-file", "new-blog-img", "Blog photo uploaded!");

      // Upload New Avatar Image
      document.getElementById("adm-avatar-upload").addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          appState.profile.avatarUrl = reader.result;
          appState.profile.full3dUrl = reader.result;
          appState.avatarMode = "depth";
          document.getElementById("adm-avatar-preview").src = reader.result;
          saveState("New 3D Portrait Photo uploaded!");
        };
        reader.readAsDataURL(file);
      });

      // Live Theme & Custom Color Picker
      document.getElementById("adm-theme-select").addEventListener("change", (e) => {
        appState.theme = e.target.value;
        saveState("Theme & Service Icon color updated!");
      });

      document.getElementById("adm-custom-color").addEventListener("input", (e) => {
        appState.theme = "custom";
        appState.customColor = e.target.value;
        document.getElementById("adm-theme-select").value = "custom";
        applyThemeAndServiceIconColor();
      });

      document.getElementById("adm-auto-tint-icons").addEventListener("change", (e) => {
        appState.autoTintServiceIcons = e.target.checked;
        saveState(e.target.checked ? "Service icons matched to theme color!" : "Service icons set to original colors");
      });

      // Save Profile & Sidebar Settings
      document.getElementById("btn-save-profile").addEventListener("click", () => {
        appState.profile.name = document.getElementById("adm-name").value.trim() || appState.profile.name;
        appState.profile.title = document.getElementById("adm-title").value.trim() || appState.profile.title;
        appState.profile.email = document.getElementById("adm-email").value.trim() || appState.profile.email;
        appState.profile.phone = document.getElementById("adm-phone").value.trim() || appState.profile.phone;
        appState.profile.birthday = document.getElementById("adm-birthday").value.trim() || appState.profile.birthday;
        appState.profile.location = document.getElementById("adm-location").value.trim() || appState.profile.location;
        appState.profile.mapUrl = document.getElementById("adm-map-url").value.trim() || appState.profile.mapUrl;
        appState.profile.social = {
          facebook: document.getElementById("adm-fb").value.trim(),
          tiktok: document.getElementById("adm-tiktok").value.trim(),
          instagram: document.getElementById("adm-ig").value.trim(),
          linkedin: document.getElementById("adm-li").value.trim()
        };
        appState.theme = document.getElementById("adm-theme-select").value;
        appState.customColor = document.getElementById("adm-custom-color").value;
        appState.autoTintServiceIcons = document.getElementById("adm-auto-tint-icons").checked;
        saveState("Profile, theme & contact settings saved!");
      });

      // Save About Bio
      document.getElementById("btn-save-about-text").addEventListener("click", () => {
        const raw = document.getElementById("adm-about-text").value.trim();
        appState.aboutParagraphs = raw.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
        saveState("About Me bio updated!");
      });

      // ----------------------------------------------------------
      // CRUD 1: SERVICES (Add + Edit/Change)
      // ----------------------------------------------------------
      document.getElementById("btn-add-service").addEventListener("click", () => {
        const editId = document.getElementById("edit-srv-id").value;
        const title = document.getElementById("new-srv-title").value.trim();
        const icon = document.getElementById("new-srv-icon").value.trim() || "https://i.postimg.cc/SRNKTHr1/Untitled-design-13.png";
        const description = document.getElementById("new-srv-desc").value.trim();
        if (!title || !description) return;

        if (editId) {
          const item = appState.services.find(s => s.id === editId);
          if (item) {
            item.title = title;
            item.icon = icon;
            item.description = description;
          }
          resetServiceForm();
          saveState("Service updated!");
        } else {
          appState.services.push({ id: "srv-" + Date.now(), title, icon, description });
          resetServiceForm();
          saveState("Added new service card!");
        }
      });

      document.getElementById("btn-cancel-srv-edit").addEventListener("click", resetServiceForm);
      function resetServiceForm() {
        document.getElementById("edit-srv-id").value = "";
        document.getElementById("new-srv-title").value = "";
        document.getElementById("new-srv-icon").value = "";
        document.getElementById("new-srv-desc").value = "";
        document.getElementById("srv-form-heading").textContent = 'Add or Edit "What I\'m doing" Service';
        document.getElementById("btn-srv-submit-label").textContent = "+ Add Service Card";
        document.getElementById("btn-cancel-srv-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 2: TESTIMONIALS MARQUEE (Add + Edit/Change + Photo Upload)
      // ----------------------------------------------------------
      document.getElementById("btn-add-testimonial").addEventListener("click", () => {
        const editId = document.getElementById("edit-test-id").value;
        const name = document.getElementById("new-test-name").value.trim();
        const date = document.getElementById("new-test-date").value.trim() || "2026";
        const avatar = document.getElementById("new-test-avatar").value.trim() || "https://i.postimg.cc/zGDHfn3G/avatar-1.png";
        const text = document.getElementById("new-test-text").value.trim();
        if (!name || !text) return;

        if (editId) {
          const item = appState.testimonials.find(t => t.id === editId);
          if (item) {
            item.name = name;
            item.date = date;
            item.avatar = avatar;
            item.text = text;
          }
          resetTestimonialForm();
          saveState("Testimonial updated!");
        } else {
          appState.testimonials.push({ id: "test-" + Date.now(), name, date, avatar, text });
          resetTestimonialForm();
          saveState("Added new testimonial to marquee!");
        }
      });

      document.getElementById("btn-cancel-test-edit").addEventListener("click", resetTestimonialForm);
      function resetTestimonialForm() {
        document.getElementById("edit-test-id").value = "";
        document.getElementById("new-test-name").value = "";
        document.getElementById("new-test-date").value = "";
        document.getElementById("new-test-avatar").value = "";
        document.getElementById("new-test-text").value = "";
        document.getElementById("test-form-heading").textContent = "Add or Edit Testimonial (Marquee)";
        document.getElementById("btn-test-submit-label").textContent = "+ Add Testimonial";
        document.getElementById("btn-cancel-test-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 3: CLIENTS LOGO MARQUEE (Add + Edit/Change + Logo Upload)
      // ----------------------------------------------------------
      document.getElementById("btn-add-client").addEventListener("click", () => {
        const editId = document.getElementById("edit-client-id").value;
        const name = document.getElementById("new-client-name").value.trim() || "Client Partner";
        const logo = document.getElementById("new-client-logo").value.trim();
        const link = document.getElementById("new-client-link").value.trim();
        if (!logo) return;

        if (editId) {
          const item = appState.clients.find(c => c.id === editId);
          if (item) {
            item.name = name;
            item.logo = logo;
            item.link = link;
          }
          resetClientForm();
          saveState("Client logo updated!");
        } else {
          appState.clients.push({ id: "cli-" + Date.now(), name, logo, link });
          resetClientForm();
          saveState("Client logo added to marquee!");
        }
      });

      document.getElementById("btn-cancel-client-edit").addEventListener("click", resetClientForm);
      function resetClientForm() {
        document.getElementById("edit-client-id").value = "";
        document.getElementById("new-client-name").value = "";
        document.getElementById("new-client-logo").value = "";
        document.getElementById("new-client-link").value = "";
        document.getElementById("client-form-heading").textContent = "Add or Edit Client Logo (Marquee)";
        document.getElementById("btn-client-submit-label").textContent = "+ Save Client Logo";
        document.getElementById("btn-cancel-client-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 4: EDUCATION (Add + Edit/Change)
      // ----------------------------------------------------------
      document.getElementById("btn-add-education").addEventListener("click", () => {
        const editId = document.getElementById("edit-edu-id").value;
        const title = document.getElementById("new-edu-title").value.trim();
        const period = document.getElementById("new-edu-period").value.trim();
        const institution = document.getElementById("new-edu-desc").value.trim();
        const grade = document.getElementById("new-edu-grade").value.trim();
        if (!title || !period) return;

        if (editId) {
          const item = appState.education.find(e => e.id === editId);
          if (item) {
            item.title = title;
            item.period = period;
            item.institution = institution;
            item.grade = grade;
          }
          resetEduForm();
          saveState("Education entry updated!");
        } else {
          appState.education.unshift({ id: "edu-" + Date.now(), title, period, institution, grade });
          resetEduForm();
          saveState("Education entry added!");
        }
      });

      document.getElementById("btn-cancel-edu-edit").addEventListener("click", resetEduForm);
      function resetEduForm() {
        document.getElementById("edit-edu-id").value = "";
        document.getElementById("new-edu-title").value = "";
        document.getElementById("new-edu-period").value = "";
        document.getElementById("new-edu-desc").value = "";
        document.getElementById("new-edu-grade").value = "";
        document.getElementById("edu-form-heading").textContent = "Add or Edit Education Timeline";
        document.getElementById("btn-edu-submit-label").textContent = "+ Add Education Entry";
        document.getElementById("btn-cancel-edu-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 5: EXPERIENCE (Add + Edit/Change)
      // ----------------------------------------------------------
      document.getElementById("btn-add-experience").addEventListener("click", () => {
        const editId = document.getElementById("edit-exp-id").value;
        const title = document.getElementById("new-exp-title").value.trim();
        const company = document.getElementById("new-exp-company").value.trim();
        const period = document.getElementById("new-exp-period").value.trim() || "Present";
        const description = document.getElementById("new-exp-desc").value.trim();
        if (!title || !company) return;

        if (editId) {
          const item = appState.experience.find(ex => ex.id === editId);
          if (item) {
            item.title = title;
            item.company = company;
            item.period = period;
            item.description = description;
          }
          resetExpForm();
          saveState("Experience entry updated!");
        } else {
          appState.experience.unshift({ id: "exp-" + Date.now(), title, company, period, description });
          resetExpForm();
          saveState("Experience entry added!");
        }
      });

      document.getElementById("btn-cancel-exp-edit").addEventListener("click", resetExpForm);
      function resetExpForm() {
        document.getElementById("edit-exp-id").value = "";
        document.getElementById("new-exp-title").value = "";
        document.getElementById("new-exp-company").value = "";
        document.getElementById("new-exp-period").value = "";
        document.getElementById("new-exp-desc").value = "";
        document.getElementById("exp-form-heading").textContent = "Add or Edit Experience Timeline";
        document.getElementById("btn-exp-submit-label").textContent = "+ Add Experience Entry";
        document.getElementById("btn-cancel-exp-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 6: SKILLS (Add + Edit/Change)
      // ----------------------------------------------------------
      document.getElementById("btn-add-skill").addEventListener("click", () => {
        const editId = document.getElementById("edit-skill-id").value;
        const name = document.getElementById("new-skill-name").value.trim();
        const pct = Math.min(100, Math.max(1, Number(document.getElementById("new-skill-pct").value || 85)));
        if (!name) return;

        if (editId) {
          const item = appState.skills.find(sk => sk.id === editId);
          if (item) {
            item.name = name;
            item.percentage = pct;
          }
          resetSkillForm();
          saveState("Skill updated!");
        } else {
          appState.skills.push({ id: "sk-" + Date.now(), name, percentage: pct });
          resetSkillForm();
          saveState("Skill added!");
        }
      });

      document.getElementById("btn-cancel-skill-edit").addEventListener("click", resetSkillForm);
      function resetSkillForm() {
        document.getElementById("edit-skill-id").value = "";
        document.getElementById("new-skill-name").value = "";
        document.getElementById("new-skill-pct").value = "";
        document.getElementById("skill-form-heading").textContent = "Add or Edit My Skills";
        document.getElementById("btn-skill-submit-label").textContent = "+ Add Skill";
        document.getElementById("btn-cancel-skill-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 6B: PORTFOLIO CATEGORIES (Add + Rename/Edit + Remove)
      // ----------------------------------------------------------
      document.getElementById("btn-add-category").addEventListener("click", () => {
        const oldName = document.getElementById("edit-cat-old-name").value.trim();
        const name = document.getElementById("new-cat-name").value.trim();
        if (!name) return;
        appState.categories = appState.categories || ["Web Design", "Applications", "Web Development"];

        if (oldName) {
          const idx = appState.categories.findIndex(c => c === oldName);
          if (idx !== -1) {
            appState.categories[idx] = name;
          }
          (appState.projects || []).forEach(p => {
            if (p.category && p.category.toLowerCase() === oldName.toLowerCase()) {
              p.category = name;
            }
          });
          resetCategoryForm();
          saveState(`Renamed category "${oldName}" to "${name}"!`);
        } else {
          if (appState.categories.some(c => c.toLowerCase() === name.toLowerCase())) {
            showToast("Category already exists!");
            return;
          }
          appState.categories.push(name);
          resetCategoryForm();
          saveState(`Added category "${name}"!`);
        }
      });

      document.getElementById("btn-cancel-cat-edit").addEventListener("click", resetCategoryForm);
      function resetCategoryForm() {
        document.getElementById("edit-cat-old-name").value = "";
        document.getElementById("new-cat-name").value = "";
        document.getElementById("cat-form-heading").textContent = "Manage Portfolio Categories";
        document.getElementById("btn-cat-submit-label").textContent = "+ Add Category";
        document.getElementById("btn-cancel-cat-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 7: PORTFOLIO PROJECTS (Add + Edit/Change + Viewing Link)
      // ----------------------------------------------------------
      document.getElementById("btn-add-project").addEventListener("click", () => {
        const editId = document.getElementById("edit-proj-id").value;
        const title = document.getElementById("new-proj-title").value.trim();
        const category = document.getElementById("new-proj-cat").value;
        const link = document.getElementById("new-proj-link").value.trim();
        const image = document.getElementById("new-proj-img").value.trim() || "https://i.postimg.cc/qRHpHMyd/project-1.jpg";
        if (!title) return;

        if (editId) {
          const item = appState.projects.find(p => p.id === editId);
          if (item) {
            item.title = title;
            item.category = category;
            item.link = link;
            item.image = image;
          }
          resetProjForm();
          saveState("Portfolio project updated!");
        } else {
          appState.projects.unshift({ id: "prj-" + Date.now(), title, category, link, image });
          resetProjForm();
          saveState("Portfolio project added!");
        }
      });

      document.getElementById("btn-cancel-proj-edit").addEventListener("click", resetProjForm);
      function resetProjForm() {
        document.getElementById("edit-proj-id").value = "";
        document.getElementById("new-proj-title").value = "";
        document.getElementById("new-proj-link").value = "";
        document.getElementById("new-proj-img").value = "";
        document.getElementById("proj-form-heading").textContent = "Add or Edit Portfolio Project";
        document.getElementById("btn-proj-submit-label").textContent = "+ Add Portfolio Project";
        document.getElementById("btn-cancel-proj-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // CRUD 8: BLOG & EVENTS (Add + Edit/Change + Blog Viewing Link)
      // ----------------------------------------------------------
      document.getElementById("btn-add-blog").addEventListener("click", () => {
        const editId = document.getElementById("edit-blog-id").value;
        const title = document.getElementById("new-blog-title").value.trim();
        const date = document.getElementById("new-blog-date").value.trim() || "2026";
        const link = document.getElementById("new-blog-link").value.trim();
        const image = document.getElementById("new-blog-img").value.trim() || "https://i.postimg.cc/sDvsp5JY/3.jpg";
        if (!title) return;

        if (editId) {
          const item = appState.blogs.find(b => b.id === editId);
          if (item) {
            item.title = title;
            item.date = date;
            item.link = link;
            item.image = image;
          }
          resetBlogForm();
          saveState("Blog / Event post updated!");
        } else {
          appState.blogs.unshift({ id: "blg-" + Date.now(), title, date, link, image });
          resetBlogForm();
          saveState("Blog / Event post added!");
        }
      });

      document.getElementById("btn-cancel-blog-edit").addEventListener("click", resetBlogForm);
      function resetBlogForm() {
        document.getElementById("edit-blog-id").value = "";
        document.getElementById("new-blog-title").value = "";
        document.getElementById("new-blog-date").value = "";
        document.getElementById("new-blog-link").value = "";
        document.getElementById("new-blog-img").value = "";
        document.getElementById("blog-form-heading").textContent = "Add or Edit Blog / Event Post";
        document.getElementById("btn-blog-submit-label").textContent = "+ Add Blog / Event Post";
        document.getElementById("btn-cancel-blog-edit").classList.add("hidden");
      }

      // ----------------------------------------------------------
      // DELEGATED EDIT / CHANGE & DELETE ACTIONS INSIDE ADMIN PANEL
      // ----------------------------------------------------------
      document.getElementById("admin-tab-body").addEventListener("click", (e) => {
        const catDelBtn = e.target.closest("[data-cat-del]");
        if (catDelBtn) {
          const catName = catDelBtn.getAttribute("data-cat-del");
          appState.categories = (appState.categories || []).filter(c => c !== catName);
          if (currentFilter === catName.toLowerCase()) currentFilter = "all";
          saveState(`Removed category "${catName}"!`);
          return;
        }

        const catEditBtn = e.target.closest("[data-cat-edit]");
        if (catEditBtn) {
          const catName = catEditBtn.getAttribute("data-cat-edit");
          document.getElementById("edit-cat-old-name").value = catName;
          document.getElementById("new-cat-name").value = catName;
          document.getElementById("cat-form-heading").textContent = "Renaming Category: " + catName;
          document.getElementById("btn-cat-submit-label").textContent = "Update Category Name";
          document.getElementById("btn-cancel-cat-edit").classList.remove("hidden");
          document.getElementById("new-cat-name").focus();
          return;
        }

        const delBtn = e.target.closest("[data-admin-del]");
        if (delBtn) {
          const type = delBtn.getAttribute("data-admin-del");
          const id = delBtn.getAttribute("data-id");
          if (Array.isArray(appState[type])) {
            appState[type] = appState[type].filter(item => item.id !== id);
            saveState("Item removed!");
          }
          return;
        }

        const editBtn = e.target.closest("[data-admin-edit]");
        if (editBtn) {
          const type = editBtn.getAttribute("data-admin-edit");
          const id = editBtn.getAttribute("data-id");
          const list = appState[type] || [];
          const item = list.find(x => x.id === id);
          if (!item) return;

          if (type === "services") {
            document.getElementById("edit-srv-id").value = item.id;
            document.getElementById("new-srv-title").value = item.title || "";
            document.getElementById("new-srv-icon").value = item.icon || "";
            document.getElementById("new-srv-desc").value = item.description || "";
            document.getElementById("srv-form-heading").textContent = "Editing Service: " + item.title;
            document.getElementById("btn-srv-submit-label").textContent = "Update Service Card";
            document.getElementById("btn-cancel-srv-edit").classList.remove("hidden");
          } else if (type === "testimonials") {
            document.getElementById("edit-test-id").value = item.id;
            document.getElementById("new-test-name").value = item.name || "";
            document.getElementById("new-test-date").value = item.date || "";
            document.getElementById("new-test-avatar").value = item.avatar || "";
            document.getElementById("new-test-text").value = item.text || "";
            document.getElementById("test-form-heading").textContent = "Editing Testimonial: " + item.name;
            document.getElementById("btn-test-submit-label").textContent = "Update Testimonial";
            document.getElementById("btn-cancel-test-edit").classList.remove("hidden");
          } else if (type === "clients") {
            document.getElementById("edit-client-id").value = item.id;
            document.getElementById("new-client-name").value = item.name || "";
            document.getElementById("new-client-logo").value = item.logo || "";
            document.getElementById("new-client-link").value = item.link || "";
            document.getElementById("client-form-heading").textContent = "Editing Client Logo: " + (item.name || "");
            document.getElementById("btn-client-submit-label").textContent = "Update Client Logo";
            document.getElementById("btn-cancel-client-edit").classList.remove("hidden");
          } else if (type === "education") {
            document.getElementById("edit-edu-id").value = item.id;
            document.getElementById("new-edu-title").value = item.title || "";
            document.getElementById("new-edu-period").value = item.period || "";
            document.getElementById("new-edu-desc").value = item.institution || "";
            document.getElementById("new-edu-grade").value = item.grade || "";
            document.getElementById("edu-form-heading").textContent = "Editing Education: " + item.title;
            document.getElementById("btn-edu-submit-label").textContent = "Update Education Entry";
            document.getElementById("btn-cancel-edu-edit").classList.remove("hidden");
          } else if (type === "experience") {
            document.getElementById("edit-exp-id").value = item.id;
            document.getElementById("new-exp-title").value = item.title || "";
            document.getElementById("new-exp-company").value = item.company || "";
            document.getElementById("new-exp-period").value = item.period || "";
            document.getElementById("new-exp-desc").value = item.description || "";
            document.getElementById("exp-form-heading").textContent = "Editing Experience: " + item.title;
            document.getElementById("btn-exp-submit-label").textContent = "Update Experience Entry";
            document.getElementById("btn-cancel-exp-edit").classList.remove("hidden");
          } else if (type === "skills") {
            document.getElementById("edit-skill-id").value = item.id;
            document.getElementById("new-skill-name").value = item.name || "";
            document.getElementById("new-skill-pct").value = item.percentage || 85;
            document.getElementById("skill-form-heading").textContent = "Editing Skill: " + item.name;
            document.getElementById("btn-skill-submit-label").textContent = "Update Skill";
            document.getElementById("btn-cancel-skill-edit").classList.remove("hidden");
          } else if (type === "projects") {
            document.getElementById("edit-proj-id").value = item.id;
            document.getElementById("new-proj-title").value = item.title || "";
            document.getElementById("new-proj-cat").value = item.category || "Web Development";
            document.getElementById("new-proj-link").value = item.link || "";
            document.getElementById("new-proj-img").value = item.image || "";
            document.getElementById("proj-form-heading").textContent = "Editing Project: " + item.title;
            document.getElementById("btn-proj-submit-label").textContent = "Update Portfolio Project";
            document.getElementById("btn-cancel-proj-edit").classList.remove("hidden");
          } else if (type === "blogs") {
            document.getElementById("edit-blog-id").value = item.id;
            document.getElementById("new-blog-title").value = item.title || "";
            document.getElementById("new-blog-date").value = item.date || "";
            document.getElementById("new-blog-link").value = item.link || "";
            document.getElementById("new-blog-img").value = item.image || "";
            document.getElementById("blog-form-heading").textContent = "Editing Blog Post: " + item.title;
            document.getElementById("btn-blog-submit-label").textContent = "Update Blog Post";
            document.getElementById("btn-cancel-blog-edit").classList.remove("hidden");
          }

          document.getElementById("admin-tab-body").scrollTo({ top: 0, behavior: "smooth" });
          showToast("Loaded item into editor above — make changes & click Update!");
        }
      });

      // Export Updated index.html for GitHub
      document.getElementById("btn-export-github-html").addEventListener("click", () => {
        const cloneDoc = document.documentElement.cloneNode(true);
        const cloneLoginModal = cloneDoc.querySelector("#admin-login-modal");
        const cloneDashModal = cloneDoc.querySelector("#admin-dashboard-modal");
        if (cloneLoginModal) cloneLoginModal.classList.remove("active");
        if (cloneDashModal) cloneDashModal.classList.remove("active");
        let htmlOut = "<!DOCTYPE html>\n" + cloneDoc.outerHTML;
        htmlOut = htmlOut.replace(
          /const DEFAULT_PORTFOLIO_DATA = \{[\s\S]*?\};\n\s*const STORAGE_KEY/,
          "const DEFAULT_PORTFOLIO_DATA = " + JSON.stringify(appState, null, 2) + ";\n    const STORAGE_KEY"
        );
        const blob = new Blob([htmlOut], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "index.html";
        a.click();
        URL.revokeObjectURL(url);
        showToast("Downloaded updated index.html ready for GitHub!");
      });

      // Export / Import JSON & Reset
      document.getElementById("btn-export-json").addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "mujahithweb_backup.json";
        a.click();
        URL.revokeObjectURL(url);
      });

      document.getElementById("adm-import-json").addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            appState = normalizeState(Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA)), data));
            populateAdminInputs();
            saveState("Imported JSON backup!");
          } catch (err) {
            showToast("Invalid JSON file");
          }
        };
        reader.readAsText(file);
      });

      document.getElementById("btn-reset-defaults").addEventListener("click", () => {
        appState = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
        populateAdminInputs();
        saveState("Reset to original mujahithweb GitHub data!");
      });
    }

    function populateAdminInputs() {
      const p = appState.profile;
      document.getElementById("adm-name").value = p.name || "";
      document.getElementById("adm-title").value = p.title || "";
      document.getElementById("adm-email").value = p.email || "";
      document.getElementById("adm-phone").value = p.phone || "";
      document.getElementById("adm-birthday").value = p.birthday || "";
      document.getElementById("adm-location").value = p.location || "";
      document.getElementById("adm-map-url").value = p.mapUrl || "";
      document.getElementById("adm-fb").value = (p.social && p.social.facebook) || "";
      document.getElementById("adm-tiktok").value = (p.social && p.social.tiktok) || "";
      document.getElementById("adm-ig").value = (p.social && p.social.instagram) || "";
      document.getElementById("adm-li").value = (p.social && p.social.linkedin) || "";
      document.getElementById("adm-theme-select").value = appState.theme || "gold";
      document.getElementById("adm-custom-color").value = appState.customColor || "#ffdb70";
      document.getElementById("adm-auto-tint-icons").checked = appState.autoTintServiceIcons !== false;
      document.getElementById("adm-about-text").value = (appState.aboutParagraphs || []).join("\n\n");
      renderAdminLists();
    }

    function renderAdminLists() {
      // 1. Services
      document.getElementById("adm-services-list").innerHTML = (appState.services || []).map(s => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div class="flex items-center gap-3">
            <img src="${escapeHtml(s.icon)}" alt="" class="w-9 h-9 object-contain service-icon-img">
            <div>
              <p class="text-xs font-semibold text-white">${escapeHtml(s.title)}</p>
              <p class="text-[11px] text-zinc-400">${escapeHtml(s.description)}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-admin-edit="services" data-id="${escapeHtml(s.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="services" data-id="${escapeHtml(s.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 2. Testimonials
      document.getElementById("adm-testimonials-list").innerHTML = (appState.testimonials || []).map(t => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div class="flex items-center gap-3">
            <img src="${escapeHtml(t.avatar)}" alt="" class="w-10 h-10 rounded-xl object-cover bg-zinc-800 shrink-0">
            <div>
              <p class="text-xs font-semibold text-white">${escapeHtml(t.name)} <span class="text-amber-300 font-normal">(${escapeHtml(t.date || "")})</span></p>
              <p class="text-[11px] text-zinc-400 line-clamp-1">${escapeHtml(t.text)}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-admin-edit="testimonials" data-id="${escapeHtml(t.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="testimonials" data-id="${escapeHtml(t.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 3. Clients Logos
      document.getElementById("adm-clients-list").innerHTML = (appState.clients || []).map(c => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div class="flex items-center gap-3">
            <img src="${escapeHtml(c.logo)}" alt="" class="w-12 h-9 object-contain bg-zinc-800/80 p-1 rounded-lg shrink-0">
            <div>
              <p class="text-xs font-semibold text-white">${escapeHtml(c.name || "Client Logo")}</p>
              <p class="text-[11px] text-amber-300 truncate max-w-[160px]">${escapeHtml(c.link || "No link set")}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-admin-edit="clients" data-id="${escapeHtml(c.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="clients" data-id="${escapeHtml(c.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 4. Education
      document.getElementById("adm-education-list").innerHTML = (appState.education || []).map(e => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div>
            <p class="text-xs font-semibold text-white">${escapeHtml(e.title)} <span class="text-amber-300">(${escapeHtml(e.period)})</span></p>
            <p class="text-[11px] text-zinc-400">${escapeHtml(e.institution)} • ${escapeHtml(e.grade)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-admin-edit="education" data-id="${escapeHtml(e.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="education" data-id="${escapeHtml(e.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 5. Experience
      document.getElementById("adm-experience-list").innerHTML = (appState.experience || []).map(ex => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div>
            <p class="text-xs font-semibold text-white">${escapeHtml(ex.title)} — <span class="text-amber-300">${escapeHtml(ex.company)} (${escapeHtml(ex.period)})</span></p>
            <p class="text-[11px] text-zinc-400 line-clamp-1">${escapeHtml(ex.description)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-admin-edit="experience" data-id="${escapeHtml(ex.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="experience" data-id="${escapeHtml(ex.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 6. Skills
      document.getElementById("adm-skills-list").innerHTML = (appState.skills || []).map(sk => `
        <div class="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-zinc-900/70 border border-white/10">
          <span class="text-xs font-medium text-white">${escapeHtml(sk.name)} — <strong class="text-amber-300">${Number(sk.percentage)}%</strong></span>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-admin-edit="skills" data-id="${escapeHtml(sk.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit</button>
            <button type="button" data-admin-del="skills" data-id="${escapeHtml(sk.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 7A. Portfolio Categories List
      const admCatsEl = document.getElementById("adm-categories-list");
      if (admCatsEl) {
        admCatsEl.innerHTML = (appState.categories || []).map(c => `
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
            <span class="font-medium">${escapeHtml(c)}</span>
            <button type="button" data-cat-edit="${escapeHtml(c)}" class="text-amber-300 hover:text-amber-200 px-1" title="Rename Category">Edit</button>
            <button type="button" data-cat-del="${escapeHtml(c)}" class="text-rose-400 hover:text-rose-300 px-1 font-bold" title="Remove Category">×</button>
          </div>
        `).join("");
      }

      // 7B. Portfolio Projects
      document.getElementById("adm-projects-list").innerHTML = (appState.projects || []).map(prj => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div class="flex items-center gap-3 min-w-0">
            <img src="${escapeHtml(prj.image)}" alt="" class="w-12 h-11 rounded-lg object-cover shrink-0">
            <div class="min-w-0">
              <p class="text-xs font-semibold text-white truncate">${escapeHtml(prj.title)}</p>
              <p class="text-[11px] text-zinc-400">${escapeHtml(prj.category)}</p>
              <p class="text-[10px] text-amber-300 truncate">${escapeHtml(prj.link || "No viewing link set (opens preview)")}</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button type="button" data-admin-edit="projects" data-id="${escapeHtml(prj.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="projects" data-id="${escapeHtml(prj.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 8. Blogs
      document.getElementById("adm-blog-list").innerHTML = (appState.blogs || []).map(b => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/70 border border-white/10">
          <div class="flex items-center gap-3 min-w-0">
            <img src="${escapeHtml(b.image)}" alt="" class="w-12 h-11 rounded-lg object-cover shrink-0">
            <div class="min-w-0">
              <p class="text-xs font-semibold text-white truncate">${escapeHtml(b.title)}</p>
              <p class="text-[11px] text-zinc-400">${escapeHtml(b.date)}</p>
              <p class="text-[10px] text-amber-300 truncate">${escapeHtml(b.link || "No viewing link set (opens photo)")}</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button type="button" data-admin-edit="blogs" data-id="${escapeHtml(b.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300 hover:bg-amber-400/30">Edit / Change</button>
            <button type="button" data-admin-del="blogs" data-id="${escapeHtml(b.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">Delete</button>
          </div>
        </div>
      `).join("");

      // 9. Messages Inbox
      document.getElementById("adm-messages-list").innerHTML = (appState.messages || []).map(m => `
        <div class="p-3.5 rounded-xl bg-zinc-900/70 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p class="text-xs font-semibold text-white">${escapeHtml(m.fullname)} <span class="text-zinc-400 font-normal">&lt;${escapeHtml(m.email)}&gt;</span> • <span class="text-amber-300">${escapeHtml(m.date)}</span></p>
            <p class="text-xs text-zinc-300 mt-1">${escapeHtml(m.message)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <a href="mailto:${escapeHtml(m.email)}?subject=Re: Portfolio Inquiry" class="px-2.5 py-1 rounded-lg text-xs bg-amber-400/20 text-amber-300">Reply Email</a>
            <button type="button" data-admin-del="messages" data-id="${escapeHtml(m.id)}" class="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300">Delete</button>
          </div>
        </div>
      `).join("");
    }

    // ============================================================
    // THREE.JS INTERACTIVE 3D GLASS & PARTICLE WEBGL BACKGROUND
    // ============================================================
    function initThreeJsBackground() {
      const canvas = document.getElementById("webgl-bg");
      if (!canvas || typeof THREE === "undefined") return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 28;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const pCount = 320;
      const posArray = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 75;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.16,
        color: 0xffdb70,
        transparent: true,
        opacity: 0.55
      });
      window.__threeParticlesMat = pMat;
      const particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      const shapes = [];
      const geo1 = new THREE.IcosahedronGeometry(3.2, 0);
      const geo2 = new THREE.OctahedronGeometry(2.4, 0);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffdb70,
        wireframe: true,
        transparent: true,
        opacity: 0.11
      });
      window.__threeWireMat = wireMat;

      const positions = [
        [-18, 9, -6],
        [19, -8, -5],
        [-14, -11, -10],
        [16, 10, -8]
      ];
      positions.forEach((pos, idx) => {
        const mesh = new THREE.Mesh(idx % 2 === 0 ? geo1 : geo2, wireMat);
        mesh.position.set(pos[0], pos[1], pos[2]);
        scene.add(mesh);
        shapes.push(mesh);
      });

      let mouseX = 0;
      let mouseY = 0;
      window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      });

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0008;
        particles.rotation.x += 0.0003;
        camera.position.x += (mouseX * 2.2 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 2.2 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        shapes.forEach((s, i) => {
          s.rotation.x += 0.003 * (i % 2 === 0 ? 1 : -1);
          s.rotation.y += 0.004;
        });

        renderer.render(scene, camera);
      }
      animate();
    }

    // Boot Application
    window.addEventListener("DOMContentLoaded", () => {
      renderAll();
      setupInteractions();
      setupAdminPanel();
      initThreeJsBackground();
      if (window.location.hash === "#admin") {
        document.getElementById("btn-open-admin-login").click();
      }
    });
