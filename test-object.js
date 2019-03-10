// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line;
  
//   var playerNumber = 16;       // Change this Line
//   var player = testObj[playerNumber]   // Change this Line

//   console.log(testObj);
//   console.log(player);

// Setup
// Example
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.name = "Happy Camper";

// // Setup
// var myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line.

// myDog["name"]="Happy Coder";

// console.log(myDog);
  // Setup
// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
//  var lookup={
//   "alpha":"Adams",
//   "bravo":"Boston",
//   "charlie":"Chicago",
//   "delta":"Denver",
//   "echo":"Easy",
//   "foxtrot":"Frank"
//  }

//   result=lookup[val];

//   // Only change code above this line
//   return result;
// }

// // Change this value to test
// phoneticLookup("charlie");
// Setup
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {
//   // Your Code Here
//  if(myObj.hasOwnProperty(checkProp)=="gift")
//   return "pony";
//   if( myObj.hasOwnProperty(checkProp)=="pet")
//   return "kitten";
//   if(myObj.hasOwnProperty(checkProp)=="sleigh")
//   return "sleigh"; 

// }

// // Test your code by modifying these values
// checkObj("gift");

// console.log('checkObj("gift")');

// Setup
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {
//   // Your Code Here
//   switch(checkProp){
//     case "gift":
//     return "pony";
//     break;
//     case "pet":
//     return "kitten";
//     case "bed":
//     return "sleigh";
//     default:
//     return "Not Found";
//   }

// }

// // Test your code by modifying these values
// checkObj("gift");
// console.log(checkObj("gift"));//works!

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
console.log(gloveBoxContents); //works!