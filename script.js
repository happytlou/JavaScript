var people = ["Happy", "Wandile", "Mduduzi", "Hardy", "Lebo", "Tsheiso", "Thandiwe", "Tumi", "Karabo", "Neo", "Lubanzi"]
const display = document.getElementById("display");

for (let i = 0; i < people.length ; i++ ) {

display.innerHTML += "<li>" + people[i] + "</li>"
}