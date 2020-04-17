//5. URLify a string 
function URLify(string) {
    let newStr = []
    for(let i = 0; i < string.length; i++) {
        if(string[i] === ' '){
            newStr[newStr.length] = '%20'
        } else {
            newStr[newStr.length] = string[i]
        }
    }
    let url = newStr.join('')
    return url

}

//6. Filtering array

function filterArr(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 5) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

//7. max sum array
function maxSum(arr) {
    let max = 0
    for(let i = 2; i < arr.length-1; i++) {
        let sum = 0
        for(let j = 0; j < arr.length; j++) {
            for(let k = 0; k < i; k++){
                sum += arr[j+k]
            }
        }
        if(sum > max) {
            max = sum
        }
    }
    return max;
}

//8. merge array
function merge(arr1, arr2) {
    let newArr = []

    let index1 = 0
    let index2 = 0

    let current = 0

    while(current < (arr1.length + arr2.length)) {
        if(arr1[index1]<arr2[index2]){
            newArr[current] = arr1[index1]
            index1++
        } else {
            newArr[current] = arr2[index2]
            index2++
        }
        current++ 
    }
    return newArr
}

//9. remove characters

function removeChar(str, char) {

    let newStr = ''

    let indexStr = 0
    let indexChar = 0

    while(indexStr<str.length) {
        if(str[indexStr]!==char[indexChar] && indexChar === char.length) {
            newStr += str[indexStr++];
            indexChar = 0;
        } else if(str[indexStr]===char[indexChar]){
            indexStr++;
            indexChar = 0;
        } else {
            indexChar++
        }
    }

    console.log(newStr)

}

//10. product

function productExcept(arr) {
    let multipliedArray = [];

    for(let i = 0; i < arr.length; i++) {
        let product = 1
        for(let j = 0; j < arr.length; j++) {
            if(j !== i) {
                product *= arr[j]
            }
        }
        multipliedArray.push(product)
    }
    return multipliedArray
}


//11. 2D Array

const search0 = input => {
    return input.map(arr => {
      arr.forEach(elem => {});
    });
  };

//12. Str rotation

function isItRotated(str1, str2){
    let rotatedStr1 = ''

    for(i=str1.length-1; i>=0; i--){
        rotatedStr1 += str1[i]
    }

    if(rotatedStr1===str2){
        return true
    } else{
        return false
    }
}