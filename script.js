const names = ["Happy", "Wandile", "Mduduzi", "Hardy", "Lebo", "Tsheiso", "Thandiwe", "Tumi", "Karabo", "Neo", "Lubanzi", "Kagiso", "Sithembiso", "Mpho", "Theo"]
const display = document.getElementById("display");

for (let i = 0; i < names.length ; i++ ) {

display.innerHTML += "<li>" + names[i] + "</li>"
}