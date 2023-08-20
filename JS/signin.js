
let btnSubmit = document.querySelector('.submit');
let errorMessage = document.getElementById('error-message');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  // Retrieve the latest values of user and pass during form submission
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  var userLocal = localStorage.getItem("user");
  var passLocal = localStorage.getItem("passwords");

  console.log(userLocal, passLocal);
  console.log(user, pass);

  if (user === userLocal && pass === passLocal) {
    window.location.href = "../HTML/index-person.html";
  } else {
    errorMessage.textContent = "Thông tin đăng nhập không đúng.";
  }
});
function changeTypePassword() {
  let password = document.getElementById('password');
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

