/* ---------- PROJECTS ---------- */
const projects = [
  {
    name: "Drip Token",
    desc: "An intentionally simple SPL token faucet on Solana Devnet. Per-user cooldown and daily limits, mint and transfer modes, built for clarity, safety and easy auditing.",
    tech: ["Solana", "Anchor", "dApp"],
    links: [["GitHub", "https://github.com/jriffs/Drip-token"], ["Frontend dApp", "https://github.com/jriffs/Drip-token"]],
    image: "assets/screenshots/drip-token.png",
    chip: "drip-token",
    term: ["git clone github.com/jriffs/Drip-token", "# anchor program + dApp folder in root"]
  },
  {
    name: "Solscope",
    desc: "A simple Vite app for querying any Solana devnet wallet.",
    tech: ["Web3", "Solana", "Vite"],
    links: [["GitHub", "https://github.com/jriffs/solscope"]],
    image: "assets/screenshots/solscope.png",
    chip: "solscope",
    term: ["git clone github.com/jriffs/solscope"]
  },
  {
    name: "VoisaScript",
    desc: "A cross-platform browser extension (TypeScript + Svelte) with microservices for authentication and file storage. Built to explore real-world extension architecture.",
    tech: ["TypeScript", "Svelte", "Node.js"],
    links: [["GitHub", "https://github.com/jriffs/Voisascript-Web-TypeScript"], ["Storage service", "https://github.com/jriffs/file-storage-voisascript"]],
    image: "assets/screenshots/voisascript.png",
    chip: "voisascript",
    term: ["git clone github.com/jriffs/Voisascript-Web-TypeScript"]
  },
  {
    name: "100 Days of Solana",
    desc: "Submissions and experiments from the Major League Hacking challenge, including Anchor program development and wallet integrations.",
    tech: ["Anchor", "Rust", "JavaScript"],
    links: [["GitHub", "https://github.com/jriffs/100-days-of-solana"], ["Anchor work", "https://github.com/jriffs/100daysofsolana-Anchor-tutorial-2"]],
    image: "assets/screenshots/100-days-of-solana.png",
    chip: "100-days-of-solana",
    term: ["git clone github.com/jriffs/100-days-of-solana"]
  },
  {
    name: "dev-audience",
    desc: "Automated Twitter system powering the DevAudience community. Handles engagement and community management using the Twitter API v2.",
    tech: ["Node.js", "Twitter API", "JavaScript"],
    links: [["GitHub", "https://github.com/jriffs/dev-audience"]],
    image: "assets/screenshots/dev-audience.png",
    chip: "dev-audience",
    term: ["git clone github.com/jriffs/dev-audience"]
  },
  {
    name: "Rust CLI Tools",
    desc: "Command-line tools built while learning Rust: a file explorer and a number guessing game. Focused on systems programming fundamentals.",
    tech: ["Rust", "CLI"],
    links: [["File Explorer", "https://github.com/jriffs/first-file-explorer-project"], ["Guessing Game", "https://github.com/jriffs/guessing_game"]],
    image: "assets/screenshots/rust-cli.png",
    chip: "terminal",
    term: ["git clone github.com/jriffs/guessing_game"]
  }
];

/* ---------- EXPERIENCE ---------- */
const experience = {
  title: "Freelance Software Engineer",
  company: "Self-Employed",
  dates: "Jan 2022 – Present",
  current: true,
  entries: [
    {
      nda: true,
      title: "Proprietary Stock Brokerage Platform",
      bullets: [
        "Architected and deployed a highly scalable, distributed backend system designed for high-concurrency financial operations.",
        "Developed a responsive user dashboard integrated with live market data polling engines and real-time trade analytics.",
        "Designed secure, low-latency transactional pipelines ensuring seamless, ACID-compliant user deposits and withdrawals."
      ]
    },
    {
      nda: true,
      title: "Crypto Wealth & Asset Management Application",
      bullets: [
        "Built the backend infrastructure and client interface for a proprietary digital asset investment application.",
        "Integrated multi-source cryptocurrency data feeds to power real-time portfolio tracking and asset performance metrics.",
        "Implemented high-throughput ledger services to manage distributed financial transactions and secure capital movement."
      ]
    }
    /* ==========================================================
    ,{
      nda: false,
      title: "Project Name",
      tech: ["React", "Node.js", "PostgreSQL"],
      bullets: [
        "Lorem ipsum ....",
        "Lorem ipsum ....",
        "Lorem ipsum ...."
      ],
      links: [
        ["Live site", "https://example.com"],
        ["GitHub", "https://github.com/jriffs/repo-name"]
      ]
    }
    ========================================================== */
  ]
};

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const termLine = l => l.startsWith("#")
  ? `<span class="c">${esc(l)}</span>`
  : `<span class="k">$</span> ${esc(l).replace(/(github\.com\/jriffs\/)(\S+)/, '$1<span class="s">$2</span>')}`;

/* ---------- render projects ---------- */
document.getElementById("project-list").innerHTML = projects.map((p, i) => `
  <article class="prj rv${i % 2 ? " rev" : ""}">
    <div class="info">
      <div class="num">${String(i + 1).padStart(2, "0")}</div>
      <h3>${esc(p.name)}</h3>
      <div class="desc">${esc(p.desc)}</div>
      <div class="tech">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="lk">${p.links.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join("")}</div>
    </div>
    <div class="vis">
      <div class="pv">
        <div class="hd"><i></i><i></i><i></i><u>${esc(p.chip)}</u></div>
        <img class="shot" src="${esc(p.image)}" alt="Screenshot of ${esc(p.name)}" loading="lazy">
      </div>
      <div class="term"><div class="hd"><i></i><i></i><i></i><span>${esc(p.chip)}</span></div><pre>${p.term.map(termLine).join("\n")}</pre></div>
    </div>
  </article>`).join("");

/* ---------- render experience ---------- */
const lock = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
const hasNda = experience.entries.some(e => e.nda);
document.getElementById("exp").innerHTML = `
  <div class="role">
    <h3>${esc(experience.title)}</h3>
    <div class="co">@ ${esc(experience.company)}</div>
    <div class="dt">${experience.current ? "<i></i>" : ""}${esc(experience.dates)}</div>
    ${hasNda ? `<div class="ndanote">${lock}<div><b>Confidential work</b>Projects marked NDA were executed under a non-disclosure agreement, so client names and specifics are withheld.</div></div>` : ""}
  </div>
  <div class="tl">${experience.entries.map(e => `
    <div class="ent${e.nda ? " nda" : ""}">
      ${e.nda ? `<div class="ndabar">${lock}<b>Executed under NDA</b><span>Details withheld</span></div>` : ""}
      <h4>${esc(e.title)}</h4>
      ${e.nda ? '<div class="client">Client: <i class="redact"></i><em>undisclosed</em></div>' : ""}
      ${!e.nda && e.tech ? `<div class="tech">${e.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
      <ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
      ${!e.nda && e.links ? `<div class="lk">${e.links.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join("")}</div>` : ""}
    </div>`).join("")}
  </div>`;

/* missing screenshot placeholder */
document.querySelectorAll("img.shot").forEach(img => {
  img.addEventListener("error", () => {
    const ph = document.createElement("div");
    ph.className = "shot ph";
    ph.innerHTML = '<span class="cam">▣</span><b>Screenshot coming soon</b><span>' + img.getAttribute("src") + '</span>';
    img.replaceWith(ph);
  });
});
document.querySelectorAll(".pic img").forEach(img => {
  img.addEventListener("error", () => { const d = document.createElement("div"); d.className = "ph"; d.textContent = "your photo"; img.replaceWith(d); });
});

/* ---------- mobile menu ---------- */
const burger = document.getElementById("burger"), nav = document.getElementById("nav");
const setMenu = open => { nav.classList.toggle("open", open); burger.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* ---------- scroll reveal ---------- */
const items = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
  items.forEach(el => io.observe(el));
} else items.forEach(el => el.classList.add("in"));

/* ---------- highlight current section in nav ---------- */
const links = [...nav.querySelectorAll("a[href^='#']")];
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["about", "experience", "projects", "oss", "contact"].forEach(id => spy.observe(document.getElementById(id)));
}

document.getElementById("year").textContent = new Date().getFullYear();