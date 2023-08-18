const name = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const cpf = document.querySelector("#cpf");
const spanName = document.querySelector(".spanName");
const spanCpf = document.querySelector(".spanCpf");
const spanEmail = document.querySelector(".spanEmail");
const spanAge = document.querySelector(".spanAge");
const buttonSend = document.querySelector(".ButtonSend");

function validateInputName() {
  //////////////////Input Name///////////////////////////////////////////////////////
  if (!name.value) {
    spanName.innerHTML = "O campo nome não pode estar vazio!";
    spanName.style.display = "block";
    name.focus();
  } else if (name.value.length >= 1 && name.value.length < 3) {
    spanName.innerHTML = "O campo nome não pode ter menos de 3 caracteres!!";
    spanName.style.display = "block";
    name.focus();
  } else if (containsSpecialChars(name.value) == true) {
    spanName.innerHTML = "O campo nome não pode ter caracteres especiais";
    spanName.style.display = "block";
    name.focus();
  } else {
    spanName.innerHTML = "";
    spanName.style.display = "none";
  }
}

function validateInputAge() {
  ////////////////// Input Age ///////////////////////////////////////////////////////
  if (!age.value) {
    spanAge.innerHTML = "O campo Idade está vazio!";
    spanAge.style.display = "block";
    age.focus();
  }
}

function validateInputEmail() {
  ////////////////// Input Email ///////////////////////////////////////////////////////
  if (!email.value) {
    spanEmail.innerHTML = "O campo Email está vazio!";
    spanEmail.style.display = "block";
    email.focus();
  } else if (email.value.length < 4) {
    spanEmail.innerHTML = "O campo Email não pode ter menos de 4 caracteres!";
    spanEmail.style.display = "block";
    email.focus();
  } else if (validateEmail(email.value) == false) {
    spanEmail.innerHTML = "O campo Email não está seguindo o padrão correto.";
    spanEmail.style.display = "block";
    email.focus();
  } else {
    spanEmail.innerHTML = "";
    spanEmail.style.display = "none";
  }
}

function validateInputCpf() {
  ////////////// Input Cpf ///////////////////////////////////////////////////////
  if (!cpf.value) {
    spanCpf.innerHTML = "O campo Cpf não pode estar vazio!";
    spanCpf.style.display = "block";
    cpf.focus();
  } else if (cpf.value.length >= 1 && cpf.value.length < 11) {
    spanCpf.innerHTML = "O campo Cpf não pode ter menos de 11 caracteres!";
    spanCpf.style.display = "block";
    cpf.focus();
  } else {
    spanCpf.innerHTML = "";
    spanCpf.style.display = "none";
  }
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function validateEmail(str) {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(str);
}

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('enviou!')
});

name.addEventListener("blur", () => {
  validateInputName();
});

age.addEventListener("blur", () => {
  validateInputAge();
});

email.addEventListener("blur", () => {
  validateInputEmail();
});

cpf.addEventListener("blur", () => {
  validateInputCpf();
});
