
import json

with open('../../data/family-tree.json') as jsonFile:
    familyTreeData = json.load(jsonFile)

#change the names
agesList=[]
for i in range(len(familyTreeData)):
    if i not in agesList:   
        agesList.append(familyTreeData[i]["age"])
       
        
ageGroups =["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70","71-80","81-90","91-100", "+100"]
totalList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


for i in range(len(familyTreeData)):
    if agesList[i] <=10:
        totalList[0] +=1
    elif agesList[i] <=20:
        totalList[1] +=1
    elif agesList[i] <=30:
        totalList[2] +=1
    elif agesList[i] <=40:
        totalList[3] +=1
    elif agesList[i] <=50:
        totalList[4] +=1
    elif agesList[i] <=60:
        totalList[5] +=1
    elif agesList[i] <=70:
        totalList[6] +=1
    elif agesList[i] <=80:
        totalList[7] +=1
    elif agesList[i] <=90:
        totalList[8] +=1
    elif agesList[i] <=100:
        totalList[9] +=1
    else:
        totalList[10] +=1
            
personOrPersons=[]
for i in totalList:
    if totalList[i] <=1:
        personOrPersons.append("person")
    else:
        personOrPersons.append("persons")

for i in range(len(totalList)):   
    print(str(ageGroups[i])+"\n" +str(totalList[i])+" "+str(personOrPersons[i])+"\n")
