document.addEventListener('DOMContentLoaded', function () {
  // Tab switching functionality for car detail pages
  const tabButtons = document.querySelectorAll('.tab-button');
  if (tabButtons.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => content.style.display = 'none');
        // Activate the clicked tab button
        this.classList.add('active');
        // Show the associated tab content
        const tabToShow = this.getAttribute('data-tab');
        document.getElementById(tabToShow).style.display = 'block';
      });
    });
  }

  // Search form redirection for hero section
  const carSearchForm = document.getElementById('carSearchForm');
  const carSelect = document.getElementById('cars');
  if (carSearchForm) {
    carSearchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const selectedCar = carSelect.value;
      if (selectedCar) {
        window.location.href = selectedCar;
      } else {
        alert('Please select a car to search.');
      }
    });
  }
});
