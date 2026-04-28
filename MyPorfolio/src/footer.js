/**
 * Shared footer component for all pages.
 */

export function renderFooter() {
  const footerContainer = document.getElementById("site-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-transparent border-t border-slate-100 mt-auto dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-12 gap-4">
        <p class="font-body-md text-body-md text-sm text-slate-500 dark:text-slate-400">
          © 2026 GiGi Koneti. Academic Portfolio.
        </p>
        <div class="flex gap-6">
          <a href="https://github.com/GiGiKoneti" target="_blank" rel="noopener noreferrer"
             class="text-slate-400 hover:text-sky-400 transition-colors text-sm font-label-sm text-label-sm">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
             class="text-slate-400 hover:text-sky-400 transition-colors text-sm font-label-sm text-label-sm">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
             class="text-slate-400 hover:text-sky-400 transition-colors text-sm font-label-sm text-label-sm">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  `;
}
