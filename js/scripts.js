
function Location (countryName, landmark, timeOfYear, notes) {
  this.countryName = countryName;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let testLocation = new Location("US", "Welcome to Portland sign", "Fall", "here is a note");





// let us = {name: "United States of America"};
// let mx = {name: "Mexico"};
// let cn = {name: "Canada"};
// let fr = {name: "France"};
// let uk = {name: "United Kingdom"};

// let location = {name: "The World", countries: [us, mx, cn, fr, uk] };

// function TravelGuide() {
//   this.locations = {};
//   // this.currentId = 0;
// }

// TravelGuide.prototype.addLocation = function(location) {
//   // location.id = this.assignId();
//   this.locations[location.countryName] = location;
// };

// function Location (countryName, landmark, timeOfYear, notes) {
//   this.countryName = countryName;
//   this.landmark = landmark;
//   this.timeOfYear = timeOfYear;
//   this.notes = notes;
// }

// let travelGuide = new TravelGuide();
// let location = new Location("United States of America");
// travelGuide.addLocation(location);



// let addressBook = new AddressBook();
// let contact = new Contact("Ada", "Lovelace", "503-555-1111", "ada@geocities.com");
// let contact2 = new Contact("Grace", "Hopper", "503-555-0199", "grace@aol.com");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);