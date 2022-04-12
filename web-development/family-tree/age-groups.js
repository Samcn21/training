const familyTree = JSON.parse(data);

var x =["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "others"];
var ageGroupsCounter = [0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i < familyTree.length; i++) {
    var personObject = familyTree[i];
    var age = personObject.age; 

    switch(true) {
        case age <= 10:
            ageGroupsCounter[0] += 1;
            break;
        case age <= 20:
            ageGroupsCounter[1] += 1;
            break;
        case age <= 30:
            ageGroupsCounter[2] += 1;
            break;
        case age <= 40:
            ageGroupsCounter[3] += 1;
            break;
        case age <= 50:
            ageGroupsCounter[4] += 1;
            break;
        case age <= 60:
            ageGroupsCounter[5] += 1;
            break;
        case age <= 70:
            ageGroupsCounter[6] += 1;
            break;
        default: 
            ageGroupsCounter[7] += 1;
    }
}

var personOrPersons=[]
for (var i = 0; i <= ageGroupsCounter.length; i++) {
    (ageGroupsCounter[i] <= 1) ? personOrPersons[i] = "person"
    : personOrPersons[i] = "persons";
}

function showAgeGrpups() {
    var ageGroupsList = "";
    for (var i = 0; i < ageGroupsCounter.length; i++) {
        ageGroupsList +=  x[i] + "<br>" + ageGroupsCounter[i] + " " + personOrPersons[i] + "<br><br>";
    }

    var ageGroupsElement = document.getElementById("ageGroupsList");
    ageGroupsElement.innerHTML = ageGroupsList;
    ageGroupsElement.style.display = "block";
}