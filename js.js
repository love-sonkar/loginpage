// making variable for inputs

let user = document.querySelector(".user");
let pass = document.querySelector(".pass");
let btn = document.querySelector(".submit");

// user name and pass store in a variable

let userid = "love";
let userpass = "123456";

// success box code start

let msg = document.querySelector(".success-msg");
let close = document.querySelector(".ri-close-line");

msg.style.display = "none";

close.addEventListener("click", () => {
  msg.style.display = "none";
});

// end success box code

// password eye option
let eyeMenu = document.querySelector(".eye");
let eyeOpen = document.querySelector(".ri-eye-fill");
let eyeClose = document.querySelector(".ri-eye-off-fill");

eyeOpen.style.display = "none";

// making a click event for eye function

eyeMenu.addEventListener("click", () => {
  eyeClose.style.display === "block" || eyeOpen.style.display === "none"
    ? ((eyeClose.style.display = "none"),
      (eyeOpen.style.display = "block"),
      (pass.type = "text"))
    : ((eyeClose.style.display = "block"),
      (eyeOpen.style.display = "none"),
      (pass.type = "password"));
});

// scripting start here for validation

btn.addEventListener("click", (e) => {
  let valpass = pass.value;
  let valuser = user.value;
  e.preventDefault();
  if ((valuser === "" && valpass === "") || logIn()) {
    errorColor();
  } else {
  }

  // making function for error code

  function errorColor() {
    let userinput = document.querySelector(".userinput");
    let passinput = document.querySelector(".passinput");
    let usericon = document.querySelector(".ri-user-fill");
    let passicon = document.querySelector(".ri-lock-fill");
    let btn = document.querySelector(".submit");

    userinput.style.borderColor = "red";
    passinput.style.borderColor = "red";
    btn.style.borderColor = "red";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    usericon.style.color = "red";
    passicon.style.color = "red";

    eyeOpen.style.color = "red";
    eyeClose.style.color = "red";
  }

  // end function here

  function logIn() {
    if (valuser != userid || valpass != userpass) {
      errorColor();
      alert("please fill all input");
    } else {
      msg.style.display = "grid";
    }
  }
});
