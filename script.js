var vehicle = ["BMW", "VW", "Toyota", "Kia", "Opel"]
const display = document.getElementById("display");

for (let i = 0; i < vehicle.length ; i++ ) {

display.innerHTML += "<li>" + vehicle[i] + "</li>"
}