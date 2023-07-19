/* https://github.com/klemeragm/my-links */

var icon = document.getElementById("icon");
var act = document.getElementById("toogle")

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme"); 

if (localData == "dark") {
    icon.src = "./images/sun-dim.png";
    document.body.classList.remove("light-theme");
}

else if(localData == "light") {
    icon.src = "./images/moon-stars.png";
    document.body.classList.add("light-theme");
}

icon.onclick = function() {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")) {
        icon.src= "./images/moon-stars.png";
        localStorage.setItem("theme", "light");
    }
    else{
        icon.src= "./images/sun-dim.png";
        localStorage.setItem("theme", "dark");
    }
}