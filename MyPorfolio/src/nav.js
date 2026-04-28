/**
 * Shared navigation component for all pages.
 * Canonical nav: GiGi Koneti | Home · Research · Projects · Blog · Open Source · Podcast · Contact | [CV]
 */

const NAV_ITEMS = [
  { label: "Home", href: "/index.html", id: "home" },
  { label: "Research", href: "/research.html", id: "research" },
  { label: "Projects", href: "/projects.html", id: "projects" },
  { label: "Blog", href: "/blog.html", id: "blog" },
  { label: "Open Source", href: "/open-source.html", id: "open-source" },
  { label: "Courses", href: "/courses.html", id: "courses" },
  { label: "Podcast", href: "/podcast.html", id: "podcast" },
  { label: "Contact", href: "/contact.html", id: "contact" },
];

export function renderNav(activeId = "home") {
  const navContainer = document.getElementById("site-nav");
  if (!navContainer) return;

  const desktopLinks = NAV_ITEMS.map((item) => {
    const isActive = item.id === activeId;
    return `<a href="${item.href}" class="${isActive ? "nav-link-active" : "nav-link"}">${item.label}</a>`;
  }).join("");

  const mobileLinks = NAV_ITEMS.map((item) => {
    const isActive = item.id === activeId;
    return `<a href="${item.href}" class="${isActive ? "nav-link-active" : "nav-link"}" onclick="document.getElementById('mobile-menu').classList.remove('open')">${item.label}</a>`;
  }).join("");

  navContainer.innerHTML = `
    <nav class="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 transition-all duration-300 dark:bg-slate-900/95 dark:border-slate-800">
      <div class="max-w-[1100px] mx-auto flex justify-between items-center px-4 py-4 md:px-6 md:py-6 w-full">
        <a href="/index.html" class="text-xl md:text-2xl font-medium tracking-tight text-slate-900 dark:text-white font-headline-md hover:opacity-80 transition-opacity active:scale-95 transition-transform">
          GiGi Koneti
        </a>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-7">
          ${desktopLinks}
        </div>

        <div class="flex items-center gap-4">
          <!-- Dark Mode Toggle -->
          <button id="dark-mode-toggle" class="p-2 text-slate-500 hover:text-sky-400 dark:text-slate-400 dark:hover:text-sky-300 transition-all active:scale-90" aria-label="Toggle dark mode">
            <svg id="sun-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <svg id="moon-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>

          <!-- CV Button -->
          <a href="/resume.pdf" target="_blank" class="bg-primary-container text-on-primary-fixed font-label-sm text-label-sm px-4 py-2 rounded-lg hover:bg-primary-fixed-dim transition-colors active:scale-95 transition-transform">
            CV
          </a>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="lg:hidden text-slate-900 dark:text-white p-1" aria-label="Open menu">
            <span class="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="mobile-menu">
      <button id="mobile-menu-close" class="absolute top-6 right-6 text-slate-900 dark:text-white" aria-label="Close menu">
        <span class="material-symbols-outlined text-[28px]">close</span>
      </button>
      ${mobileLinks}
      <a href="/resume.pdf" target="_blank" class="bg-primary-container text-on-primary-fixed font-label-sm text-label-sm px-6 py-3 rounded-lg mt-4">
        Download CV
      </a>
    </div>
  `;

  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
  }
  if (menuClose && mobileMenu) {
    menuClose.addEventListener("click", () => mobileMenu.classList.remove("open"));
  }

  // Dark mode toggle logic
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const htmlElement = document.documentElement;

  const updateIcons = (isDark) => {
    if (isDark) {
      sunIcon?.classList.remove("hidden");
      moonIcon?.classList.add("hidden");
    } else {
      sunIcon?.classList.add("hidden");
      moonIcon?.classList.remove("hidden");
    }
  };

  // Initialize from local storage or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add("dark");
    updateIcons(true);
  } else {
    htmlElement.classList.remove("dark");
    updateIcons(false);
  }

  darkModeToggle?.addEventListener("click", () => {
    const isDark = htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcons(isDark);
  });
}
