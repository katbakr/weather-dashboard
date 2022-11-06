// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var apiKey = "0a7fc131500231612fc6db5c5667faa8"
var pastSearches= [];
var searchFormEl = document.getElementById(searchForm);
var citySearchEL = document.getElementById(citySearch);
var cityDetailEl = document.getElementById(cityDetail);
var forecastEl = document.getElementById(forecast);
var fiveDayContEl = document.getElementById(fiveDayContainer);
var searchHistoryBtnsEl = document.getElementById(searchHistoryBtns);

var formHandler = function(event) {
    event.preventDefault(); 
    var userChoice = citySearchEL.ariaValueMax.trim();
    if(userChoice) {
        //call function to get weather 
        //call function for 5 day forecast
        pastSearches.unshift({userChoice})
        citySearchEL.value = "";
    } else {
        console.log(userChoice)
        //prompt pick city
    }
    //local storage to save search
    //add to past search list
}