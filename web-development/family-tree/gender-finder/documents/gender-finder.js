const familyTree = JSON.parse(data);

var persons = [];
for (var i = 0; i < familyTree.length; i++) {
    var personObject = familyTree[i];
    var roles = personObject.role;
    var name = personObject.name

    for (var j = 0; j < roles.length; j++) {
        var role = roles[j].toString().toLowerCase();

        if (role === 'father' || role === 'son' || role === 'brother' || role === 'son in law' || role === 'husband') {
            persons.push(name + ': Male');
            break;
        } else {
            persons.push(name + ': Female');
            break;
        }
    } 
}

function showGenderList() {
    var genderList = "";
    for (var i = 0; i < persons.length; i++) {
        genderList +=  "<li>" + persons[i] + "<br>" ;
    }
    
    document.getElementById("genderList").innerHTML = genderList;
}