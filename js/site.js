(function () {
  const current = document.body.dataset.page || "home";
  const nav = [
    ["home", "Overview", "index.html"],
    ["wheel", "Wheel-leg", "wheel-legged.html"],
    ["quad", "Quadruped", "quadruped.html"],
    ["systems", "Systems", "systems.html"],
    ["research", "Proposed research", "research.html"],
    ["other", "Other research", "other-research.html"]
  ];

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="Wang Gufan portfolio home">
          <span class="brand-mark" aria-hidden="true">WG</span>
          <span class="brand-copy"><strong>Wang Gufan</strong><small>Robotics · Fall 2027 PhD</small></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span><span class="sr-only">Toggle navigation</span>
        </button>
        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          ${nav.map(([id, label, href]) => `<a href="${href}" ${id === current ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
      </header>`;

    const toggle = header.querySelector(".nav-toggle");
    const menu = header.querySelector(".site-nav");
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer section-shell">
        <div>
          <p class="eyebrow">CONTACT</p>
          <h2>Interested in reliable locomotion beyond simulation assumptions?</h2>
        </div>
        <div class="footer-contact">
          <span>University of Science and Technology Beijing</span>
          <span>B.Eng. Robotics Engineering · expected 2027</span>
        </div>
        <div class="footer-base">
          <span>Research portfolio · project facts supported by retained hardware evidence and project records</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>`;
  }

  const fit = window.PORTFOLIO_FIT;
  document.querySelectorAll("[data-fit-short]").forEach((node) => {
    if (fit) node.textContent = fit.shortLabel;
  });
  document.querySelectorAll("[data-fit-intro]").forEach((node) => {
    if (fit) node.textContent = fit.intro;
  });
  document.querySelectorAll("[data-fit-connections]").forEach((node) => {
    if (!fit) return;
    node.innerHTML = fit.connections.map((item) => `
      <article class="fit-card">
        <span>${item.index}</span>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`).join("");
  });
  document.querySelectorAll("[data-fit-closing]").forEach((node) => {
    if (fit) node.textContent = fit.closing;
  });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 })
    : null;
  document.querySelectorAll(".reveal").forEach((node) => {
    if (revealObserver) revealObserver.observe(node);
    else node.classList.add("is-visible");
  });

  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("play", () => {
      document.querySelectorAll("video").forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
    });
  });
})();
