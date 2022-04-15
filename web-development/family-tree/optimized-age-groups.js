const familyTree = JSON.parse(data);

var maxAge = 99;
var interval = 10;
var stats = [];
for (var i = 0; i <= maxAge; i += interval) {
    var min = i;
    var max = i + interval - 1;
    var text = "Age Group: " + min + '-' + max + ': ';

    var total = 0;
    for (var j = 0; j < familyTree.length; j++) {
        var person = familyTree[j];
        var age = person.age;
        
        if (age >= min && age <= max) {
            total++;
        }
    }

    stats.push(text + total);
}

console.log(stats)

// function showAgeGroups() {
//     var ageGroupsList = "";
//     for (var i = 0; i < ageGroupsCounter.length; i++) {
//         ageGroupsList +=  ageGroups[i] + "<br>" + ageGroupsCounter[i] + " " + personOrPersons[i] + "<br><br>";
//     }

//     var ageGroupsElement = document.getElementById("ageGroupsList");
//     ageGroupsElement.innerHTML = ageGroupsList;
//     ageGroupsElement.style.display = "block";
// }