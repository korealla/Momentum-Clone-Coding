const API_KEY = "45ac0dd8d23b6663d863e16fddb9327b";

function onGeo0k(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector(".weather span:first-child");
        const weather = document.querySelector(".weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
    alert("Can't Find you.");
}

navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError);