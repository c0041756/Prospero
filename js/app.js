//IIFE
(function () {
    // start code
    // test to see if javaScript is working
    console.info("javaScript initiated")
    // variables
    var burgerMenu = document.getElementById("burgerMenu");
    var burgerMenuContainer = document.querySelector(".burgerMenuContainer");
    var navBar = document.querySelector("nav");
    var navHeight = navBar.offsetHeight;
    var navBarStatus = false;

    // mobile menu
    if (window.getComputedStyle(burgerMenuContainer).display !== "none"){
        navBar.style.height ="0px";
        burgerMenu.addEventListener("click", function(){
             if(navBarStatus){
                navBarStatus = false;
                navBar.style.height = "0px";
                burgerMenu.setAttribute("src", "images/burgerMenu.jpg");
             } else {
                 navBarStatus = true;
                 navBar.style.height = navHeight + "px";
                 burgerMenu.setAttribute("src", "images/burgerMenuClose.jpg");
             }
    });
    }
    // end code
}) ();