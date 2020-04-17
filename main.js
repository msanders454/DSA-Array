
import Memory from './memory'
import Array from './DSA-Array'

function main(){
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    arr.push(3);
    console.log(arr);


//length of array: 1
//capacity of array: 3
//memory address: 0

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);

//length of array: 6
//capacity of array: 12
//memory address: 12

    arr.pop();
    arr.pop();
    arr.pop();

//length of array: 3
//capacity: 12
//memory address: 12
    console.log(arr.get(0))
//Empty array and add one item
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida")
    console.log(arr.get(0));
//resize makes array capacity bigger so it can hold more data
}

main()

module.exports = main