const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

    
      const userData = {
        name: name,
        email: email,
        password: password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('Sign up successful!');
    });

    function togglePassword() {
        const passwordField = document.getElementById('password');
        const toggleIcon = document.querySelector('.toggle-password');
  
        if (passwordField.type === 'password') {
          passwordField.type = 'text';
          toggleIcon.classList.remove('fa-eye');
          toggleIcon.classList.add('fa-eye-slash');
        } else {
          passwordField.type = 'password';
          toggleIcon.classList.remove('fa-eye-slash');
          toggleIcon.classList.add('fa-eye');
        }
      }