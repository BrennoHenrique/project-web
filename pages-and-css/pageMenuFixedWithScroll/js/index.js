const boxLogoElement = document.querySelector(".box-logo");
const listLogoElement = document.querySelector(".list-logo");
const spanBlockOneElement = document.querySelector(".span-block-one");
const spanBlockTwoElement = document.querySelector(".span-block-two");


window.onscroll = () => {
    if (document.documentElement.scrollTop > 1) {
        boxLogoElement.style.top = "-130px";
    } else {
        boxLogoElement.style.top = "0px";
    

    }
}