/**
 * Interactive Dot Grid Background
 * Creates a grid of dots that react to mouse movement.
 */

export function initBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width, height;
  let dots = [];
  const spacing = 12; // Maximum density
  const mouse = { x: -1000, y: -1000 };
  const maxDist = 120; // Slightly more localized for high density

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createDots();
  }

  function createDots() {
    dots = [];
    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        dots.push({
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          radius: 0.7 // Less bold base size
        });
      }
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Determine dot color based on theme
    const isDark = document.documentElement.classList.contains('dark');
    ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)';
    const highlightColor = isDark ? 'rgba(125, 211, 252, 0.5)' : 'rgba(14, 165, 233, 0.4)';

    dots.forEach(dot => {
      const dx = mouse.x - dot.baseX;
      const dy = mouse.y - dot.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      let radius = 0.7; 
      let x = dot.baseX;
      let y = dot.baseY;

      if (dist < maxDist) {
        const ratio = 1 - dist / maxDist;
        radius = 0.7 + ratio * 3.0;
        
        const angle = Math.atan2(dy, dx);
        const push = ratio * 10; 
        x -= Math.cos(angle) * push;
        y -= Math.sin(angle) * push;
        
        // Vivid Sky-Blue for interaction
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.9)' : 'rgba(14, 165, 233, 0.8)'; 
      } else {
        // Clean White/Black for base grid
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.18)'; 
      }

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  resize();
  animate();
}
