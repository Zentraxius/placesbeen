///// User Logic /////

$(document).ready(function() {
  $('insertid').click(function(event) {
    event.preventDefault();
  })
})

///// Business Logic /////

function Place(state, landmark, date, note) {
  this.state = state;
  this.landmark = landmark;
  this.date = date;
  this.note = note
}
let nyc = new Place ("New York", "Statue of Liberty", "June 10th, 2020", "Lots of people")
let honolulu = new Place ("Hawaii","Diamond Head", "Jan 15th, 1998", "Less sharks than expected")
let lackland = new Place ("Texas", "Lackland Air Force Base", "August 4th, 2014", "Suffering builds character")

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

let vacation = new Vacation();

