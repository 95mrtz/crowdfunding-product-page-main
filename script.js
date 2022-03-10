const btnBookmark = document.getElementById("btn-bookmark");
const imgBookmark = document.getElementById("img-bookmark");
const btnTextBookmark = document.getElementById("btn-text-bokmark");
const btnReward25 = document.getElementById("btn-reward-25");
const btnReward75 = document.getElementById("btn-reward-75");
const modal = document.getElementById("modal");
const body = document.getElementById("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
const closeModal = document.getElementById("img-close");
const titleNoReward = document.getElementById("title-noReward");
const titleBamboo = document.getElementById("title-bamboo");
const titleBlackEdition = document.getElementById("title-blackEdition");
const inputRadio25 = document.getElementById("input-radio25");
const inputRadio75 = document.getElementById("input-radio75");
const pledge25 = document.getElementById("pledge25");
const pledge75 = document.getElementById("pledge75");
const input25 = document.getElementById("input-pledge25");
const input75 = document.getElementById("input-pledge75");
const inpuAlert25 = document.getElementById("alert-pledge-25");
const inpuAlert75 = document.getElementById("alert-pledge-75");
const btnContinue25 = document.getElementById("btn-continue-25");
const btnContinue75 = document.getElementById("btn-continue-75");
const modalSuccessConfimation = document.getElementById(
  "modal-success-confimation"
);
const btnModalSuccess = document.getElementById("btn-modal-success");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarFloating = document.getElementById("navbar-floating");

btnBookmark.addEventListener("click", () => {
  if (btnBookmark.value === "active") {
    btnBookmark.classList.remove("active");
    imgBookmark.classList.remove("img-active");
    btnBookmark.value = "desactive";
    btnTextBookmark.innerHTML = "Bookmark";
  } else {
    btnBookmark.classList.add("active");
    imgBookmark.classList.add("img-active");
    btnBookmark.value = "active";
    btnTextBookmark.innerHTML = "Bookmarked";
  }
});

btnReward25.addEventListener("click", () => {
  body.classList.remove("body");
  body.classList.add("body-modal");
  header.style.opacity = "0.2";
  main.style.opacity = "0.2";
  modal.classList.remove("modal");
  modal.classList.add("modal-active");
});

btnReward75.addEventListener("click", () => {
  body.classList.remove("body");
  body.classList.add("body-modal");
  header.style.opacity = "0.2";
  main.style.opacity = "0.2";
  modal.classList.remove("modal");
  modal.classList.add("modal-active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  modal.classList.add("modal");
  header.style.opacity = "1";
  main.style.opacity = "1";
  body.classList.remove("body-modal");
  body.classList.add("body");
});

titleNoReward.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  modal.classList.add("modal");
  modalSuccessConfimation.classList.remove("modal-success-confimation");
  modalSuccessConfimation.classList.add("modal-success-confimation-active");
});

titleBamboo.addEventListener("click", () => {
  pledge25.classList.remove("div-pledge");
  pledge75.classList.add("div-pledge");
  inputRadio25.checked = true;
  inputRadio75.checked = false;
  titleBamboo.style.color = "hsl(176, 50%, 47%)";
  titleBlackEdition.style.color = "hsl(0, 0%, 48%)";
});

titleBlackEdition.addEventListener("click", () => {
  pledge75.classList.remove("div-pledge");
  pledge25.classList.add("div-pledge");
  inputRadio75.checked = true;
  inputRadio25.checked = false;
  titleBlackEdition.style.color = "hsl(176, 50%, 47%)";
  titleBamboo.style.color = "hsl(0, 0%, 48%)";
});

input25.addEventListener("change", () => {
  console.log(inpuAlert25);
  console.log(input25.value);
  if (input25.value < 25) {
    inpuAlert25.classList.remove("alert-pledge");
    inpuAlert25.classList.add("alert-pledge-active");
    btnContinue25.disabled = true;
  } else {
    inpuAlert25.classList.remove("alert-pledge-active");
    inpuAlert25.classList.add("alert-pledge");
    btnContinue25.disabled = false;
  }
});

input75.addEventListener("change", () => {
  console.log(input75.value);
  console.log(inpuAlert75);
  if (input75.value < 75) {
    inpuAlert75.classList.remove("alert-pledge");
    inpuAlert75.classList.add("alert-pledge-active");
    btnContinue75.disabled = true;
  } else {
    inpuAlert75.classList.remove("alert-pledge-active");
    inpuAlert75.classList.add("alert-pledge");
    btnContinue75.disabled = false;
  }
});

btnContinue25.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  modal.classList.add("modal");
  modalSuccessConfimation.classList.remove("modal-success-confimation");
  modalSuccessConfimation.classList.add("modal-success-confimation-active");
});

btnContinue75.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  modal.classList.add("modal");
  modalSuccessConfimation.classList.remove("modal-success-confimation");
  modalSuccessConfimation.classList.add("modal-success-confimation-active");
});

btnModalSuccess.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  modal.classList.add("modal");
  modalSuccessConfimation.classList.add("modal-success-confimation");
  modalSuccessConfimation.classList.remove("modal-success-confimation-active");
  header.style.opacity = "1";
  main.style.opacity = "1";
  body.classList.remove("body-modal");
  body.classList.add("body");
});

/* mobile functions */

hamburgerMenu.addEventListener("click", () => {
  console.log(`este el valor que decis ${hamburgerMenu.value}`);
  if (hamburgerMenu.value == 1) {
    console.log("holis");
    hamburgerMenu.classList.remove("navbar-list");
    hamburgerMenu.classList.add("close-menu");
    hamburgerMenu.value = 0;
    body.classList.remove("body");
    body.classList.add("body-modal");
    header.style.opacity = "0.2";
    main.style.opacity = "0.2";
    navbarFloating.classList.remove("navbar-floating");
    navbarFloating.classList.add("navbar-floating-active");
  } else {
    console.log("cambio");

    hamburgerMenu.classList.remove("close-menu");
    hamburgerMenu.classList.add("navbar-list");
    hamburgerMenu.value = 1;
    header.style.opacity = "1";
    main.style.opacity = "1";
    body.classList.remove("body-modal");
    body.classList.add("body");
    navbarFloating.classList.remove("navbar-floating-active");
    navbarFloating.classList.add("navbar-floating");
  }
});
