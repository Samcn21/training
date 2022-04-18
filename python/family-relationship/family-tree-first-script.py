import json
import collections

with open('../../data/family-tree.json') as jsonFile:
    familyTreeData = json.load(jsonFile)

bothGenders = {}
males = {}
females = {}

for i in range(len(familyTreeData)):
    personObject = familyTreeData[i]
    name = personObject['name']
    roles = personObject['role']
    for j in range(len(roles)):
        role = roles[j]
        if role == 'Father' or role == "Son" or role == 'Brother' or role == 'Son in law' or role == 'Husband' :  
            males.update({name:': Male'}) , bothGenders.update({name:': Male'})
            break
        else :
            females.update({name:': Female'}) , bothGenders.update({name:': Female'})
            break

sortedBothGenders = collections.OrderedDict(sorted(bothGenders.items()))
sortedMales = collections.OrderedDict(sorted(males.items()))
sortedFemales = collections.OrderedDict(sorted(females.items()))

isLoop = True
while isLoop :
    mainListQuestion = input("Do you want to see the list of all the people? yes / no? ").lower()
    if mainListQuestion == "yes" or mainListQuestion == "y":
        for key, value in sortedBothGenders.items(): print (key, value)  
        isLoop = False
    elif mainListQuestion == "no" or mainListQuestion == "n": 
        genderListQuestion=input ("Do you want to see list of males or females? ").lower()
        if genderListQuestion=="males" or genderListQuestion=="m":
            for key, value in sortedMales.items(): print (key, value)
            isLoop = False
        elif genderListQuestion == "females" or genderListQuestion=="f":
            for key, value in sortedFemales.items(): print (key, value)
            isLoop = False
        else:
            print("Please type males or females")
    else:
        print("Please type yes or no")