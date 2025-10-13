const header = document.querySelector("header");
      const navLinks = document.querySelectorAll("header nav a");
      const sections = document.querySelectorAll("section");

      // Navbar background + active link highlight
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);

        let fromTop = window.scrollY + 70;
        navLinks.forEach((link) => {
          let section = document.querySelector(link.getAttribute("href"));
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      });

      // Back to top button
      const backToTop = document.getElementById("backToTop");
      window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
      });
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Smooth scroll with fade-in effect on nav click
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          const targetSection = document.querySelector(targetId);

          sections.forEach((sec) => sec.classList.remove("fade-in"));
          targetSection.classList.add("fade-in");

          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth",
          });
        });
      });

      // Reveal sections on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      // Project Modal Logic
      const modal = document.getElementById("projectModal");
      const modalImg = document.getElementById("modal-img");
      const modalTitle = document.getElementById("modal-title");
      const modalDesc = document.getElementById("modal-desc");
      const modalTech = document.getElementById("modal-tech");
      const modalLink = document.getElementById("modal-link");
      const closeBtn = document.querySelector(".close-btn");

      const projectData = {
        1: {
          img: "./images/E-commerce-img.png",
          title: "E-commerce Website",
          desc: "A responsive full-stack online store built with React, Node, and MongoDB. Still in progress.",
          tech: ["fab fa-react", "fab fa-node-js", "fab fa-css3-alt"],
          link: "https://buybytes.vercel.app/",
        },
        2: {
          img: "./images/Streaming Website.png",
          title: "Trailer Streaming website",
          desc: "A sleek and modern Streaming website showcasing my work and skills.",
          tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
          link: "https://javaproject-zeta.vercel.app/",
        },
        3: {
          img: "./images/Cloned Webite.png",
          title: "Digital Ocean",
          desc: "This is a Cloned website, this project was to test my skill at a beginner level",
          tech: ["fab fa-html5", "fab fa-css3-alt"],
          link: "https://myproject-beryl-one.vercel.app/",
        },
      };

      document.querySelectorAll(".open-modal").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-project");
          const project = projectData[id];

          modalImg.src = project.img;
          modalTitle.textContent = project.title;
          modalDesc.textContent = project.desc;
          modalTech.innerHTML = project.tech
            .map((icon) => `<i class="${icon}"></i>`)
            .join(" ");
          modalLink.href = project.link;

          modal.style.display = "flex";
        });
      });

      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });

      const menuToggle = document.getElementById("menuToggle");
      const navbar = document.getElementById("navbar");

      // Toggle menu open/close
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navbar.classList.toggle("show");
      });

      // Close menu when a link is clicked
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navbar.classList.remove("show");
          menuToggle.classList.remove("active");
        });
      });

      // Navbar background change on scroll

      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
      });