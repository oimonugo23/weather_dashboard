//DOM ELEMENTS
var formEL = document.getElementById("search-form");
var currentWeather = document.querySelector(".current-weather");
var currentCityName = document.getElementById("current-city-name");
var currentCityTemp = document.getElementById("current-city-temp");
var currentCityHumidity = document.getElementById("current-city-humidity");
var currentCityWindSpeed = document.getElementById("current-city-windspeed");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  var searchTerm = e.target.children[0].value;
  if (searchTerm) {
    fetchFunc(searchTerm);
    
  }
});

function fetchFunc(cityName) {
  var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=42657d5d41b0dec97946df800955cd0f`;
  // console.log(queryURL)

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      currentCityName.textContent = data.name;
      currentCityTemp.textContent = data.main.temp;
      currentCityHumidity.textContent = data.main.humidity;
      currentCityWindSpeed.textContent = data.wind.speed;

      currentWeather.classList.remove("hidden");
    });
}

historyitem.addEventListener("click", function(e){
 fetchFunc(e.target.value)
})
