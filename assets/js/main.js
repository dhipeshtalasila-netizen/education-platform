document.addEventListener('DOMContentLoaded', function () {
  const yearNode = document.querySelector('[data-current-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const demoLogin = document.getElementById('loginForm');
  if (demoLogin) {
    demoLogin.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('email');
      if (email && email.value) {
        localStorage.setItem('studentEmail', email.value.trim());
      }
      localStorage.setItem('studentName', 'Student');

      const loginMessage = document.getElementById('loginMessage');
      if (loginMessage) {
        loginMessage.style.display = 'block';
      }

      setTimeout(function () {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  const signupLink = document.querySelector('a[href="#"]');
  if (signupLink && /create account/i.test(signupLink.textContent)) {
    signupLink.href = 'signup.html';
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const message = document.getElementById('formMessage');
      if (message) {
        message.style.display = 'block';
      }
      contactForm.reset();
    });
  }
});
