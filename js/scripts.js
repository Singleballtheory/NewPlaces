
function TravelGuide() {
  this.locations = {};
  this.currentId = 0;
}

TravelGuide.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
};

TravelGuide.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TravelGuide.prototype.findLocation = function(id) {
  if (this.locations[id] != undefined) {
    return this.locations[id];
  }
  return false;
};

function Location (countryName, landmark, timeOfYear, notes) {
  this.countryName = countryName;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let travelGuide = new TravelGuide();
let newLocation = new Location("US", "Welcome to Portland sign", "Fall", "We live here; it's nice.");
let newLocation2 = new Location("Mexico", "Castillo Chapultepec", "Spring", "That's a lot of strained glass!");
let newLocation3 = new Location("Canada", "The Butchart Gardens", "Summer", "Fountains and flowers.")
let newLocation4 = new Location('UK', "Edinburgh", "Winter", "Closes and wynds.")
travelGuide.addLocation(newLocation);
travelGuide.addLocation(newLocation2);
travelGuide.addLocation(newLocation3);
travelGuide.addLocation(newLocation4);



// function AddressBook() {
//   this.contacts = {};
// }

// AddressBook.prototype.addContact = function(contact) {
//   this.contacts[contact.firstName] = contact;
// };

// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// let addressBook = new AddressBook();
// let contact = new Contact("Ada", "Lovelace", "503-555-0100");
// let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);
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