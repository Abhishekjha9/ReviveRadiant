function updateDateTime() {
  const currentDate = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[currentDate.getDay()];

  const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const dateTimeString = `${currentDay}, ${formattedDate}<br>${formattedTime}`;

  document.getElementById('dateTimeContainer').innerHTML = dateTimeString;
}


updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
