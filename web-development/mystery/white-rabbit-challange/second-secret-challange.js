// Make an array from the original word list
var fs = require('fs')
var initArray = fs.readFileSync('word-list.txt').toString().split("\n")
wordList = []
for(i in initArray) {
    wordList.push(initArray[i])
}

// Remove the duplicates words
let wordList2 =  [...new Set(wordList)]


// Remove words with un inserted characters (b, c, d ...)
wordList3 = []
for (i in wordList2) {
    if (wordList2[i].includes("b") || 
        wordList2[i].includes("c") ||
        wordList2[i].includes("d") ||
        wordList2[i].includes("e") ||
        wordList2[i].includes("f") ||
        wordList2[i].includes("g") ||
        wordList2[i].includes("h") ||
        wordList2[i].includes("j") ||
        wordList2[i].includes("k") ||
        wordList2[i].includes("m") ||
        wordList2[i].includes("q") ||
        wordList2[i].includes("v") ||
        wordList2[i].includes("x") ||
        wordList2[i].includes("z") ||
        wordList2[i].includes("'")){
    } else {
        wordList3.push(wordList2[i])
    }
}


// Check the maximum number of allowed letters
const wordList4  = wordList3.filter(s  => (s.match(/a/gi) || [] ).length <= 1)
const wordList5  = wordList4.filter(s  => (s.match(/i/gi) || [] ).length <= 1)
const wordList6  = wordList5.filter(s  => (s.match(/l/gi) || [] ).length <= 1)
const wordList7  = wordList6.filter(s  => (s.match(/n/gi) || [] ).length <= 1)
const wordList8  = wordList7.filter(s  => (s.match(/p/gi) || [] ).length <= 1)
const wordList9  = wordList8.filter(s  => (s.match(/r/gi) || [] ).length <= 1)
const wordList10 = wordList9.filter(s  => (s.match(/w/gi) || [] ).length <= 1)
const wordList11 = wordList10.filter(s => (s.match(/y/gi) || [] ).length <= 1)
const wordList12 = wordList11.filter(s => (s.match(/o/gi) || [] ).length <= 2)
const wordList13 = wordList12.filter(s => (s.match(/s/gi) || [] ).length <= 2)
const wordList14 = wordList13.filter(s => (s.match(/t/gi) || [] ).length <= 2)
const wordList15 = wordList14.filter(s => (s.match(/u/gi) || [] ).length <= 2)
    

// Check the allowable length of words
wordList16=[]
for(i in wordList15) {
    if (wordList15[i].length == 2 || wordList15[i].length == 7 || wordList15[i].length == 9 ){
        wordList16.push(wordList15[i])
    }
}

// Combine words in threes
var combinationsArray = []
function wordsCombiner(list) { 
    for (i in list) {
        for (j in list) {
            for (k in list) {
                if ( i !== j  &&  j !== k  &&  i !== k && (list[i] + list[j] + list[k]).length == 18){
                    combinationsArray.push(list[i] + " " + list[j] + " " + list[k])
                }   
            }
        }
    }  
    return combinationsArray 
}
wordsCombiner(wordList16)


// Compare the obtained hashes with the intended hash
var expectedResult = '23170acc097c24edb98fc5488ab033fe'

var crypto = require('crypto')
for (i in combinationsArray){
    var hash = crypto.createHash('md5').update(combinationsArray[i]).digest('hex')
    if(hash == expectedResult) {
        console.log("The answer is: " + combinationsArray[i])
    }
}