import pprint

FamilyTree=[
    {
        "name": "Setareh",
        "age": 33,
        "children": 0,
        "married": True,
        "role": [
            "Wife",
            "Daughter",
            "Sister",
            "Sister in law",
            "Daughter in Law"
        ]
    },
    {
        "name": "Moeen",
        "age": 32,
        "children": 0,
        "married": True,
        "role": [
            "Husband",
            "Son",
            "Brother",
            "Brother in law",
            "Son in Law"
        ]
    },
    {
        "name": "Sayid",
        "age": 38,
        "children": 0,
        "married": False,
        "role": [
            "Son",
            "Brother",
            "Brother in Law"
        ]
    },
    {
        "name": "Mohsen",
        "age": 35,
        "children": 1,
        "married": True,
        "role": [
            "Husband",
            "Son",
            "Father",
            "Brother",
            "Brother in law"
        ]
    },
    {
        "age": 35,
        "children": 1,
        "married": True,
        "name": "Behnaz",
        "role": [
            "Wife",
            "Sister in law",
            "Mother",
            "Daughter in Law"
        ]
    },
    {
        "age": 3,
        "children": 0,
        "married": False,
        "name": "Delara",
        "role": [
            "Daughter",
            "Grand Daughter"
        ]
    },
    {
        "age": 30,
        "children": 0,
        "married": True,
        "name": "Hussein",
        "role": [
            "Husband",
            "Son",
            "Brother",
            "Brother in law"
        ]
    },
    {
        "age": 29,
        "children": 0,
        "married": True,
        "name": "Zahra",
        "role": [
            "Wife",
            "Sister in law",
            "Daughter in Law"
        ]
    },
    {
        "age": 59,
        "children": 3,
        "married": True,
        "name": "Esfandyar",
        "role": [
            "Husband",
            "Father",
            "Grand Father",
            "Father in law"
        ]
    },
    {
        "age": 54,
        "children": 3,
        "married": True,
        "name": "Katayoon",
        "role": [
            "Wife",
            "Mother",
            "Grand Mother",
            "Mother in law"
        ]
    },
    {
        "age": 66,
        "children": 2,
        "married": True,
        "name": "Rahim",
        "role": [
            "Father",
            "Father in law"
        ]
    },
    {
        "age": 66,
        "children": 2,
        "married": True,
        "name": "Robabeh",
        "role": [
            "Mother",
            "Mother in law"
        ]
    }
]
 
def KeyFinder(x,y):
    result=[]
    for i in range(len(x)):
        if i not in result:
            result.append(x[i][y])
    return result

Names=KeyFinder(FamilyTree,"name")
Roles=KeyFinder(FamilyTree,"role")


Kind=""
for i in range(len(Roles)):
    if "Son" in Roles[i]:
        Kind += "Male"+ " "
    elif "Father" in Roles[i]:
        Kind += "Male" + " "
    else :
        Kind += "Female" + " "
Gender = Kind.split()


FinalList={Names[i] : Gender[i] for i in range(len(Names))}


def FindKeysByValue(MyDict, value):
    NewDict = {}
    for i in MyDict:
        if MyDict[i] == value:
            NewDict[i] = MyDict[i]
    return NewDict 


MalesList=FindKeysByValue(FinalList,"Male")
FemalesList=FindKeysByValue(FinalList,"Female")


isLoop = True
while isLoop :
    InputQuestion1 = input("Do you want to list all the people? Yes / No?? : ")
    if InputQuestion1 == "Yes":
        pprint.pprint(FinalList)  
        isLoop = False
    elif InputQuestion1 == "No": 
        InputQuestion2=input ("Do you want to see Males or Females : ")
        if InputQuestion2=="Males":
            pprint.pprint(MalesList)
            isLoop = False
        elif InputQuestion2=="Females":
            pprint.pprint(FemalesList)
            isLoop = False
        else:
            print("please type Males or Females")
    else:
        print("please type Yes or No")
      