let signup_form = document.querySelector('.signin_form'); // Corrected selector to match the class in HTML
let errorMessage = document.getElementById('error-message');
signup_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let fname = document.getElementById("nameFields").value;
    let lname = document.getElementById("surNameFields").value;
    let uname = document.getElementById("userFields").value;
    let email = document.getElementById("emailFields").value;
    let pass = document.getElementById("passwordField").value;
    let cpass = document.getElementById("passwordFields").value;

    if (pass === cpass) {
      localStorage.setItem("first name", fname);
      localStorage.setItem("last name", lname);
      localStorage.setItem("user", uname);
      localStorage.setItem("email", email);
      localStorage.setItem("passwords", pass);
      localStorage.setItem("confirm password", cpass);
      window.location.href = "./signin.html";
    } else {
      errorMessage.textContent = "Vui lòng nhập mật khẩu giống nhau!!";
    }
});

function changeTypePassword() {
  let password = document.getElementById('passwordField');
  let eyeIcon = document.querySelector('.fa-regular');
  
  if (password.type === 'text') {
      password.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
  } else {
      password.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
  }
}
function cofirmPassword() {
  let passwords = document.getElementById('passwordFields');
  let eyeIcon = document.querySelector('.fa-solid');
  if (passwords.type === 'text') {
      passwords.type = 'password';
      eyeIcon.classList.remove('fa-lock-open');
      eyeIcon.classList.add('fa-lock');
  } else {
      passwords.type = 'text';
      eyeIcon.classList.remove('fa-lock');
      eyeIcon.classList.add('fa-lock-open');
  }
}