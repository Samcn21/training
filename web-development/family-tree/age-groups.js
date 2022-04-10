const familyTree = JSON.parse(data);

//obtain values through the keys of an array of objects
function getValues(array, key) {
    var objectValues = [];
    for (let i=0; i < array.length ; ++i)
    objectValues.push(array[i][key]);
    return objectValues;
}

var ages = getValues(familyTree, "age");

var groups =["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "others"];
var ageGroups = [0, 0, 0, 0, 0, 0, 0, 0];

// for (j = 0; j < ages.length; j++) {
//     var age = ages[j]
//     if (age <= 10) {
//         ageGroups[0] += 1;
//     } else if (age <= 20) {
//         ageGroups[1] += 1;
//     } else if (age <= 30) {
//         ageGroups[2] += 1;
//     } else if (age <= 40) {
//         ageGroups[3] += 1;
//     } else if (age <= 50) {
//         ageGroups[4] += 1;
//     } else if (age <= 60) {
//         ageGroups[5] += 1;
//     } else if (age <= 70) {
//         ageGroups[6] += 1;
//     } else {
//         ageGroups[7] += 1;
//     }
// }

for (let i = 0; i < ages.length; i++) {
    var age = ages[i];
    switch(true) {
        case age <= 10:
            ageGroups[0] += 1;
            break;
        case age <= 20:
            ageGroups[1] += 1;
            break;
        case age <= 30:
            ageGroups[2] += 1;
            break;
        case age <= 40:
            ageGroups[3] += 1;
            break;
        case age <= 50:
            ageGroups[4] += 1;
            break;
        case age <= 60:
            ageGroups[5] += 1;
            break;
        case age <= 70:
            ageGroups[6] += 1;
            break;
        default: 
            ageGroups[7] += 1;
    }
}

var personOrPersons=[]
for (let i = 0; i <= ageGroups.length; i++) {
//     if (ageGroups[i] <= 1){
//         personOrPersons[i] = "person";
//     }
//     else{
//         personOrPersons[i] = "persons";
//     }

    (ageGroups[i] <= 1) ? personOrPersons[i] = "person"
    : personOrPersons[i] = "persons";
}

// shows List of age Groups in HTML
function show() {
    document.getElementById("ageGroupsList").style.display = "block";
}

var finalResult = "";
for (let i = 0; i < ageGroups.length; i++) {
finalResult +=  groups[i] + "<br>" + ageGroups[i] + " " + personOrPersons[i] + "<br><br>";
}
document.getElementById("ageGroupsList").innerHTML = finalResult;