function confirm() {
  document.getElementById('confirm').classList.toggle("show");
  setTimeout(() => {
    document.getElementById("confirm").classList.remove('show');
    const email = document.getElementById('email'); 
    console.log(email.value);
    email.value = '';
    }, 1500);
}
function validateForm() {
  var x = document.forms["Form"]["email"].value;
  if (x == "") {
    alert("Non Email Found");
    return false;
  } else {confirm()} 
}

var form = document.getElementById("Form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);