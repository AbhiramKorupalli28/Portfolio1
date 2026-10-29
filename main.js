/* ============================================================
   ABHIRAM KORUPALLI — PORTFOLIO CONFIG & ENGINE
   Matches reference format:
   1. About Me (Hero)
   2. Work Experience Timeline
   3. Motion Graphics (Banner + Intro Split + Grid)
   4. Short Content (Banner + Intro Split + 9:16 Reel Grid)
   5. Graphic Design (Banner + Intro Split + Gallery Grid)
   6. UI/UX & Apps (Banner + Intro Split + Project Grid)
   7. Contact & Let's Work (Banner + Working Gmail & WhatsApp)
   ============================================================ */

const CONFIG = {
  name: "Abhiram",
  fullName: "Abhiram Korupalli",
  mark: "abhiramkorupalli",
  title: "UI/UX Designer · Graphic Designer · Video Editor",
  location: "Kakinada, IN",
  timezone: "Asia/Kolkata",
  email: "saikorupalli@gmail.com",
  phones: ["+91 81257 57477", "+91 70750 51133"],
  linkedin: "https://www.linkedin.com/in/abhiramkorupalli",
  behance: "https://www.behance.net/abhiram1228",
  whatsapp: "918125757477",
  portrait: "media/portrait.jpg?v=2",
  experience: "1.5+ Years",
  skills: ["UI/UX Design", "Figma", "Wireframing & Prototyping", "Video Editing", "Motion Graphics", "Graphic Design"],
  tools: [
    { category: "UI/UX Design", software: "Figma" },
    { category: "Graphic Design", software: "Canva" },
    { category: "Photo Editing", software: "Adobe Lightroom" },
    { category: "Video Editing", software: "Adobe Premiere Rush, CapCut, VN Video Editor" }
  ],

  showreel: {
    wide: "media/showreel-h.mp4",
    wideposter: "media/showreel-poster-h.jpg",
    tall: "media/showreel-v.mp4",
    tallposter: "media/showreel-poster-v.jpg",
    year: "2026"
  },

  experiences: [
    {
      num: "1",
      company: "Freelance",
      role: "UI/UX Designer & Video Editor",
      period: "2024 – Present",
      type: "Remote / Independent",
      desc: "Designing user-friendly mobile app interfaces in Figma, interactive prototypes, and high-retention video content for creators and startups."
    },
    {
      num: "2",
      company: "Creator Collaborations",
      role: "Short Content & UGC Ad Creator",
      period: "2023 – 2024",
      type: "Creator Collaborations",
      desc: "Cutting and arranging high-retention video ads, UGC product reels (Laneige, Halo Top), and viral hooks in Telugu and English."
    },
    {
      num: "3",
      company: "Independent Projects",
      role: "UI/UX Designer & Graphic Designer",
      period: "2022 – Present",
      type: "Design & Case Studies",
      desc: "Designing end-to-end mobile app user experiences in Figma (SpeedyRide, Navya's, DailyByte), design systems, case studies on Behance, and promotional posters."
    },
    {
      num: "4",
      company: "ANITS Visakhapatnam",
      role: "B.Tech in CSE (Artificial Intelligence & ML)",
      period: "2023 – 2027",
      type: "ANITS Engineering",
      desc: "Specializing in Computer Science & Artificial Intelligence, combining analytical problem solving with UI/UX design and modern creative media."
    }
  ],

  motionGraphics: {
    featured: {
      type: "video",
      title: "Claude Code — 4K60 Motion Showcase",
      category: "Motion Graphics",
      aspect: "9:16",
      src: "media/mg-reel-2-loop.mp4",
      full: "media/mg-reel-2-full.mp4",
      poster: "media/mg-reel-2-poster.jpg",
      badge: "Featured 4K60"
    },
    items: [
      { type: "video", title: "LocalSend App Feature Reel", category: "Motion Graphics", aspect: "9:16", src: "media/mg-reel-1-loop.mp4", full: "media/mg-reel-1-full.mp4", poster: "media/mg-reel-1-poster.jpg" },
      { type: "video", title: "Claude Code — 4K60 Motion Showcase", category: "Motion Graphics", aspect: "9:16", src: "media/mg-reel-2-loop.mp4", full: "media/mg-reel-2-full.mp4", poster: "media/mg-reel-2-poster.jpg" },
      { type: "video", title: "Skill Reel — 60fps Motion Design", category: "Motion Graphics", aspect: "9:16", src: "media/mg-reel-3-loop.mp4", full: "media/mg-reel-3-full.mp4", poster: "media/mg-reel-3-poster.jpg" },
      { type: "video", title: "TV & Broadcast Motion Graphic", category: "Motion Graphics", aspect: "9:16", src: "media/mg-reel-4-loop.mp4", full: "media/mg-reel-4-full.mp4", poster: "media/mg-reel-4-poster.jpg" },
      { type: "video", title: "Dynamic Motion Visuals Reel", category: "Motion Graphics", aspect: "9:16", src: "media/mg-reel-5-loop.mp4", full: "media/mg-reel-5-full.mp4", poster: "media/mg-reel-5-poster.jpg" },
      { type: "video", title: "Claude Kinetic Typography v2", category: "Motion Graphics", aspect: "9:16", src: "media/mg-reel-6-loop.mp4", full: "media/mg-reel-6-full.mp4", poster: "media/mg-reel-6-poster.jpg" }
    ]
  },

  shortContent: {
    featured: {
      type: "video",
      title: "Storytelling Reel — 60fps Edit",
      category: "Short Content",
      aspect: "9:16",
      src: "media/sc-reel-5-loop.mp4",
      full: "media/sc-reel-5-full.mp4",
      poster: "media/sc-reel-5-poster.jpg",
      badge: "Featured Reel"
    },
    items: [
      { type: "video", title: "Storytelling Reel — 60fps Edit", category: "Short Content", aspect: "9:16", src: "media/sc-reel-5-loop.mp4", full: "media/sc-reel-5-full.mp4", poster: "media/sc-reel-5-poster.jpg" },
      { type: "video", title: "Tutorial Reel with Captions", category: "Short Content", aspect: "9:16", src: "media/sc-reel-6-loop.mp4", full: "media/sc-reel-6-full.mp4", poster: "media/sc-reel-6-poster.jpg" },
      { type: "video", title: "Viral Short Reel — High Pacing", category: "Short Content", aspect: "9:16", src: "media/sc-reel-7-loop.mp4", full: "media/sc-reel-7-full.mp4", poster: "media/sc-reel-7-poster.jpg" },
      { type: "video", title: "Creator Showcase Reel", category: "Short Content", aspect: "9:16", src: "media/sc-reel-8-loop.mp4", full: "media/sc-reel-8-full.mp4", poster: "media/sc-reel-8-poster.jpg" },
      { type: "video", title: "Vidura Neeti Story — Animated Reel", category: "Short Content", aspect: "9:16", src: "media/sc-reel-1-loop.mp4", full: "media/sc-reel-1-full.mp4", poster: "media/sc-reel-1-poster.jpg" },
      { type: "video", title: "Mahabharata Explainer Reel — 60fps", category: "Short Content", aspect: "9:16", src: "media/sc-reel-2-loop.mp4", full: "media/sc-reel-2-full.mp4", poster: "media/sc-reel-2-poster.jpg" },
      { type: "video", title: "Markandeya & Lord Shiva Story Reel", category: "Short Content", aspect: "9:16", src: "media/sc-reel-3-loop.mp4", full: "media/sc-reel-3-full.mp4", poster: "media/sc-reel-3-poster.jpg" },
      { type: "video", title: "Why Do Temples Have Bells? — Animated Reel", category: "Short Content", aspect: "9:16", src: "media/sc-reel-4-loop.mp4", full: "media/sc-reel-4-full.mp4", poster: "media/sc-reel-4-poster.jpg" }
    ]
  },

  ugcAds: {
    featured: {
      type: "video",
      title: "LANEIGE, UGC-Style Video Ad",
      category: "UGC Ads",
      aspect: "16:9",
      src: "media/laneige-loop.mp4",
      full: "media/laneige-full.mp4",
      poster: "media/laneige-poster.jpg",
      badge: "Featured UGC"
    },
    items: [
      { type: "video", title: "LANEIGE, UGC-Style Video Ad", category: "UGC Ads", aspect: "16:9", src: "media/laneige-loop.mp4", full: "media/laneige-full.mp4", poster: "media/laneige-poster.jpg" },
      { type: "video", title: "Halo Top, UGC-Style Video Ad", category: "UGC Ads", aspect: "16:9", src: "media/halotop-loop.mp4", full: "media/halotop-full.mp4", poster: "media/halotop-poster.jpg" }
    ]
  },

  posters: {
    featured: {
      type: "image",
      title: "Mythology Poster Cover",
      category: "Poster Design",
      aspect: "4:5",
      src: "media/d-mythology-cover.jpg",
      full: "media/d-mythology-cover.jpg",
      badge: "Featured Poster"
    },
    items: [
      { type: "image", title: "Mythology Poster Cover", category: "Poster Design", aspect: "4:5", src: "media/d-mythology-cover.jpg", full: "media/d-mythology-cover.jpg" },
      { type: "image", title: "Character Concept Poster", category: "Poster Design", aspect: "4:5", src: "media/d-character.jpg", full: "media/d-character.jpg" },
      { type: "image", title: "Character Model Sheet", category: "Poster Design", aspect: "16:9", src: "media/d-character-sheet.jpg", full: "media/d-character-sheet.jpg" },
      { type: "image", title: "Digital Concept Artwork", category: "Poster Design", aspect: "4:5", src: "media/d-character-laptop.jpg", full: "media/d-character-laptop.jpg" },
      { type: "image", title: "Cinematic Film Grade", category: "Poster Design", aspect: "16:9", src: "media/d-grade.jpg", full: "media/d-grade.jpg" },
      { type: "image", title: "Teal & Orange Grade", category: "Poster Design", aspect: "16:9", src: "media/d-grade-teal.jpg", full: "media/d-grade-teal.jpg" },
      { type: "image", title: "App Icon & Brand Visual", category: "Poster Design", aspect: "1:1", src: "media/d-app-icon.jpg", full: "media/d-app-icon.jpg" }
    ]
  },

  uiux: {
    featured: {
      type: "link",
      title: "SpeedyRide — Mobile App UI",
      category: "UI/UX",
      aspect: "16:10",
      thumb: "media/ux-speedyride.jpg",
      link: "https://www.behance.net/gallery/203632845/SpeedyRide-Ride-Booking-Mobile-App-UI-Design",
      role: "Figma · Photoshop",
      desc: "Ride-booking mobile app UI design with high-fidelity flows.",
      badge: "Featured UI"
    },
    items: [
      { type: "link", title: "Navya's", role: "E-Commerce App UI · Figma", line: "Fashion e-commerce app UI design.", thumb: "media/ux-navyas.jpg", link: "https://www.behance.net/gallery/200679207/Navyas-Fashion-Ecommerces-App-UI-Design", source: "Behance ↗" },
      { type: "link", title: "DailyByte", role: "Case Study · Figma", line: "News-reading app, full UI/UX case study.", thumb: "media/ux-dailybyte.jpg", link: "https://www.behance.net/gallery/191484483/DAILYBYTE-News-Reading-App-UIUX-Case-Study", source: "Behance ↗" },
      { type: "link", title: "LearnHub", role: "Web Design · Figma", line: "E-learning website, web UI & design system.", thumb: "media/ux-learnhub.jpg", link: "https://www.behance.net/gallery/193585645/LearnHub-(E-Learning)-website", source: "Behance ↗" },
      { type: "app", title: "ReelKit", role: "Web App Product", line: "Reel planner and hook writer for short-form creators.", logo: "media/app-reelkit.png", link: "https://reelkit.sites.tab.bot/", source: "Live App ↗" },
      { type: "app", title: "ReelTemplate", role: "Web App Product", line: "Turn any reel into an editable, reusable template.", logo: "media/app-reeltemplate.png", link: "https://reeltemplate.sites.tab.bot/", source: "Live App ↗" }
    ]
  }
};

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const C = CONFIG;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(C.email)}`;
  const hrefs = {
    email: gmailUrl,
    linkedin: C.linkedin,
    whatsapp: `https://wa.me/${C.whatsapp}`,
    behance: C.behance
  };

  // Toast feedback helper
  const toast = document.createElement("div");
  toast.className = "toast mono";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);

  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // Populate data-k and data-href
  $$("[data-k]").forEach(el => {
    const v = C[el.dataset.k];
    if (typeof v === "string") el.textContent = v;
  });

  $$("[data-href]").forEach(el => {
    el.href = hrefs[el.dataset.href] || "#";
    if (el.dataset.href === "email") {
      el.target = "_blank";
      el.rel = "noopener";
      el.addEventListener("click", () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(C.email).catch(() => {});
        }
        showToast(`Opening Gmail · Copied ${C.email}`);
      });
    }
  });

  // Current year
  const y = new Date().getFullYear();
  ["yr", "yr2"].forEach(id => {
    const e = document.getElementById(id);
    if (e) e.textContent = y;
  });
  const ry = document.getElementById("reelYr");
  if (ry) ry.textContent = C.showreel.year;

  // Live Clock
  const clock = $("#clock"), clock2 = $("#clock2");
  const tick = () => {
    try {
      const timeStr = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: C.timezone }).format(new Date()) + " IST";
      if (clock) clock.textContent = timeStr;
      if (clock2) clock2.textContent = timeStr;
    } catch (e) {}
  };
  tick();
  setInterval(tick, 20000);

  // Theme toggle (Default is Light, matching reference)
  const themeToggle = $("#themeToggle");
  const savedTheme = localStorage.getItem("abhiram-theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "Light" : "Dark";
    themeToggle.addEventListener("click", () => {
      const cur = document.body.getAttribute("data-theme") || "light";
      const next = cur === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", next);
      localStorage.setItem("abhiram-theme", next);
      themeToggle.textContent = next === "dark" ? "Light" : "Dark";
      showToast(`Switched to ${next} theme`);
    });
  }

  // Mobile menu sheet
  const menuBtn = $("#menuBtn"), sheet = $("#sheet");
  const setMenu = open => {
    sheet.hidden = !open;
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.textContent = open ? "Close" : "Menu";
    document.body.style.overflow = open ? "hidden" : "";
  };
  if (menuBtn) menuBtn.addEventListener("click", () => setMenu(sheet.hidden));
  $$("a", sheet).forEach(a => a.addEventListener("click", () => setMenu(false)));

  // SECTION 2: Populate Work Experience list
  const expList = $("#expList");
  if (expList) {
    C.experiences.forEach(item => {
      const li = document.createElement("li");
      li.className = "exp-item";
      li.innerHTML = `
        <div class="exp-num mono">(${item.num})</div>
        <div class="exp-details">
          <div class="exp-header-row">
            <h3 class="exp-role">${item.role}</h3>
            <span class="exp-period mono">${item.period}</span>
          </div>
          <div class="exp-type mono">${item.type}</div>
          <p class="exp-desc">${item.desc}</p>
        </div>
      `;
      expList.appendChild(li);
    });
  }

  // SHOWREEL PLAYER (9:16 VERTICAL REEL)
  const rv = $("#reelVideo"), soundBtn = $("#soundBtn");
  let soundOn = false;
  if (rv && soundBtn) {
    const pickReel = () => {
      const want = C.showreel.tall;
      if (rv.dataset.src === want) return;
      rv.dataset.src = want;
      rv.poster = C.showreel.tallposter;
      rv.src = want;
      rv.muted = !soundOn;
      rv.play().catch(() => {});
    };

    soundBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      soundOn = !soundOn;
      rv.muted = !soundOn;
      soundBtn.setAttribute("aria-pressed", soundOn);
      soundBtn.textContent = soundOn ? "Sound On 🔊" : "Sound Off 🔇";
      if (soundOn) {
        rv.currentTime = 0;
        rv.play().catch(() => {});
      }
    });

    const fmt = t => Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0");
    rv.addEventListener("timeupdate", () => {
      if (rv.duration) $("#reelTime").textContent = fmt(rv.currentTime) + " / " + fmt(rv.duration);
    });

    rv.addEventListener("click", () => soundBtn.click());
    pickReel();

    new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) rv.play().catch(() => {});
        else rv.pause();
      });
    }, { threshold: 0.15 }).observe(rv);
  }

  // LIGHTBOX PLAYLIST & MODAL
  const playlist = [];
  const lb = $("#lb"), stage = $("#lbStage");
  let cur = -1, lastFocus = null;

  function openLb(i) {
    if (!playlist.length) return;
    cur = (i + playlist.length) % playlist.length;
    const w = playlist[cur];
    stage.innerHTML = "";

    if (w.type === "video") {
      const v = document.createElement("video");
      v.src = w.full || w.src;
      v.controls = true;
      v.playsInline = true;
      v.autoplay = true;
      v.poster = w.poster || "";
      stage.appendChild(v);
      v.play().catch(() => {});
    } else {
      const img = document.createElement("img");
      img.src = w.full || w.src;
      img.alt = w.title;
      stage.appendChild(img);
    }

    $("#lbIdx").textContent = String(cur + 1).padStart(2, "0") + " / " + String(playlist.length).padStart(2, "0");
    $("#lbTitle").textContent = w.title;
    $("#lbCat").textContent = w.category || "";

    if (lb.hidden) {
      lastFocus = document.activeElement;
      lb.hidden = false;
      document.body.style.overflow = "hidden";
      $("#lbClose").focus();
      if (rv && !rv.paused) { rv.pause(); rv._wasPlaying = true; }
    }
  }

  function closeLb() {
    stage.innerHTML = "";
    lb.hidden = true;
    document.body.style.overflow = "";
    if (rv && rv._wasPlaying) { rv.play().catch(() => {}); rv._wasPlaying = false; }
    if (lastFocus) lastFocus.focus();
  }

  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => openLb(cur - 1));
  $("#lbNext").addEventListener("click", () => openLb(cur + 1));
  addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") openLb(cur + 1);
    if (e.key === "ArrowLeft") openLb(cur - 1);
  });

  // Touch swipe in lightbox
  let sx = null;
  stage.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  stage.addEventListener("touchend", e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) openLb(cur + (dx < 0 ? 1 : -1));
    sx = null;
  });

  // CARD BUILDER
  const ratio = a => {
    const [w, h] = (a || "9:16").split(":").map(Number);
    return `${w}/${h}`;
  };

  function createMediaCard(item, catName) {
    const isVideo = item.type === "video";
    const el = document.createElement("div");
    el.className = `media-card r${(item.aspect || "9x16").replace(":", "x")}`;

    let plIndex = playlist.findIndex(p => (p.full && p.full === item.full) || (p.src && p.src === item.src));
    if (plIndex === -1) {
      plIndex = playlist.push({ ...item, category: catName }) - 1;
    }

    let mediaHtml = "";
    if (isVideo) {
      mediaHtml = `
        <div class="card-thumb" style="aspect-ratio: ${ratio(item.aspect)}">
          <img src="${item.poster}" alt="${item.title}" loading="lazy">
          <video muted playsinline loop preload="none" data-src="${item.src}"></video>
          <div class="card-play-icon" aria-hidden="true">▶</div>
        </div>
      `;
    } else {
      mediaHtml = `
        <div class="card-thumb" style="aspect-ratio: ${ratio(item.aspect)}">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <div class="card-view-icon" aria-hidden="true">⊕</div>
        </div>
      `;
    }

    el.innerHTML = `
      ${mediaHtml}
      <div class="card-info">
        <h4 class="card-title">${item.title}</h4>
        <span class="card-meta mono">${catName}</span>
      </div>
    `;

    el.addEventListener("click", () => openLb(plIndex));

    // Video hover preview
    if (isVideo) {
      const vid = el.querySelector("video");
      el.addEventListener("mouseenter", () => {
        if (!vid.src && vid.dataset.src) vid.src = vid.dataset.src;
        vid.play().catch(() => {});
      });
      el.addEventListener("mouseleave", () => {
        vid.pause();
      });
    }

    return el;
  }

  function createFeaturedCard(item, catName) {
    const isVideo = item.type === "video";
    const wrap = document.createElement("div");
    wrap.className = "featured-showcase-card";

    let plIndex = playlist.findIndex(p => (p.full && p.full === item.full) || (p.src && p.src === item.src));
    if (plIndex === -1) {
      plIndex = playlist.push({ ...item, category: catName }) - 1;
    }

    let mediaHtml = "";
    if (isVideo) {
      mediaHtml = `
        <div class="featured-media" style="aspect-ratio: ${ratio(item.aspect)}">
          <img src="${item.poster}" alt="${item.title}" loading="lazy">
          <video muted playsinline loop preload="none" data-src="${item.src}"></video>
          <span class="featured-badge mono">${item.badge || "Featured"}</span>
          <div class="featured-play-btn" aria-hidden="true">▶ Play Video</div>
        </div>
      `;
    } else {
      mediaHtml = `
        <div class="featured-media" style="aspect-ratio: ${ratio(item.aspect)}">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <span class="featured-badge mono">${item.badge || "Featured"}</span>
        </div>
      `;
    }

    wrap.innerHTML = `
      ${mediaHtml}
      <div class="featured-details">
        <h4 class="featured-title">${item.title}</h4>
        <span class="featured-sub mono">${catName} · Tap to expand</span>
      </div>
    `;

    wrap.addEventListener("click", () => openLb(plIndex));

    if (isVideo) {
      const vid = wrap.querySelector("video");
      wrap.addEventListener("mouseenter", () => {
        if (!vid.src && vid.dataset.src) vid.src = vid.dataset.src;
        vid.play().catch(() => {});
      });
      wrap.addEventListener("mouseleave", () => {
        vid.pause();
      });
    }

    return wrap;
  }

  // POPULATE SECTION 3: MOTION GRAPHICS
  const motionFeatured = $("#motionFeatured");
  const motionGrid = $("#motionGrid");
  if (motionFeatured) {
    motionFeatured.appendChild(createFeaturedCard(C.motionGraphics.featured, "Motion Graphic"));
  }
  if (motionGrid) {
    C.motionGraphics.items.forEach(it => {
      motionGrid.appendChild(createMediaCard(it, "Motion Graphic"));
    });
  }

  // POPULATE SECTION 4: SHORT CONTENT
  const shortFeatured = $("#shortFeatured");
  const shortGrid = $("#shortGrid");
  if (shortFeatured) {
    shortFeatured.appendChild(createFeaturedCard(C.shortContent.featured, "Short Content"));
  }
  if (shortGrid) {
    C.shortContent.items.forEach(it => {
      shortGrid.appendChild(createMediaCard(it, "Short Content"));
    });
  }

  // POPULATE SECTION 5: UGC VIDEO ADS
  const ugcFeatured = $("#ugcFeatured");
  const ugcGrid = $("#ugcGrid");
  if (ugcFeatured && C.ugcAds) {
    ugcFeatured.appendChild(createFeaturedCard(C.ugcAds.featured, "UGC Ads"));
  }
  if (ugcGrid && C.ugcAds) {
    C.ugcAds.items.forEach(it => {
      ugcGrid.appendChild(createMediaCard(it, "UGC Ads"));
    });
  }

  // POPULATE SECTION 6: POSTER DESIGN
  const posterFeatured = $("#posterFeatured");
  const posterGrid = $("#posterGrid");
  if (posterFeatured && C.posters) {
    posterFeatured.appendChild(createFeaturedCard(C.posters.featured, "Poster Design"));
  }
  if (posterGrid && C.posters) {
    C.posters.items.forEach(it => {
      posterGrid.appendChild(createMediaCard(it, "Poster Design"));
    });
  }

  // POPULATE SECTION 7: UI/UX & APPS
  const uiuxFeatured = $("#uiuxFeatured");
  const uiuxGrid = $("#uiuxGrid");
  if (uiuxFeatured) {
    const feat = C.uiux.featured;
    uiuxFeatured.innerHTML = `
      <a href="${feat.link}" target="_blank" rel="noopener" class="featured-showcase-card uiux-featured-link">
        <div class="featured-media" style="aspect-ratio: ${ratio(feat.aspect)}">
          <img src="${feat.thumb}" alt="${feat.title}" loading="lazy">
          <span class="featured-badge mono">${feat.badge}</span>
        </div>
        <div class="featured-details">
          <div class="uiux-feat-top">
            <h4 class="featured-title">${feat.title}</h4>
            <span class="featured-arrow mono">View Case Study ↗</span>
          </div>
          <p class="uiux-feat-desc">${feat.desc}</p>
        </div>
      </a>
    `;
  }
  if (uiuxGrid) {
    C.uiux.items.forEach(item => {
      const card = document.createElement("a");
      card.className = "uiux-card" + (item.type === "app" ? " app-card" : "");
      card.href = item.link;
      card.target = "_blank";
      card.rel = "noopener";

      let thumbHtml = "";
      if (item.type === "app" && item.logo) {
        thumbHtml = `
          <div class="uiux-thumb-wrap app-logo-preview">
            <div class="app-logo-box">
              <img src="${item.logo}" alt="${item.title} Logo" loading="lazy">
            </div>
            <span class="uiux-badge mono">${item.source}</span>
          </div>
        `;
      } else {
        thumbHtml = `
          <div class="uiux-thumb-wrap">
            <img src="${item.thumb}" alt="${item.title}" loading="lazy">
            <span class="uiux-badge mono">${item.source}</span>
          </div>
        `;
      }

      card.innerHTML = `
        ${thumbHtml}
        <div class="uiux-info">
          <div class="uiux-title-row">
            <h4 class="uiux-title">${item.title}</h4>
            <span class="uiux-arrow">↗</span>
          </div>
          <span class="uiux-role mono">${item.role}</span>
          <p class="uiux-line">${item.line}</p>
        </div>
      `;
      uiuxGrid.appendChild(card);
    });
  }

  // Reveal animation on scroll
  const reveals = $$(".about-hero-grid, .exp-layout, .reel-container, .section-banner, .sec-intro-split, .cards-grid, .contact-card");
  reveals.forEach(el => el.classList.add("rv"));
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => io.observe(el));

  // Active section scroll spy
  const sections = $$("section[id]");
  const navLinks = $$(".nav a, .sheet nav a");
  const spyIo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          const href = a.getAttribute("href");
          if (href === `#${id}`) a.classList.add("active");
          else a.classList.remove("active");
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => spyIo.observe(s));

  // Custom Cursor
  const curEl = $("#cursor");
  if (curEl && matchMedia("(hover:hover) and (pointer:fine)").matches) {
    addEventListener("mousemove", e => {
      curEl.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    }, { passive: true });

    document.addEventListener("mouseover", e => {
      const t = e.target.closest("[data-cursor], .media-card, .featured-showcase-card, .btn-primary, .mail-display");
      curEl.classList.toggle("big", !!t);
      if (t) {
        const text = t.dataset.cursor || (t.classList.contains("media-card") ? "View" : "Open");
        curEl.querySelector("span").textContent = text;
      }
    });
  }
})();
