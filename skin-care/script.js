  document.addEventListener("DOMContentLoaded", function () {
    // Get all radio buttons and corresponding page headings
    const radioButtons = document.querySelectorAll('input[name="page"]');
    const pageHeadings = document.querySelectorAll('.page h2');

    // Function to update headings based on selected page
    function updateHeadings(index) {
      pageHeadings.forEach(function (heading, i) {
        heading.style.display = i === index ? "block" : "none";
      });
    }

    // Add event listener to each radio button
    radioButtons.forEach(function (radioButton, index) {
      radioButton.addEventListener("change", function () {
        const selectedIndex = Array.from(radioButtons).indexOf(radioButton);
        updateHeadings(selectedIndex);
      });
    });

    // Initial update when the page loads
    const initialSelectedIndex = Array.from(radioButtons).indexOf(document.querySelector('input[name="page"]:checked'));
    updateHeadings(initialSelectedIndex);
  });
