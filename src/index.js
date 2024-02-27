function handleSearch(event) {
    event.preventDefault();
    let formInput = document.querySelector("#form-input");
    let cityElement = document.querySelector("#city-element");
    cityElement.innerHTML = formInput.value;
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", handleSearch);