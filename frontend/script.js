const cityName = document.getElementById('cityName');
const button = document.querySelector('button');
const searchIcon = document.querySelector('span');
const report = document.getElementsByClassName('output_container');
let skyIcon = new Skycons({ "color": "pink" }); //?weather icon color - https://darkskyapp.github.io/skycons/
let tempreature = document.getElementById('temp');
let snow = document.getElementById('snow');
let rain = document.getElementById('rain');
let wind = document.getElementById('wind.speed');
let responce_city_name = document.getElementsByClassName('responce_city');
console.log(responce_city_name);


//!set default picture 
// skyIcon.set(document.getElementById("icon1"), 'clear-day');
// skyIcon.play();

button.addEventListener('click', checkTheWeather);
searchIcon.addEventListener('click', checkTheWeather);

function checkTheWeather($event) {
    $event.preventDefault();
    getData();

};
async function getData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&APPID=0c618783e717de8c4e7ada7cf92e8daf').then(function (responce) {
        return responce.json();
    }).then(function (jsonData) {
        let data = jsonData;
        console.log(data);
        console.log(data.weather[0].icon);
        showData(data);


    }).catch(function (err) {
        console.log('Fetch problem: ' + err.message);
    })
};

function showData(data) {
    console.log(data.main.temp);
    //skyIcon.add(document.getElementById("icon1"), Skycons.RAIN);
    console.log(data.main.feels_like);
    console.log(data.wind.speed);
    console.log(data.name);
    // responce_city_name.textContent = data.name;
    //console.log(data.snow.1h);

    tempreature.textContent = data.main.feels_like;
    snow.textContent = data.wind.speed;
    rain.textContent = data.sys.sunrise;
    wind.textContent = data.clouds.all;
    // responce_city_name.innerHtml = data.name;


    //TODO : i want to change the weather icon, according to the weather 
    //toDO : json responce. {data.weather[0].icon}.
    skyIcon.set(document.getElementById("icon1"), data.weather[0].icon);
    skyIcon.play();

}


