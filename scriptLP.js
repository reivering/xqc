const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track'); 
  const leftButton = carousel.querySelector('.carousel-button.left'); 
  const rightButton = carousel.querySelector('.carousel-button.right'); 

  let currentIndex = 0;
  const slideWidth = track.querySelector('.carousel-card').clientWidth + 20; 

  leftButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });

  
  rightButton.addEventListener('click', () => {
    const maxIndex = track.children.length - 1;
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });

  window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId); 
    const offsetTop = targetSection.offsetTop - 70; 

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  });
});

const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    navBar.style.boxShadow = 'none';
  }
});


const headerTrack = document.querySelector('.header-track');
const headerSlides = Array.from(headerTrack.children);
const headerLeftButton = document.querySelector('.header-button.left');
const headerRightButton = document.querySelector('.header-button.right');

let headerIndex = 0;


function updateHeaderSlide() {
  const slideWidth = headerSlides[0].getBoundingClientRect().width;
  headerTrack.style.transform = `translateX(-${headerIndex * slideWidth}px)`;
}

headerLeftButton.addEventListener('click', () => {
  headerIndex = (headerIndex - 1 + headerSlides.length) % headerSlides.length;
  updateHeaderSlide();
});

headerRightButton.addEventListener('click', () => {
  headerIndex = (headerIndex + 1) % headerSlides.length;
  updateHeaderSlide();
});


setInterval(() => {
  headerIndex = (headerIndex + 1) % headerSlides.length;
  updateHeaderSlide();
}, 5000);


window.addEventListener('resize', updateHeaderSlide);


const searchInput = document.getElementById('searchInput');
const movieCards = document.querySelectorAll('.carousel-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  movieCards.forEach((card) => {
    const movieAlt = card.querySelector('img').alt.toLowerCase();
    if (movieAlt.includes(query)) {
      card.style.display = ''; 
    } else {
      card.style.display = 'none'; 
    }
  });
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    
    menuItems.forEach((menuItem) => menuItem.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelector('.trailer-btn').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=trailer_id', '_blank'); 
});

document.querySelector('.watch-btn').addEventListener('click', () => {
  window.location.href = '/watch-page'; 
});




