function updateWeather(response) {
    let cityElement = document.querySelector("#city-element");
    let temperatureElement = document.querySelector("#temp");
    let temperature = Math.round(response.data.temperature.current)
    let conditionElement = document.querySelector("#condition");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
;    

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    conditionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`
    timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes()

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "d2814dadfb2t312f8a3e3402o3510096";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(updateWeather);
}


function handleSearch(event) {
    event.preventDefault();
    let formInput = document.querySelector("#form-input");
    searchCity(formInput.value);
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", handleSearch);

searchCity("Dallas");