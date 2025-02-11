const container  = document.getElementById("container");
const imaageOne = document.querySelector(".cat-1");
const imaageTwo = document.querySelector(".cat-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max){
    const randomnumber = Math.floor(Math.random() * (max, min + 1) + min);
    return randomnumber;
}

btnNo.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerwidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnwidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = container.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerwidth / 3){
        newLeft = getRandomNumber(onabort, containerwidth - btnLeft);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imaageOne.classList.add("hide");
    imaageTwo.classList.remove("hide");
});