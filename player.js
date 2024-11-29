// Select video and timestamp elements
const video = document.getElementById('myVideo');
const timestamp = document.getElementById('timestamp');

// Select control buttons
const playButton = document.querySelector('.fa-play');
const forwardButton = document.querySelector('.fa-forward');

// Event listener to update timestamp as video progresses
video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime; // Get current time of the video
  const duration = video.duration;      // Get total duration of the video

  // Format the current time and total duration
  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = duration ? formatTime(duration) : "00:00:00";

  // Update the timestamp display
  timestamp.textContent = `${formattedCurrentTime} / ${formattedDuration}`;
});

// Format time function (converts seconds to HH:MM:SS)
function formatTime(time) {
  const hours = Math.floor(time / 3600);                 // Calculate hours
  const minutes = Math.floor((time % 3600) / 60);       // Calculate minutes
  const seconds = Math.floor(time % 60);                // Calculate seconds

  // Format as HH:MM:SS, padding single digits with leading zeros
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Ensure total duration is displayed on video metadata load
video.addEventListener('loadedmetadata', () => {
  const duration = video.duration;
  const formattedDuration = duration ? formatTime(duration) : "00:00:00";
  timestamp.textContent = `00:00:00 / ${formattedDuration}`;
});

// Play/Pause button functionality
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.classList.replace('fa-play', 'fa-pause');  // Change icon to pause
  } else {
    video.pause();
    playButton.classList.replace('fa-pause', 'fa-play');  // Change icon to play
  }
});

// Forward button functionality (skips forward by 10 seconds)
forwardButton.addEventListener('click', () => {
  video.currentTime += 10;  // Skip forward by 10 seconds
});
