var toggleButton = document.getElementById("nav-bars")
var mobileNavMenu = document.getElementById("bottom-mobile-nav")


toggleButton.addEventListener("click",()=>{
    mobileNavMenu.classList.toggle("hide");
    
    if (mobileNavMenu.classList.contains("hide")){
        toggleButton.style.color="rgba(255, 255, 255, 0.87)"
    } else {
        toggleButton.style.color="white"
    }
})