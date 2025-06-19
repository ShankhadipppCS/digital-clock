// Select elements
const clockElement = document.getElementById('clock');
const formatToggle = document.getElementById('formatToggle');
const themeToggle = document.getElementById('themeToggle');

// Initialize state variables
let is24HourFormat = true;

// Function to update the time
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Handle 12-hour format
  let period = '';
  if (!is24HourFormat) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  }

  // Format time to HH:MM:SS
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;

  clockElement.textContent = formattedTime;
}

// Function to toggle between 12-hour and 24-hour formats
formatToggle.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  formatToggle.textContent = is24HourFormat ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
});

// Function to toggle between light and dark themes
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('dark')
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
});

// Update the clock every second
setInterval(updateClock, 1000);

// Set the initial state
updateClock();
document.body.classList.add('light'); // Default to light theme
