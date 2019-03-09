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

console.log(collection);

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    if(value == ""){
      delete collection.id["prop"];
    }
    else if ( prop =="tracks" && value != "")
    {
    collection["id"]["prop"].push(value);
    }
    
      
      return collection;
    }
    // Alter values below to test your code
    updateRecords(5439, "", "ABBA");
    updateRecords(5439, "tracks", "gabba");



    console.log("after -------------------------'\'<br>\n\n" , collection);



























// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
//   //console.log(ages);
// //   companies.forEach(function(company){
// //       console.log(company.name);
// //   });

// // let canDrink =[];
// // for( let i =0; i< ages.length; i++){
// //     if(ages[i]>=21){
// //         canDrink.push(ages[i]);
// //     }
// // }

// // const canDrink = ages.filter(function(age){
// //   if (age>=21){
// //       return true;
// //   }
// // })

// // const retailCompanies = companies.filter(function(company){
// //     if(company.category== 'Retail'){
// //         return true;
// //     }
// // });
// const retailCompanies = companies.filter(company=> company.category=='Retail')
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <1990)
// //console.log( eightiesCompanies )
// const lastedTenYears = companies.filter(company => (company.end-company.start >=10));
// console.log(lastedTenYears);

// //map
// //create array of company names
// const companyNames =companies.map(company=>company.name);

// const testMap = companies.map(company => `${company.name}[
//     ${company.start}- ${company.end}
// ]`);

// const agesSquare =ages
// .map(age => Math.sqrt(age))
// .map(age=>age*2);

// //console.log(testMap);
// //console.log(agesSquare);

// let ageSum = 0;
// for(let i= 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0)


// const ageSum = ages.reduce((total,age)=> total +age , 0);

// console.log(ageSum);