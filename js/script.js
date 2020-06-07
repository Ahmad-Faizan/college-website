let header = document.getElementsByClassName("site-header");
const resizeLogo = () => {
    document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
        ? header[0].classList.add("sticky")
        : header[0].classList.remove("sticky");
};

window.onscroll = function () {
    resizeLogo();
};
