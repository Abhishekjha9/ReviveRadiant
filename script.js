function updateDateTime() {
  const currentDate = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[currentDate.getDay()];

  const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Combine date and day on one line, and time on a new line
  const dateTimeString = `${currentDay}, ${formattedDate}<br>${formattedTime}`;

  document.getElementById('dateTimeContainer').innerHTML = dateTimeString;
}

// Call the function initially
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);




let visitCount = 0;

function updateVisitCounter() {
  visitCount++;
  document.getElementById('counter-value').innerText = visitCount;
}

// Call updateVisitCounter when the page loads to increment the count
updateVisitCounter();








function scrollPage() {
  window.scrollBy({
      top: 100, // Adjust the scroll distance as needed
      left: 0,
      behavior: 'smooth'
  });
}












function redirectToAnotherPage() {
  window.location.href = 'skin-care/index.html';
}

function redirectToAnotherPage2() {
  window.location.href = 'recipe-page/index.html';
}

function redirectToAnotherPage3() {
  window.location.href = 'fashion/fashion.html';
}
function redirectToAnotherPage4() {
  window.location.href = 'workouts/index.html';
}