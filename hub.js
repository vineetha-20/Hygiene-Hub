function validateForm() {
    const location = document.getElementById('location').value.trim();
    const type = document.getElementById('type').value;

    if (!location || !type) {
      alert('Please fill out all required fields before submitting the report.');
      return false; 
    }

    alert('Thank you for reporting! We will start working on it soon!!');
    return true;
  }

  
  window.addEventListener('hashchange', function() {
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });
    
    if (location.hash === '#home' || location.hash === '') {
      document.querySelector('.hero').style.display = 'flex';
    } else {
      const target = document.querySelector(location.hash);
      if (target) {
        target.style.display = 'block';
        window.scrollTo(0, 0);
      }
    }
  });