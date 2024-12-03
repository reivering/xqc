// JavaScript for Carousel Functionality

// Select all carousels on the page
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track'); // The track that holds all cards
  const leftButton = carousel.querySelector('.carousel-button.left'); // Left navigation button
  const rightButton = carousel.querySelector('.carousel-button.right'); // Right navigation button

  // Set up default index and calculate slide width dynamically
  let currentIndex = 0;
  const slideWidth = track.querySelector('.carousel-card').clientWidth + 20; // Card width + gap

  // Event listener for left button
  leftButton.addEventListener('click', () => {
    // Prevent index from going below 0
    currentIndex = Math.max(currentIndex - 1, 0);
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });

  // Event listener for right button
  rightButton.addEventListener('click', () => {
    // Prevent index from going beyond the total number of items
    const maxIndex = track.children.length - 1;
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });

  // Responsive adjustment to maintain proper slide width
  window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute('href').substring(1); // Get the section ID
    const targetSection = document.getElementById(targetId); // Select the target section
    const offsetTop = targetSection.offsetTop - 70; // Adjust for sticky navbar height

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  });
});

// Sticky Header Shadow on Scroll
const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    navBar.style.boxShadow = 'none';
  }
});

// Header Carousel Functionality
const headerTrack = document.querySelector('.header-track');
const headerSlides = Array.from(headerTrack.children);
const headerLeftButton = document.querySelector('.header-button.left');
const headerRightButton = document.querySelector('.header-button.right');

let headerIndex = 0;

// Function to update the slide position
function updateHeaderSlide() {
  const slideWidth = headerSlides[0].getBoundingClientRect().width;
  headerTrack.style.transform = `translateX(-${headerIndex * slideWidth}px)`;
}

// Manual navigation
headerLeftButton.addEventListener('click', () => {
  headerIndex = (headerIndex - 1 + headerSlides.length) % headerSlides.length;
  updateHeaderSlide();
});

headerRightButton.addEventListener('click', () => {
  headerIndex = (headerIndex + 1) % headerSlides.length;
  updateHeaderSlide();
});

// Auto slide every 5 seconds
setInterval(() => {
  headerIndex = (headerIndex + 1) % headerSlides.length;
  updateHeaderSlide();
}, 5000);

// Adjust slide position on window resize
window.addEventListener('resize', updateHeaderSlide);

// Search Movies by Image Alt Text
const searchInput = document.getElementById('searchInput');
const movieCards = document.querySelectorAll('.carousel-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  movieCards.forEach((card) => {
    const movieAlt = card.querySelector('img').alt.toLowerCase();
    if (movieAlt.includes(query)) {
      card.style.display = ''; // Show matching cards
    } else {
      card.style.display = 'none'; // Hide non-matching cards
    }
  });
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    menuItems.forEach((menuItem) => menuItem.classList.remove('active'));
    // Add active class to the clicked item
    item.classList.add('active');
  });
});

document.querySelector('.trailer-btn').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=trailer_id', '_blank'); // Replace with trailer URL
});

document.querySelector('.watch-btn').addEventListener('click', () => {
  window.location.href = '/watch-page'; // Replace with your watch page URL
});




