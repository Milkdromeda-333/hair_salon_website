const navBar = document.querySelector(".mobile-nav");

function showNav() {
    navBar.style.transition = "1s";
    navBar.style.right = "0px";
    navBar.style.display = "block";
    navBar.style.transition = "all 2s";
}

function hideNav() {
    navBar.style.transition = "1s";
    navBar.style.right = "-300px";
    navBar.style.display = "none";
}
// navBars.addEventListener("click", function(){

// })