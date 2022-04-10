const familyTree = JSON.parse(data);

//obtain values through the keys of an array of objects
function getValues(array, key) {    
    var objectValues = [];
    for (let i=0; i < array.length ; ++i) {
        objectValues.push(array[i][key]);
    }
    return objectValues;
}
var names = getValues(familyTree, "name");
var roles = getValues(familyTree, "role");

//a function for finding whether a person is male or female
function getGender(rolesList) {
    var genderArray = [];
    for (let i = 0; i < rolesList.length; i++) {
        if (rolesList[i].includes("Son")) {
            genderArray.push("Male");
        } else if (rolesList[i].includes("Father")) {
            genderArray.push("Male");
        } else {
            genderArray.push("Female");
        }
    }
    return genderArray;   
}  
var gender = getGender(roles);  

// shows List of people with their gender in HTML
function show() {
    document.getElementById("genderList").style.display = "list-item";
}

var genderList = "";
for (let i = 0; i < names.length; i++) {
genderList +=  "<li>" + names[i] + ": " + gender[i] + "<br>" ;
}
document.getElementById("genderList").innerHTML = genderList;