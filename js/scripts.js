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

Place.prototype.infoMe = function () {
  return this.state + " " + this.landmark + " " + this.date + " " + this.note;
};

///// More Business Logic /////

function Vacation() {
  this.places = [];
}

