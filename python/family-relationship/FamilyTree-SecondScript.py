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

Ages=[]
for i in range(len(FamilyTree)):
    if i not in Ages:   
        Ages.append(FamilyTree[i]["age"])
       
        
Groups =["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70","71-80","81-90","91-100"]
AgeGroups = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


for i in range(len(FamilyTree)):
    if Ages[i] <=10:
        AgeGroups[0] +=1
    elif Ages[i] <=20:
        AgeGroups[1] +=1
    elif Ages[i] <=30:
        AgeGroups[2] +=1
    elif Ages[i] <=40:
        AgeGroups[3] +=1
    elif Ages[i] <=50:
        AgeGroups[4] +=1
    elif Ages[i] <=60:
        AgeGroups[5] +=1
    elif Ages[i] <=70:
        AgeGroups[6] +=1
    elif Ages[i] <=80:
        AgeGroups[7] +=1
    elif Ages[i] <=90:
        AgeGroups[8] +=1
    elif Ages[i] <=100:
        AgeGroups[9] +=1
            
PersonOrPersons=[]
for i in AgeGroups:
    if AgeGroups[i] <=1:
        PersonOrPersons.append("person")
    else:
        PersonOrPersons.append("persons")

for i in range(len(AgeGroups)):   
    print(str(Groups[i])+"\n" +str(AgeGroups[i])+" "+str(PersonOrPersons[i])+"\n")
