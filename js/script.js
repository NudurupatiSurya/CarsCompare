// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
  
    // If no tabs exist on the page, do nothing.
    if (tabButtons.length === 0) return;
  
    tabButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
  
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.style.display = 'none';
        });
  
        // Add active class to clicked button
        this.classList.add('active');
  
        // Show the corresponding tab content
        const tabToShow = this.getAttribute('data-tab');
        document.getElementById(tabToShow).style.display = 'block';
      });
    });
  });
  