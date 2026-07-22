const SKILLS = [
  { title: "Programming", icon: "🧩", items: [
    { name: "Python", lvl: 92 }, { name: "Java", lvl: 82 },
    { name: "C++", lvl: 85 }, { name: "JavaScript", lvl: 84 },
    { name: "HTML", lvl: 95 }, { name: "CSS", lvl: 90 },
  ]},
  { title: "Frameworks", icon: "⚛️", items: [
    { name: "Flask", lvl: 88 }, { name: "FastAPI", lvl: 85 },
    { name: "React", lvl: 82 }, { name: "Node.js", lvl: 78 },
  ]},
  { title: "Machine Learning", icon: "🤖", items: [
    { name: "Scikit-learn", lvl: 85 }, { name: "Pandas", lvl: 90 },
    { name: "NumPy", lvl: 90 }, { name: "Matplotlib", lvl: 82 },
  ]},
  { title: "Databases", icon: "🗄️", items: [
    { name: "MySQL", lvl: 85 }, { name: "PostgreSQL", lvl: 78 },
  ]},
  { title: "Tools", icon: "🛠️", items: [
    { name: "Git", lvl: 90 }, { name: "GitHub", lvl: 92 },
    { name: "VS Code", lvl: 95 }, { name: "Google Earth Engine", lvl: 80 },
  ]},
];
/* Each project has a detailed description explaining problem, approach and impact. */
const PROJECTS = [
  {
    title: "Student Performance Prediction",
    emoji: "🎓",
    grad: "linear-gradient(135deg,#3b82f6,#22d3ee)",
    desc: "Machine-learning pipeline that predicts a student's academic outcome from study habits, attendance and past scores. Built with Scikit-learn using feature engineering, train/test split, and cross-validation across Linear Regression, Decision Tree and Random Forest models. Includes a Matplotlib dashboard for confusion matrix, feature importance and residual analysis.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "AI Resume Analyzer",
    emoji: "🧠",
    grad: "linear-gradient(135deg,#a855f7,#ec4899)",
    desc: "NLP-powered web tool that parses uploaded resumes, extracts skills / experience / education using spaCy, and scores ATS compatibility against a target job description. A FastAPI backend calls an LLM to generate improvement suggestions and a rewritten summary. Front-end shows a live match score and highlighted missing keywords.",
    tech: ["Python", "FastAPI", "spaCy", "OpenAI API"],
  },
  {
    title: "GIS Terrain Analysis (Google Earth Engine)",
    emoji: "🛰️",
    grad: "linear-gradient(135deg,#10b981,#14b8a6)",
    desc: "Watershed prioritization and terrain analytics built during my India Space Academy internship. Uses Google Earth Engine to compute slope, aspect, drainage density and morphometric parameters from SRTM DEM tiles, then ranks micro-watersheds. A second module fuses multi-season Sentinel-2 data for AI-assisted crop-type mapping.",
    tech: ["Google Earth Engine", "Python", "Remote Sensing", "GeoPandas"],
  },
  {
    title: "Shopping Mart — Flask Application",
    emoji: "🛒",
    grad: "linear-gradient(135deg,#f97316,#f43f5e)",
    desc: "Full-stack e-commerce store with a product catalog, cart, order flow, user authentication and an admin dashboard. Backend uses Flask + SQLAlchemy on MySQL with role-based access. Includes checkout, inventory tracking, order status updates and a Bootstrap-based responsive storefront.",
    tech: ["Flask", "MySQL", "SQLAlchemy", "Bootstrap"],
  },
  {
    title: "AI Detective Assistant",
    emoji: "🕵️",
    grad: "linear-gradient(135deg,#6366f1,#3b82f6)",
    desc: "An LLM agent that ingests case notes and evidence, extracts entities (people, places, times), builds a relationship graph, and reasons over clues using chain-of-thought prompting via LangChain. Users can ask follow-up questions and the agent explains its deductions step-by-step with citations back to source notes.",
    tech: ["Python", "LangChain", "LLMs", "NetworkX"],
  },
  {
    title: "Restaurant Management System",
    emoji: "🍽️",
    grad: "linear-gradient(135deg,#ef4444,#f97316)",
    desc: "End-to-end restaurant platform: digital menu with categories, live order tracking via WebSockets, table booking with time-slot conflict checks, and a staff dashboard for KOT (kitchen order tickets), billing and daily revenue reports. Built on React + Node.js with MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
  },
  {
    title: "2D Web Game Collection",
    emoji: "🎮",
    grad: "linear-gradient(135deg,#ec4899,#a855f7)",
    desc: "A pack of browser mini-games — Snake, Flappy Bird, Tic-Tac-Toe and a Memory-Match card game — built with vanilla JavaScript and HTML5 Canvas. Includes score persistence via localStorage, difficulty settings, sound effects and a unified retro-neon UI.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
  },
  {
    title: "Student Management System",
    emoji: "🗂️",
    grad: "linear-gradient(135deg,#06b6d4,#3b82f6)",
    desc: "Desktop CRUD application for schools/colleges with role-based access (admin, faculty, student). Manages student profiles, attendance, marks and generates term-wise report cards as PDFs. Built with Java Swing and MySQL, structured using MVC.",
    tech: ["Java", "Swing", "MySQL", "JDBC"],
  },
  {
    title: "Smart Loan Management System",
    emoji: "💰",
    grad: "linear-gradient(135deg,#22d3ee,#3b82f6)",
    desc: "A finance utility that calculates EMI, total interest and amortization schedule from loan amount, interest rate and tenure. Features an EMI reminder board that persists loans in localStorage, colour-coded due-date warnings, and a printable repayment plan. Built as a clean single-page app in vanilla JS with a glassmorphism UI.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
];
const EDUCATION = [
  { year: "2023 – 2027", title: "B.E. in Computer Science Engineering",
    sub: "Neil Gogte Institute of Technology",
    detail: "CGPA: 8.5 / 10 (in progress). Coursework: DSA, DBMS, OS, CN, AI, ML, Web Development." },
  { year: "2021 – 2023", title: "Intermediate — MPC",
    sub: "Narayana Junior College",
    detail: "Percentage: 92%. Mathematics, Physics, Chemistry." },
  { year: "2020 – 2021", title: "ICSE",
    sub: "Johnson Grammar School", detail: "Percentage: 85%." },
];
const EXPERIENCE = [
  {
    role: "Remote Sensing & GIS Intern",
    org: "India Space Academy",
    date: "May 2026 – Jul 2026",
    bullets: [
      "6-week internship focused on Remote Sensing & GIS using Python.",
      "Delivered project: Watershed Prioritization using Morphometric & Terrain Parameters.",
      "Delivered project: AI-Assisted Crop Type / Cropping Pattern Mapping using multi-season satellite data.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "GitHub Community",
    date: "2024 – Present",
    bullets: [
      "Contributed patches and documentation improvements to Python & JavaScript OSS repositories.",
      "Maintain personal utility libraries and small CLI tools.",
    ],
  },
  {
    role: "Software Engineering Intern (Seeking)",
    org: "Open to opportunities",
    date: "2026 – 2027",
    bullets: [
      "Actively seeking SDE / ML / Full-Stack internships and new-grad roles.",
    ],
  },
];
const CERTS = [
  { tag: "C++",   title: "Problem Solving Through C++ Programming",
    issuer: "IIT Bombay — BodhiCoder Programme (sponsored by Tower Research Capital)", date: "Jun 2026" },
  { tag: "GIS",   title: "Remote Sensing & GIS Using Python",
    issuer: "India Space Academy — Summer Training Programme", date: "Jun 2026" },
  { tag: "ML",    title: "Machine Learning",                       issuer: "Coursera",       date: "2025" },
  { tag: "Data",  title: "Data Science Foundations",               issuer: "NPTEL",          date: "2025" },
  { tag: "Web",   title: "Full-Stack Web Development",             issuer: "Udemy",          date: "2024" },
  { tag: "GEE",   title: "Google Earth Engine Fundamentals",       issuer: "Google",         date: "2026" },
  { tag: "Cloud", title: "Cloud Computing Basics",                 issuer: "AWS / GCP",      date: "2025" },
];
const ACHIEVEMENTS = [
  { icon: "🏆", title: "Hackathon Finalist",     detail: "Top-10 finish in inter-college coding hackathon." },
  { icon: "💻", title: "Coding Competitions",    detail: "Regular on LeetCode, Codeforces & HackerRank." },
  { icon: "🌿", title: "Open Source",            detail: "Merged PRs across Python & JS projects." },
  { icon: "⭐", title: "Academic Awards",        detail: "Consistent Dean's List / merit scholar." },
];
const GH_STATS = [
  { lbl: "Repositories",   val: 42,  suf: "+" },
  { lbl: "Stars Earned",   val: 128, suf: "+" },
  { lbl: "Contributions",  val: 300, suf: "+" },
  { lbl: "Languages",      val: 8,   suf: "" },
];
const FLASHCARDS = [
  { q: "What is overfitting in ML?", a: "When a model learns training noise instead of the true pattern, hurting generalization on unseen data." },
  { q: "REST vs GraphQL?",           a: "REST exposes fixed resource endpoints. GraphQL exposes one endpoint with a typed query language the client shapes." },
  { q: "Binary search complexity?",  a: "O(log n) on a sorted array — halves the search space each step." },
  { q: "What is NDVI in remote sensing?", a: "Normalized Difference Vegetation Index = (NIR − Red) / (NIR + Red). Higher = healthier vegetation." },
  { q: "SQL vs NoSQL?",              a: "SQL is relational with fixed schema and joins. NoSQL (document / key-value / graph) is flexible and scales horizontally." },
  { q: "What does Git rebase do?",   a: "Reapplies commits on top of another base tip to produce a linear history instead of a merge commit." },
];
/* ---------------- RENDERERS ---------------- */
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function renderSkills() {
  const root = document.getElementById("skillsGrid");
  SKILLS.forEach(g => {
    const rows = g.items.map(i => `
      <div class="skill-row">
        <div class="skill-row-top">
          <span class="skill-row-name">${i.name}</span>
          <span class="skill-row-lvl">${i.lvl}%</span>
        </div>
        <div class="bar"><div class="bar-fill" data-lvl="${i.lvl}"></div></div>
      </div>`).join("");
    root.appendChild(el(`
      <div class="glass skill-card">
        <div class="skill-head">
          <div class="skill-icon">${g.icon}</div>
          <div class="skill-title">${g.title}</div>
        </div>
        ${rows}
      </div>`));
  });
}
function renderProjects() {
  const root = document.getElementById("projectsGrid");
  PROJECTS.forEach(p => {
    const tech = p.tech.map(t => `<span>${t}</span>`).join("");
    root.appendChild(el(`
      <article class="glass proj">
        <div class="proj-cover" style="background:${p.grad}">${p.emoji}</div>
        <div class="proj-body">
          <h3 class="proj-title">${p.title}</h3>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-tech">${tech}</div>
          <div class="proj-actions">
            <a href="#" class="btn btn-ghost">gh Code</a>
            <a href="#" class="btn btn-primary">Live Demo ›</a>
          </div>
        </div>
      </article>`));
  });
}
function renderEducation() {
  // Rendered as static HTML above — nothing to do
}
function renderExperience() {
  const root = document.getElementById("xpTimeline");
  EXPERIENCE.forEach(x => {
    const bullets = x.bullets.map(b => `<li>${b}</li>`).join("");
    root.appendChild(el(`
      <div class="xp-item glass card">
        <div class="xp-head">
          <div>
            <div class="xp-role">${x.role}</div>
            <div class="xp-org">${x.org}</div>
          </div>
          <div class="xp-date">${x.date}</div>
        </div>
        <ul class="xp-bullets">${bullets}</ul>
      </div>`));
  });
}
function renderCerts() {
  const root = document.getElementById("certGrid");
  CERTS.forEach(c => {
    root.appendChild(el(`
      <div class="glass cert">
        <div class="cert-icon">🎖</div>
        <div>
          <div class="cert-top"><span class="cert-tag">${c.tag}</span><span class="cert-date">${c.date}</span></div>
          <div class="cert-title">${c.title}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
      </div>`));
  });
}
function renderAchievements() {
  const root = document.getElementById("achGrid");
  ACHIEVEMENTS.forEach(a => {
    root.appendChild(el(`
      <div class="glass ach">
        <div class="ach-icon">${a.icon}</div>
        <div class="ach-title">${a.title}</div>
        <div class="ach-detail">${a.detail}</div>
      </div>`));
  });
}
function renderGithub() {
  const root = document.getElementById("ghStats");
  GH_STATS.forEach(s => {
    root.appendChild(el(`
      <div class="glass gh-stat">
        <div class="gh-num" data-count="${s.val}" data-suf="${s.suf}">0${s.suf}</div>
        <div class="gh-lbl">${s.lbl}</div>
      </div>`));
  });
  const hm = document.getElementById("ghHeatmap");
  const total = 7 * 26;
  for (let i = 0; i < total; i++) {
    const v = Math.max(0.08, ((Math.sin(i * 1.7) + 1) / 2) * (Math.random() * 0.7 + 0.3));
    const cell = document.createElement("span");
    cell.style.opacity = v.toFixed(2);
    hm.appendChild(cell);
  }
}
function renderFlashcards() {
  const root = document.getElementById("flashGrid");
  FLASHCARDS.forEach(c => {
    const card = el(`
      <button class="flash" aria-label="Flip flashcard">
        <div class="flash-inner">
          <div class="flash-face flash-front">
            <div>
              <span class="flash-label">Question</span>
              <div class="flash-q">${c.q}</div>
              <div class="flash-hint">click to reveal</div>
            </div>
          </div>
          <div class="flash-face flash-back">
            <div>
              <span class="flash-label">Answer</span>
              <div class="flash-a">${c.a}</div>
            </div>
          </div>
        </div>
      </button>`);
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    root.appendChild(card);
  });
}
/* ---------------- INTERACTIONS ---------------- */
// Typing effect
function typing() {
  const words = ["AI & ML Enthusiast", "Full-Stack Developer", "Open Source Contributor", "Problem Solver"];
  const target = document.getElementById("typed");
  let i = 0, j = 0, del = false;
  function tick() {
    const w = words[i % words.length];
    target.textContent = w.slice(0, j);
    if (!del && j === w.length) { setTimeout(() => { del = true; tick(); }, 1400); return; }
    if (del && j === 0) { del = false; i++; }
    j += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  }
  tick();
}
// Reveal on scroll + skill bars + counters
function setupObserver() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      // animate skill bars inside
      e.target.querySelectorAll(".bar-fill").forEach(b => {
        b.style.width = b.dataset.lvl + "%";
      });
      // animate counters inside
      e.target.querySelectorAll("[data-count]").forEach(node => {
        const to = +node.dataset.count, suf = node.dataset.suf || "";
        const dur = 1400, start = performance.now();
        function step(t) {
          const p = Math.min(1, (t - start) / dur);
          node.textContent = Math.floor(to * (1 - Math.pow(1 - p, 3))) + suf;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(n => io.observe(n));
}
// Scroll progress + back to top
function setupScroll() {
  const bar = document.getElementById("scrollProgress");
  const top = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = (p * 100) + "%";
    top.classList.toggle("visible", h.scrollTop > 500);
  });
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
// Theme toggle
function setupTheme() {
  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    btn.textContent = document.documentElement.classList.contains("light") ? "☀️" : "🌙";
  });
}
// Mobile menu
function setupMenu() {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("navLinks");
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    btn.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); btn.textContent = "☰";
  }));
}
// Contact form
function setupForm() {
  const f = document.getElementById("contactForm");
  f.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! I'll be in touch soon.");
    f.reset();
  });
}
/* ---------------- BOOT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  renderEducation();
  renderExperience();
  renderCerts();
  renderAchievements();
  renderGithub();
  renderFlashcards();
  typing();
  setupObserver();
  setupScroll();
  setupTheme();
  setupMenu();
  setupForm();
});
