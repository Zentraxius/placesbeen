///// User Logic /////

let vacation = new Vacation();

let nyc = new Place ("New York", "Statue of Liberty", "June 10th, 2020", "Lots of people")
let honolulu = new Place ("Hawaii","Diamond Head", "Jan 15th, 1998", "Less sharks than expected")
let lackland = new Place ("Texas", "Lackland Air Force Base", "August 4th, 2014", "Suffering builds character")

///////

function displayPlaceDetails(Vacation) {
let vacationList = $("ul#places");
let htmlForPlaceInfo = "";
Vacation.places.forEach(function(place) {
  htmlForPlaceInfo += "<li>" + place.state + " " + place.landmark + " " + place.date + " " + place.note + "</li>";
});
vacationList.html(htmlForPlaceInfo);
};

$(document).ready(function() {
  $('#click').click(function(event) {
  event.preventDefault();
  
  displayPlaceDetails(Vacation);
});
});

///// Business Logic /////

function Place(state, landmark, date, note) {
  this.state = state;
  this.landmark = landmark;
  this.date = date;
  this.note = note
}

Place.prototype.infoMe = function () {
  return this.state + " " + this.landmark + " " + this.date + " " + this.note;
};

///// More Business Logic /////
function Vacation() {
  this.places = [];
}
Vacation.prototype.addPlace = function(place) {
  this.places.push(place);
};


