// Marwee for reviews section
function initMarquee() {
  const reviewsMarquee = document.getElementById("reviewsMarquee");
  let reviewGroups, reviewPositions, reviewAnimationFrame;
  const reviewSpeed = 0.5;

  function setupMarquee() {
    if (!reviewsMarquee) return;
    reviewGroups = Array.from(reviewsMarquee.children);
    reviewPositions = reviewGroups.map(() => 0);

    reviewGroups.forEach((group, index) => {
      group.style.position = "absolute";
      group.style.left = `${index * group.offsetWidth}px`;
      group.style.transform = "translateY(-50%)";
    });
  }

  function animateReviewsMarquee() {
    if (!reviewGroups) return;
    reviewPositions = reviewPositions.map((pos) => pos + reviewSpeed);

    reviewGroups.forEach((group, index) => {
      const groupWidth = group.offsetWidth;
      const groupLeft = parseFloat(group.style.left) + reviewPositions[index];

      if (groupLeft >= window.innerWidth) {
        const leftmostPosition = Math.min(
          ...reviewGroups.map(
            (g, i) => parseFloat(g.style.left) + reviewPositions[i]
          )
        );
        group.style.left = `${leftmostPosition - groupWidth}px`;
        reviewPositions[index] = 0;
      } else {
        group.style.transform = `translateX(${reviewPositions[index]}px) translateY(-50%)`;
      }
    });

    reviewAnimationFrame = requestAnimationFrame(animateReviewsMarquee);
  }

  // Initialize
  function init() {
    setupMarquee();
    if (reviewsMarquee) {
      animateReviewsMarquee();
      reviewsMarquee.addEventListener("mouseenter", () => {
        cancelAnimationFrame(reviewAnimationFrame);
      });
      reviewsMarquee.addEventListener("mouseleave", animateReviewsMarquee);
    }
  }

  init();
}

// Call initMarquee when the document is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMarquee);
} else {
  initMarquee();
}