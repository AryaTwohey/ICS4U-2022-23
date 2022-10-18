/*Functional 2 -? noNeg* */
function omit(arr){
    var counter = 0;
    for(var index = arr.length -1; index>= 0; index--){
        if(arr[index] < 0){
            arr.splice(index, 1);
            counter++;
    }
}
console.log("noNeg")

console.log(counter + " numbers were removed");
console.log(arr);
return arr;

}

const nums = [1, 3, -1, -5, -3, -6];
omit(nums);

/*Functional 2 * */

function noZ(str){
    for(var index = str.length -1; index >= 0; index--){
        if(str[index].indexOf('z') > -1){
            str.splice(index, 1);
        }
    }
    console.log("noZ")
    console.log(str);
}

const zString = ['Hello', "zebra", "zesty", 'zombie', 'goodbye']
noZ(zString);

/*no9**/
function no9(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i] % 10 === 9){
            arr.splice(i, 1);
        }
    }
    console.log("no9");
    console.log(arr);
}

const noNines = [1, 5, 19, 29, 35, 49];
no9(noNines);
    
