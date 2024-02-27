const balloonContainer = document.getElementById("balloon-container");

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(10) + 10; // Increased the duration to 10-20 seconds
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
}

function getRandomQuote() {
    const quotes = [
      "Grow through what you go through.",

      "Kind heart. Fierce mind. Brave spirit.",

       "Radiate good vibes only.",

       "Collect moments, not things.",

       "Love more, worry less.",

       "Joy in the journey.",

       "Be a voice, not an echo.",

       "Less perfection, more authenticity.",

       "Chin up, buttercup.",

       "Stay curious, stay silly.",
    ];
    const randomIndex = random(quotes.length);
    return quotes[randomIndex];
}

function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();

        var quoteSpan = document.createElement("span");
        quoteSpan.className = "quote-text";
        quoteSpan.textContent = getRandomQuote();

        balloon.appendChild(quoteSpan);
        balloonContainer.append(balloon);
    }
}

function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
        balloonContainer.remove();
    }, 500);
}

window.addEventListener("load", () => {
    createBalloons(10);
});

window.addEventListener("click", () => {
    removeBalloons();
});








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
