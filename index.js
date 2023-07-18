const pwd = document.getElementById("pwd");
const confirmPwd = document.getElementById("confirm-pwd");

confirmPwd.addEventListener("input", () => {
  const password = pwd.value;
  const confirmPassword = confirmPwd.value;
  if(password !== confirmPassword){
    confirmPwd.setCustomValidity("Passwords do not match");
  }else {
    confirmPwd.setCustomValidity("");
  }
});

