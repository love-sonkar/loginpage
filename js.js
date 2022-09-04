let user = document.querySelector(".user");
let pass = document.querySelector(".pass");
let btn = document.querySelector(".submit");
let msg = document.querySelector(".success-msg");
let close = document.querySelector(".ri-close-line");

msg.style.display = "none";

close.addEventListener("click", () => {
  msg.style.display = "none";
});

let userid = "love";
let userpass = "123456";

btn.addEventListener("click", (e) => {
  let valpass = pass.value;
  let valuser = user.value;
  e.preventDefault();
  if ((valuser === "" && valpass === "") || logIn()) {
    errorColor();
  } else {
  }

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
  }

  function logIn() {
    if (valuser != userid || valpass != userpass) {
      errorColor();
      alert("please fill all input");
    } else {
      msg.style.display = "grid";
    }
  }
});
