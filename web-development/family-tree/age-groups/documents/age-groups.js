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

function showAgeGroups() {
    document.getElementById("ageGroupsList").innerHTML = stats;
}

var contentWrapper = document.querySelector(".contentWrapper");
var modalWrapper = document.querySelector(".modalWrapper");
var modalButtons = document.querySelectorAll(".modalToggle");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        contentWrapper.classList.toggle("active");
        modalWrapper.classList.toggle("active");
    });
});