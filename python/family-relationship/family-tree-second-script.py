import json
with open('../../data/family-tree.json') as jsonFile:
    familyTreeData = json.load(jsonFile)
minAge = 0
maxAge = 100
interval = 10
stats=[]
for i in range(minAge,maxAge,interval):
    min = i
    max = i + interval -1
    text = "Age Group: " + str(min) + "-" + str(max) + ": \n"
        
    total = 0
    for j in range(len(familyTreeData)):
        person = familyTreeData[j]
        age = person['age']
        if age >= min and age <= max:
            total += 1
    if total <= 1:
        total =str(total) + str(" person")
    else:
        total =str(total) + str(" persons")
    stats=(str(text)+str(total))
    print(stats)