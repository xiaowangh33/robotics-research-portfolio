(function () {
  const current = document.body.dataset.page || "home";
  const nav = [
    ["home", "Overview", "index.html"],
    ["wheel", "Wheel-leg", "wheel-legged.html"],
    ["quad", "Quadruped", "quadruped.html"],
    ["systems", "Systems", "systems.html"],
    ["research", "Research interests", "research.html"],
    ["other", "Additional work", "other-research.html"]
  ];

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="Wang Gufan portfolio home">
          <span class="brand-mark" aria-hidden="true">WG</span>
          <span class="brand-copy"><strong>Wang Gufan</strong><small>Robotics engineering · B.Eng. candidate</small></span>
        </a>
        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          ${nav.map(([id, label, href]) => `<a href="${href}" ${id === current ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
          <a class="nav-cv" href="assets/downloads/Wang_Gufan_CV.pdf" download>Download CV</a>
        </nav>
        <button class="language-toggle" type="button" data-language-toggle aria-label="切换为简体中文" title="切换为简体中文">中文</button>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span><span class="sr-only">Toggle navigation</span>
        </button>
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
          <p class="eyebrow">Contact</p>
          <h2>Wang Gufan</h2>
        </div>
        <div class="footer-contact">
          <span>University of Science and Technology Beijing</span>
          <span>B.Eng. Robotics Engineering · expected 2027</span>
          <a href="mailto:gufan.wang.ustb@gmail.com">gufan.wang.ustb@gmail.com</a>
          <a class="footer-cv" href="assets/downloads/Wang_Gufan_CV.pdf" download>Download CV (PDF)</a>
          <span class="availability-note">Selected code available upon request.</span>
        </div>
        <div class="footer-base">
          <span>Robotics research portfolio · project facts are supported by project records and retained media</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>`;
  }

  const priorityArchitecture = document.querySelector("[data-priority-architecture]");
  const pageHero = document.querySelector(".research-hero");
  if (priorityArchitecture && pageHero) pageHero.insertAdjacentElement("afterend", priorityArchitecture);

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
