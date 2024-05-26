// API Key = 8b1269488f5d431fa44154233242505

let loc = document.querySelector('#location');
let search = document.querySelector('#Search');
let loc_name = document.getElementById('location_name');
let timeDate = document.getElementById('time_n_date');
let icon = document.getElementById('img');
let temp = document.getElementById('temp');
let condition = document.getElementById('condition');
let wind_speed = document.getElementById('wind_speed');
let wind_dir = document.getElementById('wind_dir');
let humidity = document.getElementById('humidity');

search.addEventListener('click', function(e){
    e.preventDefault();
    fetchData(loc.value);
    loc.value = '';
});

function fetchData(loc_name){
    fetch(`https://api.weatherapi.com/v1/current.json?key=8b1269488f5d431fa44154233242505&q=${loc_name}&aqi=no`)
        .then(function(res){ return res.json(); })
        .then(function(data) { updateWeatherDetails(data); })
        .catch(function(error) { console.log(error); })
}

function updateWeatherDetails(data) {
    
    loc_name.innerText = data.location.name;
    timeDate.value = data.location.localtime;
    icon.src = data.current.condition.icon;
    temp.innerText = data.current.temp_c;
    condition.innerText = data.current.condition.text;
    wind_speed.innerText = data.current.wind_kph;
    wind_dir.innerText = data.current.wind_dir;
    humidity.innerText = data.current.humidity;
}