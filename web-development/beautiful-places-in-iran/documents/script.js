var scrollBar = document.querySelector(".header__indicator");
var goToTop = document.querySelector(".scroll-top");
var stickyHeader = document.querySelector(".header__down");
var body = document.body;
var html = document.documentElement;

function scroll() {
    var scrollPosition = body.scrollTop;
    var documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    var ratio = scrollPosition/documentHeight;

    scrollBar.style.width = (ratio*125) + "%" ;
    scrollBar.style.opacity = 1;

    if (ratio < 0.3) {
        goToTop.style.opacity = 0;
    } else if (ratio >= 0.7) {
        goToTop.style.opacity = 1;
    } else {
        goToTop.style.opacity = ratio;
    }

    if (ratio >= 0.02) {
        stickyHeader.style.opacity = 1;
    } else {
        stickyHeader.style.opacity = ratio;
    }
}

var seeMore = document.getElementById("see-more");
var contentContinue = document.getElementById("content-continue");

function showContentContinue () {
    
    if (contentContinue.style.display==="block") {
        contentContinue.style.display="none";
        seeMore.value="see more";
    } else {
        contentContinue.style.display="block";
        seeMore.value="see less";
    }
}