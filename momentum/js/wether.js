const API_KEY = '4c2a8ef9cf1d7341adfe865953bc3afb';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const part = 'current';
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${API_KEY}`
    fetch(url);
}
function onGeoErr(){
    alert("Can't find you. No wether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

