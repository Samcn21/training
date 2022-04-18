const familyTree = JSON.parse(data);

var maxAge = 70;
var interval = 10;
var stats = [];
for (var i = 0; i < maxAge; i += interval) {
    var min = i;
    var max = i + interval - 1;
    var text = `<br> Age Group: ${min}-${max} : <br>`;

    var total = 0;
    for (var j = 0; j < familyTree.length; j++) {
        var person = familyTree[j];
        var age = person.age;
        
        if (age >= min && age <= max) {
            total++;
        }
    }
    
    total <=1 ? total = total + " person" 
        : total = total + " persons";
     
    stats.push(text + total);
}

function showAgeGrpups() {
    var ageGroupsElement = document.getElementById("ageGroupsList");
    ageGroupsElement.innerHTML = stats;
    ageGroupsElement.style.display = "block";
}