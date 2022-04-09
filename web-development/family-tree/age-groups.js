const familyTree = JSON.parse(data);

console.log(familyTree);


// function getFields(input, field) {
//     var result = [];
//     for (var i=0; i < input.length ; ++i)
//         result.push(input[i][field]);
//     return result;
// }

// var ages = getFields(familyTree, "age");


// var groups =["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "others"]
// var ageGroups = [0, 0, 0, 0, 0, 0, 0, 0]


// for (j = 0; j <= ages.length; j++) {
//     var age = ages[j].getCalc()
//     if (age <= 70 ) {
//        ageGroups[0] +=1;
//     } else if (ages[j].getCalc() <= 20) {
//         ageGroups[1] +=1;
//     } else if (ages[j].getCalc() <= 30) {
//         ageGroups[2] +=1
//     } else if (age <= 40) {
//         ageGroups[3] +=1;
//     } else if (age <= 50) {
//         ageGroups[4] +=1;
//     } else if (ages[i] <= 60) {
//         ageGroups[5] +=1;
//     } else if (ages[i] <= 70) {
//         ageGroups[6] +=1;
//     } else {

//     }
// }

// for (var i = 0; i < ages.length; i++) {
//     var age = ages[i];

//     switch(age) {
//         case (age <= 10):
//             ageGroups[0] +=1;
//             break;
//         case (age <= 20):

//         default: 

//     }
// }


// var personOrPersons=[]
// for (i = 0; i <= ageGroups.length; i++) {
//     if (ageGroups[i] <= 1){
//         personOrPersons[i] ="person";
//     }
//     else{
//         personOrPersons[i] ="persons";
//     }
// }

// // shows persons in HTML
// function show() {
//     document.getElementById("persons").style.display = "block";
// }

// var finalResult = "";
// for (let i = 0; i < ageGroups.length; i++) {
// finalResult +=  groups[i]+"<br>"+ageGroups[i]+" "+personOrPersons[i]+"<br><br>";
// }
// document.getElementById("persons").innerHTML = finalResult;
