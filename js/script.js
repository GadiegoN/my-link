/* https://github.com/klemeragm/my-links */

var icon = document.getElementById("icon");
var act = document.getElementById("toogle")

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme"); 

if (localData == "dark") {
    icon.src = "./images/day.png";
    document.body.classList.remove("light-theme");
}

else if(localData == "light") {
    icon.src = "./images/night.png";
    document.body.classList.add("light-theme");
}

icon.onclick = function() {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")) {
        icon.src= "./images/night.png";
        localStorage.setItem("theme", "light");
    }
    else{
        icon.src= "./images/day.png";
        localStorage.setItem("theme", "dark");
    }
}