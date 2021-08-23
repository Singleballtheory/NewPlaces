
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

const canaKeys = Object.keys(newLocation3);
let canaString = "";
canaKeys.forEach(function(key) {
  canaString = canaString.concat(key + ": " + newLocation3[key] + "\n"); 
});

// for (const key in contact) {
//   if (contact.hasOwnProperty(key)) {
//     console.log(contact[key]);
//   }
// }



$(document).ready(function() {
  $(".clickable").click(function() {
//     function showLocation(locationId) {
//       const place = travelGuide.findLocation(locationId);
//       $("#locInfo").show();
//       $(".countryName").text(location.countryName);
//       $(".landmark").text(location.landmark);
//       $(".timeOfYear").text(location.timeOfYear);
//       $(".notes").text(location.notes);
//     }
    $("#locInfo").text(canaString).val("");
    
  });
});



// let tomatoes = { name: "Tomatoes", price: 2.99 };
// let cucumbers = { name: "Cucumbers", price: 0.99 };
// let onions = { name: "Onions", price: 0.79 };

// let groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

// let iPhone = { name: "iPhone", price: 699 };
// let android = { name: "Android", price: 499 };
// let windowsPhone = { name: "Windows Phone", price: 399 };

// let phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

// let stores = [groceryStore, phoneStore];

// stores.forEach(function(store) {
//   console.log(store.name + " sells:");
//   store.products.forEach(function(product) {
//     console.log(product.name);
//   });
//   console.log("\n");
// });