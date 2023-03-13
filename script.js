function displayValues() {
  let inputName = document.getElementById('inputName')
  localStorage.setItem("Name", inputName.value)

  let inputEmail = document.getElementById('inputEmail')
  localStorage.setItem("Email", inputEmail.value)

  let inputPassword = document.getElementById('inputPassword');
  let inputConfirmPassword = document.getElementById('inputConformPassword');

  let password = inputPassword.value;
  let confirmPassword = inputConfirmPassword.value;

  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  if (password.length < 8) {
      document.getElementById("message").innerHTML = "Password length must be at least 8 characters";
  }
  else if (!regex.test(password)) {
      document.getElementById("message").innerHTML = "Password must contain at least one uppercase letter and one symbol";

  } else if (password !== confirmPassword) {
      document.getElementById("message").innerHTML = "Passwords does not match";

  } else {
      document.getElementById("message").style.display = "none";
      localStorage.setItem("Password", password)
  }

  let inputDate = document.getElementById('inputDate')
  localStorage.setItem("Date", inputDate.value)

  let inputFile = document.getElementById('inputFile')
  localStorage.setItem("File", inputFile.value)

  let inputTime = document.getElementById('inputTime')
  localStorage.setItem("Time", inputTime.value)

  let inputWeek = document.getElementById('inputWeek')
  localStorage.setItem("Week", inputWeek.value)

  let inputColor = document.getElementById('inputColor')
  localStorage.setItem("Color", inputColor.value)

  let inputNumber = document.getElementById('inputNumber')
  localStorage.setItem("Number", inputNumber.value)

  let inputRange = document.getElementById('inputRange')
  localStorage.setItem("Range", inputRange.value)

  let inputUrl = document.getElementById('inputUrl')
  localStorage.setItem("Url", inputUrl.value)

  let inputTel = document.getElementById("inputTel")
  localStorage.setItem("Phone Number", inputTel.value)

}
function check() {
  var storedEmail = localStorage.getItem('Email');
  var storedPw = localStorage.getItem('Password');

  var userName = document.getElementById('userEmail');
  var userPw = document.getElementById('userPassword');

  if (userEmail.value == storedEmail && userPassword.value == storedPw) {

      window.location.href="loginpage.html";
  } else {

      alert('Error on login');
  }
}
