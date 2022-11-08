// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var pastSearches = [];
var searchFormEl = document.getElementById("searchForm");
var searchBtnEl = document.getElementById("searchBtn");
var citySearchEL = document.getElementById("citySearch");
var cityDetailEl = document.getElementById("cityDetail");
var forecastEl = document.getElementById("forecast");
var fiveDayContEl = document.getElementById("fiveDayContainer");
var searchHistoryBtnsEl = document.getElementById("searchHistoryBtns");

var apiKey = "0a7fc131500231612fc6db5c5667faa8";
  var apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0a7fc131500231612fc6db5c5667faa8}";

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(response)
        console.log(data)
      //call function for city detail
      addDetail(data, userChoice);
    });

// var formHandler = function (event) {
//   event.preventDefault();
//   var userChoice = citySearchEL.value.trim();
//   if (userChoice) {
//     //call function to get weather
//     addDetail(userChoice);
//     //call function for 5 day forecast

//     pastSearches.unshift({ userChoice });
//     citySearchEL.value = "";
//   } else {
//     console.log(userChoice);
//     //prompt pick city
//   }
//   //local storage to save search
//   storeSearch();
//   //add to past search list
// };

// function storeSearch() {
//   localStorage.setItem("cities", JSON.stringify(pastSearches));
// }

// var cityForecast = function (userChoice) {
//   var apiKey = "0a7fc131500231612fc6db5c5667faa8";
//   var apiURL =
//     "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0a7fc131500231612fc6db5c5667faa8}";

//   fetch(apiURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         console.log(response)
//         console.log(data)
//       //call function for city detail
//       addDetail(data, userChoice);
//     });
// };

// var addDetail = function (weather, searchCity) {
//   cityDetailEl.textContent = "";
//   citySearchEL.textContent = searchCity;

//   console.log(weather);

//   //Display date in new element
//   var todayDate = document.createElement("span");
//   todayDate.textContent = " (" + moment().format("MMM D, YYYY") + ") ";
//   citySearchEL.appendChild(todayDate);

//   var weatherImg = document.createElement("img");
//   weatherImg.setAttribute(
//     "src",
//     `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
//   );
// };

// searchFormEl.addEventListener("click", formHandler);
