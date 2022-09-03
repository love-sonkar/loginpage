let user = document.querySelector(".user");
let pass = document.querySelector(".pass");
let btn = document.querySelector(".submit");

btn.addEventListener("click", (e) => {
  let passuser = pass.value;
  let valuser = user.value;
  e.preventDefault();
  if (valuser === "" || passuser === "") {
    alert("please fill all the inputs");
  } else {
    alert("you can go now");
  }
});
