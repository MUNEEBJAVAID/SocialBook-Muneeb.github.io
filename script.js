let settingMenu = document.querySelector(".setting-menu");
let dark_Btn = document.getElementById("dark-btn");

function settingsMenuToogle() {
    settingMenu.classList.toggle("setting-menu-height");
}

dark_Btn.onclick = function () {
    dark_Btn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}