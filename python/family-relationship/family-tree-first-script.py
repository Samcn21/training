import json
import collections

with open('../../data/family-tree.json') as jsonFile:
    familyTreeData = json.load(jsonFile)


# this function gets all values of the key in the data file
def getValues(data, key):
    values = []
    for i in range(len(data)):
        if i not in values:
            values.append(data[i][key])
    return values


names = getValues(familyTreeData, "name")
roles = getValues(familyTreeData, "role")


kind = ""
for i in range(len(roles)):
    if "Son" in roles[i]:  
        kind += "Male "
    elif "Father" in roles[i]:
        kind += "Male " 
    else :
        kind += "Female "
gender = kind.split()


nameGenderDictionary= {names[i]+":" : gender[i] for i in range(len(names))}
sortedDictionary = collections.OrderedDict(sorted(nameGenderDictionary.items()))


def getSpecificKeys(mainGenderDictionary, value):
    dividedGenderDictionary = {}
    for i in mainGenderDictionary:
        if mainGenderDictionary[i] == value:
            dividedGenderDictionary[i] = mainGenderDictionary[i]
    return dividedGenderDictionary 

malesDictionary=getSpecificKeys(sortedDictionary,"Male")
femalesDictionary=getSpecificKeys(sortedDictionary,"Female")


isLoop = True
while isLoop :
    mainListQuestion = input("Do you want to see the list of all the people? yes / no? ").lower()
    if mainListQuestion == "yes" or mainListQuestion == "y":
        for key, value in sortedDictionary.items(): print (key, value)  
        isLoop = False
    elif mainListQuestion == "no" or mainListQuestion == "n": 
        genderListQuestion=input ("Do you want to see list of males or females? ").lower()
        if genderListQuestion=="males" or genderListQuestion=="m":
            for key, value in malesDictionary.items(): print (key, value)
            isLoop = False
        elif genderListQuestion == "females" or genderListQuestion=="f":
            for key, value in femalesDictionary.items(): print (key, value)
            isLoop = False
        else:
            print("Please type males or females")
    else:
        print("Please type yes or no")