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


    

 var formHandler = function (event) {
   event.preventDefault();
   var userChoice = citySearchEL.value.trim();
   if (userChoice) {
     //call function to get weather
    cityForecast(userChoice);
    //call function for 5 day forecast

    pastSearches.unshift({ userChoice });
    citySearchEL.value = "";
  } else {
    
    //prompt pick city
   }
   //local storage to save search
   storeSearch();
   //prepend to past search list
 };

 function storeSearch() {
   localStorage.setItem("cities", JSON.stringify(pastSearches));
 }

 var cityForecast = function (userChoice) {
   var apiKey = "0a7fc131500231612fc6db5c5667faa8";
   var apiURL =
   `https://api.openweathermap.org/data/2.5/weather?q=${userChoice}&units=imperial&appid=${apiKey}`;

     fetch(apiURL)
     .then(function (response) {
       return response.json();
       console.log(response)
     })
     .then(function (data) {
       console.log(data);
       //call function for city detail
       addDetail(data, userChoice);
     });
 };

 var addDetail = function (weather, searchCity) {
   cityDetailEl.textContent = "";
   citySearchEL.textContent = searchCity;

   console.log(weather);

   //Display date in new element
   var todayDate = document.createElement("span");
   todayDate.textContent = " (" + moment().format("MMM D, YYYY") + ") ";
   citySearchEL.appendChild(todayDate);
  
   //img element for weather icons
   var weatherImg = document.createElement("img");
   weatherImg.setAttribute(
     "src",
     `https://openweathermap.org/img/wn/${weather.img}@2x.png`);
     citySearchEL.appendChild(weatherImg);
    
     //span to hold tempurature
   var tempEl = document.createElement("span");
   tempEl.textContent = "Temperature: " +weather.main.temp + "°F";
   citySearchEL.classList = "list.group.item";
   
   //span to hold humidity
   var humidEl = document.createElement("span");
  humidEl.textContent = "Humidity: " +weather.main.humidity + "%";
  citySearchEL.classList = "list.group.item";

//span to hold windspeed
var wsEl = document.createElement("span");
wsEl.textContent = "Wind Speed: " + weather.main.wind + "mph";
wsEl.classList = "list-group-item";

//appending to bottom of city detail box
cityDetailEl.appendChild(tempEl);
cityDetailEl.appendChild(humidEl);
cityDetailEl.appendChild(wsEl);

var lat = weather.coord.lat;
var lon = weather.coord.lon;
 };

 searchFormEl.addEventListener("click", formHandler);
