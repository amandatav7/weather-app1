function updateWeather(response) {
    let temperatureElement = document.querySelector("#temp");
    let temperature = Math.round(response.data.temperature.current)
    let cityElement = document.querySelector("#city-element");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
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

searchCity("Paris");