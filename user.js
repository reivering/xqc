document.addEventListener("DOMContentLoaded", () => {
    // Edit Profile Button
    const editProfileBtn = document.getElementById('edit-profile');
    editProfileBtn.addEventListener('click', () => {
      const newName = prompt('Enter your new name:', 'Arch');
      const newEmail = prompt('Enter your new email:', 'arch@example.com');
      
      if (newName && newEmail) {
        // Update profile-info section
        document.querySelector('.profile-info').innerHTML = `
          <p><strong>Name:</strong> ${newName}</p>
          <p><strong>Email:</strong> ${newEmail}</p>
        `;
        // Update header profile
        document.querySelector('.profile h2').textContent = newName;
        document.querySelector('.avatar').textContent = newName.charAt(0).toUpperCase();
      }
    });
  
    // Theme Selection
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', () => {
      const selectedTheme = themeSelect.value;
      document.getElementById('current-theme').textContent = selectedTheme;
  
      // Change theme on body
      if (selectedTheme === 'Light') {
        document.body.style.backgroundColor = "#f5f5f5";
        document.body.style.color = "#000";
      } else {
        document.body.style.backgroundColor = "#141414";
        document.body.style.color = "#fff";
      }
    });
  });
  