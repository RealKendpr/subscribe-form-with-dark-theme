const confirmBox = document.getElementsByClassName("confirm")[0];
const denyBox = document.getElementsByClassName("denied")[0];
const emailInput = document.getElementById("email");

let form = document.forms["form"]["email"];

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function confirm() {
  if (emailInput.value.match(emailRegex)) {
    confirmBox.classList.add("show");

    setTimeout(() => {
      confirmBox.remove("show");
      location.reload();
    }, 1500);
  } else {
    deny();
  }

  // confirmBox.classList.add("show");
  // setTimeout(() => {
  //   confirmBox.remove("show");
  //   location.reload();
  // }, 1500);
}

function deny() {
  denyBox.classList.add("show");

  setTimeout(() => {
    denyBox.remove("show");
    location.reload();
  }, 1500);
}

function validateForm() {
  if (form.value == "") {
    // alert("No Email Found");
    deny();
    return false;
  } else {
    confirm();
    emailInput.value = "";
  }
}

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
