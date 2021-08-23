Create a constructor with:
- location
- landmarks
- time of year
- notes

display them when user clicks on the name

```javascript
Describe: Location(countryName, landmark, timeOfYear, notes)
Test: "It should display Location info when location is entered"
Code: testLocation;
Expected Output: Location {countryName: "US", landmark: "Welcome to Portland sign", timeOfYear: "Fall", notes: "here is a note"}

Test: "It should disply all locations information when you access travelGuide locations"
Code: travelGuide.locations;
Expected Output: US: 
Canada: Location {countryName: "Canada", landmark: "The Butchart Gardens", timeOfYear: "Summer", notes: "Fountains and flowers."}
Mexico: Location {countryName: "Mexico", landmark: "Castillo Chapultepec", timeOfYear: "Spring", notes: "That's a lot of strained glass!"}
UK: Location {countryName: "UK", landmark: "Edinburgh", timeOfYear: "Winter", notes: "Closes and wynds."}
US: Location {countryName: "US", landmark: "Welcome to Portland sign", timeOfYear: "Fall", notes: "We live here; it's nice."}

Test: "It should display the information for the location at the id entered."
Code: travelGuide.findLocation(4);
Expected Output: Location {countryName: "UK", landmark: "Edinburgh", timeOfYear: "Winter", notes: "Closes and wynds.", id: 4}
