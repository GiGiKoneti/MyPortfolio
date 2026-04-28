import "./styles/index.css";
import { renderNav } from "./nav.js";
import { renderFooter } from "./footer.js";
import { initBackground } from "./background.js";

// Determine active page from data attribute on body
const activePageId = document.body.dataset.page || "home";

// Initialize components
initBackground();
renderNav(activePageId);
renderFooter();

// Enable drag-to-scroll and navigation for horizontal timeline
const timeline = document.getElementById('career-timeline');
const nextBtn = document.getElementById('timeline-next');
const prevBtn = document.getElementById('timeline-prev');

if (timeline) {
  let isDown = false;
  let startX;
  let scrollLeft;
  const itemWidth = 320 + 32; // card width + gap (8 * 4 = 32)

  // Arrow Navigation: Move by exactly one block
  nextBtn?.addEventListener('click', () => {
    timeline.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });
  prevBtn?.addEventListener('click', () => {
    timeline.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });

  // Auto-Selection Logic: Select the item closest to the center
  const updateSelection = () => {
    const items = timeline.querySelectorAll('.milestone-item');
    const containerCenter = timeline.scrollLeft + timeline.offsetWidth / 2;
    
    let closestItem = null;
    let minDistance = Infinity;

    items.forEach(item => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestItem = item;
      }
    });

    items.forEach(i => i.classList.remove('selected'));
    closestItem?.classList.add('selected');
  };

  timeline.addEventListener('scroll', updateSelection);
  // Initial selection
  setTimeout(updateSelection, 100);

  // Drag to scroll
  timeline.addEventListener('mousedown', (e) => {
    isDown = true;
    timeline.classList.add('active');
    startX = e.pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
  });
  timeline.addEventListener('mouseleave', () => isDown = false);
  timeline.addEventListener('mouseup', () => isDown = false);
  timeline.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - timeline.offsetLeft;
    const walk = (x - startX) * 2;
    timeline.scrollLeft = scrollLeft - walk;
  });
}
