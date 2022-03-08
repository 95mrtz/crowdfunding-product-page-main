const btnBookmark = document.getElementById("btn-bookmark");
const imgBookmark = document.getElementById("img-bookmark");
const btnTextBookmark = document.getElementById("btn-text-bokmark")
const btnReward25 = document.getElementById("btn-reward-25")
const btnReward75 = document.getElementById("btn-reward-75")
const modal = document.getElementById("modal");
const body = document.getElementById("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
const closeModal = document.getElementById("img-close");
const titleNoReward = document.getElementById("title-noReward");
const titleBamboo = document.getElementById("title-bamboo");
const titleBlackEdition = document.getElementById("title-blackEdition");
const pledge25 = document.getElementById("pledge25");
const pledge75 = document.getElementById("pledge75");


btnBookmark.addEventListener("click",  () => {
    if(btnBookmark.value === "active"){
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
})


btnReward25.addEventListener("click", () => {
    body.classList.remove("body");
    body.classList.add("body-modal")
    header.style.opacity = "0.2";
    main.style.opacity = "0.2";
    modal.classList.remove("modal");
    modal.classList.add("modal-active");
})

btnReward75.addEventListener("click", () => {
    body.classList.remove("body");
    body.classList.add("body-modal")
    header.style.opacity = "0.2";
    main.style.opacity = "0.2";
    modal.classList.remove("modal");
    modal.classList.add("modal-active");
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-active");
    modal.classList.add("modal");
    header.style.opacity = "1";
    main.style.opacity = "1";
    body.classList.remove("body-modal");
    body.classList.add("body");

})

titleNoReward.addEventListener("click", () => {
    modal.classList.remove("modal-active");
    modal.classList.add("modal");
    header.style.opacity = "1";
    main.style.opacity = "1";
    body.classList.remove("body-modal");
    body.classList.add("body");
})

titleBamboo.addEventListener("click", () => {
    pledge25.classList.remove("div-pledge");
    pledge75.classList.add("div-pledge");
})

titleBlackEdition.addEventListener("click", () => {
    pledge75.classList.remove("div-pledge");
    pledge25.classList.add("div-pledge");
})