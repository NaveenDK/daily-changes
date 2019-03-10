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
// var myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
// console.log(gloveBoxContents); //works!

// Setup
// var myPlants = [
//   { 
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }  
// ];

// // Only change code below this line

// var secondTree = myPlants[1].list[1]; // Change this line

// console.log(secondTree);//works

// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

    if(!value){
      delete collection[id][prop];
      return collection;
    }

    if(prop !== "tracks" && value){
      collection[id][prop] = value; //can create artist prop of 5439 just like that 
    }
    else if (!collection[id].hasOwnProperty("tracks")){ collection[id].tracks =[]; 
      //var arrTrack=[value];
      collection[id].tracks.push(value);

    }
    
return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439,"tracks","track1");
//updateRecords(2548,"artist","");
console.log(collection)