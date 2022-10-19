/*Question One first char**/

function firstChar(arr1, arr2){
    for(var i = arr1.length -1; i >= 0; i--){
        var char = arr1[i].charAt(0);
        arr2[i] = char + ": " + arr1[i];
    }
    console.log("firstChar")
    console.log(arr2);
}

const words = ["aaAAA", "bBBBB", "cCCCC", "dDDDD"];
const words2 = [];

firstChar(words, words2);

/*Question Two wordLen * */

function wordLen(arr1, arr2){

for(var i = arr1.length -1; i >=0; i--){
    var len = arr1[i].length;
    arr2[i] = len + ": " + arr1[i];       
}
console.log("wordLen");
console.log(arr2);
}

const a = ["hello", "goodbye", "yes", "no"];
const b = [];

wordLen(a, b);

/*Question Three wordMultiple**/
function wordMultiple(arr1, arr2){
    for(var i = arr1.length -1; i >=0; i--){
        var repeat = false;
        var word = arr1[i];
        if(arr1.indexOf(word) >= 0){
            repeat = true;
            arr2[i] = arr1[i] + ": " + repeat;
        }
    }
    console.log("wordMultiple");
    console.log(arr2);
}
const wordsOne = ["a", "b", "a", "d", "b", "c", "f"];
const wordsTwo = [];
wordMultiple(wordsOne, wordsTwo);



