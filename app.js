const navBar = document.querySelector(".mobile-nav");

function showNav() {

    navBar.style.right = "0px";
    navBar.style.display = "block";
}

function hideNav() {
    navBar.style.right = "-300px";
    navBar.style.display = "none";
}
// navBars.addEventListener("click", function(){

// })