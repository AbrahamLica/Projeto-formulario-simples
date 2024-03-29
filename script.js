const name = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const cpf = document.querySelector("#cpf");
const spanName = document.querySelector(".spanName");
const spanCpf = document.querySelector(".spanCpf");
const spanEmail = document.querySelector(".spanEmail");
const spanAge = document.querySelector(".spanAge");
const buttonSend = document.querySelector(".ButtonSend");
const select = document.querySelector("#select");
const inputsCheckbox = document.querySelectorAll(".input-checkbox");
/////////////////////////////////////////////////////////////////////////
const containerBackgroundModal = document.querySelector(
  ".containerBackgroundModal"
);
const nameModal = document.querySelector(".nameModal");
const cpfModal = document.querySelector(".cpfModal");
const emailModal = document.querySelector(".emailModal");
const ageModal = document.querySelector(".ageModal");
const professionModal = document.querySelector(".professionModal");
const btnCancel = document.querySelector(".btnCancel");
const btnConfirm = document.querySelector(".btnConfirm");
/////////////////////////////////////////////////////////////////////////
var inputNameValid = false;
var inputAgeValid = false;
var inputEmailValid = false;
var inputCpfValid = false;
var inputSelectOptValid = false;
var invalids = [];

function validateInputName() {
  //////////////////Input Name///////////////////////////////////////////////////////

  if (!name.value) {
    spanName.innerHTML = "O campo nome não pode estar vazio!";
    spanName.style.display = "block";
    inputNameValid = false;
  } else if (name.value.length >= 1 && name.value.length < 3) {
    spanName.innerHTML = "O campo nome não pode ter menos de 3 caracteres!!";
    spanName.style.display = "block";
    inputNameValid = false;
  } else if (containsSpecialChars(name.value) == true) {
    spanName.innerHTML = "O campo nome não pode ter caracteres especiais";
    spanName.style.display = "block";
    inputNameValid = false;
  } else {
    spanName.innerHTML = "";
    spanName.style.display = "none";
    inputNameValid = true;
  }
}

function validateInputAge() {
  ////////////////// Input Age ///////////////////////////////////////////////////////
  if (!age.value) {
    spanAge.innerHTML = "O campo Idade está vazio!";
    spanAge.style.display = "block";
    inputAgeValid = false;
  } else {
    spanAge.innerHTML = "";
    spanAge.style.display = "none";
    inputAgeValid = true;
  }
}

function validateInputEmail() {
  ////////////////// Input Email ///////////////////////////////////////////////////////

  if (!email.value) {
    spanEmail.innerHTML = "O campo Email está vazio!";
    spanEmail.style.display = "block";
    inputEmailValid = false;
  } else if (email.value.length < 6) {
    spanEmail.innerHTML = "O campo Email não pode ter menos de 6 caracteres!";
    spanEmail.style.display = "block";
    inputEmailValid = false;
  } else if (validateEmail(email.value) == false) {
    spanEmail.innerHTML = "O campo Email não está seguindo o padrão correto.";
    spanEmail.style.display = "block";
    inputEmailValid = false;
  } else {
    spanEmail.innerHTML = "";
    spanEmail.style.display = "none";
    inputEmailValid = true;
  }
}

function validateInputCpf() {
  ////////////// Input Cpf ///////////////////////////////////////////////////////

  if (!cpf.value) {
    spanCpf.innerHTML = "O campo Cpf não pode estar vazio!";
    spanCpf.style.display = "block";
    inputCpfValid = false;
  } else if (cpf.value.length >= 1 && cpf.value.length < 11) {
    spanCpf.innerHTML = "O campo Cpf não pode ter menos de 11 caracteres!";
    spanCpf.style.display = "block";
    inputCpfValid = false;
  } else {
    spanCpf.innerHTML = "";
    spanCpf.style.display = "none";
    inputCpfValid = true;
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

  // checar se o dropdown tem alguma opção selecionada
  if (select.selectedIndex == 0) {
    inputSelectOptValid = false;
  } else {
    inputSelectOptValid = true;
  }

  if (!inputNameValid) {
    invalids.push("Nome");
  }
  if (!inputEmailValid) {
    invalids.push("Email");
  }
  if (!inputAgeValid) {
    invalids.push("Idade");
  }
  if (!inputCpfValid) {
    invalids.push("Cpf");
  }
  if (!inputSelectOptValid) {
    invalids.push("Profissão");
  }

  if (
    inputNameValid &&
    inputEmailValid &&
    inputAgeValid &&
    inputCpfValid &&
    inputSelectOptValid
  ) {
    containerBackgroundModal.style.display = "flex";
    document.body.style.overflow = "hidden";

    nameModal.innerHTML = name.value;
    cpfModal.innerHTML = cpf.value;
    emailModal.innerHTML = email.value;
    ageModal.innerHTML = age.value;
    professionModal.innerHTML = select.options[select.selectedIndex].text;
    qualitiesModal.innerHTML = qualities.join(", ");
    // observationsModal.innerHTML =
  } else {
    alert(
      `Os seguintes campos estão vazios ou inválidos: ${invalids.join(", ")}`
    );
  }
});

btnCancel.addEventListener("click", () => {
  containerBackgroundModal.style.display = "none";
  document.body.style.overflow = "visible";
});

btnConfirm.addEventListener("click", () => {
  alert("Seus dados foram enviados com sucesso!");
  window.location.reload();
  window.scrollTo(0, 0);
});

name.addEventListener("blur", () => {
  validateInputName();
});

cpf.addEventListener("blur", () => {
  validateInputCpf();
});

email.addEventListener("blur", () => {
  validateInputEmail();
});

age.addEventListener("blur", () => {
  validateInputAge();
});

name.addEventListener("keyup", () => {
  if (name.value.length > 2) {
    validateInputName();
  }
});

cpf.addEventListener("keyup", () => {
  if (cpf.value.length > 10) {
    validateInputCpf();
  }
});

email.addEventListener("keyup", () => {
  if (email.value.length > 5) {
    validateInputEmail();
  }
});

age.addEventListener("keyup", () => {
  if (age.value.length >= 1) {
    validateInputAge();
    console.log("teste");
  }
});
