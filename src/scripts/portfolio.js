document.addEventListener('DOMContentLoaded', () => {
  const PortfolioModule = (function () {
    function openModal(id) {
      const modal = document.getElementById(`modal${id}`);
      if (modal) {
        modal.style.display = 'block';
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      } else {
        console.error(`Modal with ID "modal${id}" not found.`);
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(`modal${id}`);
      if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      } else {
        console.error(`Modal with ID "modal${id}" not found.`);
      }
    }

    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        const modalId = e.target.id.replace('modal', '');
        closeModal(modalId);
      }
    });

    return {
      openModal,
      closeModal,
    };
  })();

  // Expose PortfolioModule to global scope for onclick handlers
  window.PortfolioModule = PortfolioModule;

  // Debugging: Log all portfolio cards to ensure they exist
  const portfolioCards = document.querySelectorAll('.group');
  portfolioCards.forEach((card, index) => {
    if (!card.onclick) {
      console.warn(`Portfolio card ${index} has no onclick handler.`);
    }
  });
});