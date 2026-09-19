document.addEventListener('DOMContentLoaded', function () {
  const yearNode = document.querySelector('[data-current-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const formMessages = document.querySelectorAll('.notice');
  formMessages.forEach((message) => {
    message.classList.add('is-visible');
  });

  const demoLogin = document.getElementById('loginForm');
  if (demoLogin) {
    demoLogin.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('email');
      if (email && email.value) {
        localStorage.setItem('studentEmail', email.value);
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
});
