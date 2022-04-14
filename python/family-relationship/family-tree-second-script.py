import json
with open('../../data/family-tree.json') as jsonFile:
    familyTreeData = json.load(jsonFile)

ageGroups =["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70","71-80","81-90","91-100", "+100"]
ageGroupsCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for i in range(len(familyTreeData)):
    personObject = familyTreeData[i]
    age = personObject['age']
   
    if age <= 10:
        ageGroupsCounter[0] +=1
    elif age <= 20:
        ageGroupsCounter[1] +=1
    elif age <= 30:
        ageGroupsCounter[2] +=1
    elif age <= 40:
        ageGroupsCounter[3] +=1
    elif age <= 50:
        ageGroupsCounter[4] +=1
    elif age <= 60:
        ageGroupsCounter[5] +=1
    elif age <= 70:
        ageGroupsCounter[6] +=1
    elif age <= 80:
        ageGroupsCounter[7] +=1
    elif age <= 90:
        ageGroupsCounter[8] +=1
    elif age <= 100:
        ageGroupsCounter[9] +=1
    else:
        ageGroupsCounter[10] +=1
            
personOrPersons=[]
for i in range(len(ageGroupsCounter)):
    if ageGroupsCounter[i] <=1:
        personOrPersons.append("person")
    else:
        personOrPersons.append("persons")
   
    print(str(ageGroups[i])+"\n" +str(ageGroupsCounter[i])+" "+str(personOrPersons[i])+"\n")