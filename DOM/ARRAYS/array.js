const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);

let list = [1, 20, 22, 24, 5];
let words = ['hi', 'hello', 'good'];

function getLastValue(arr){
    let lastIndex = arr.length-1
    console.log(arr[lastIndex]);
}
getLastValue(list)

let digits = [1, 20, 22, 24, 5];
function arraySwap(arr){
    console.log(arr.reverse())
}

arraySwap(digits);

for (let evenNum = 0; evenNum <= 10; evenNum++){
    if(evenNum % 2 === 0){
        console.log(evenNum)
    }
}

for (let count = 5; count >= 0; count--){
    console.log(count)
}

let eNum = 0;
while (eNum <= 10){
    if (eNum % 2 === 0){
        console.log(eNum)
    }
    eNum++;
}

arraySwap(words);


let count = 6;
while (count > 0){
    count--;
    console.log(count);
}

const arr1 = [1, 2, 3];

for (let i = 0; i < arr1.length; i++){
    const arr2 = arr1[i] + 1;
    console.log(arr2)
}

getLastValue(words)

function addOne(ar){
    for (let i = 0; i <= arr1.length; i++){
        const sum = ar[i] + 1;
        console.log(sum)
    }
}
let num1 = [1, 2, 3];
let num2 = [-2, -1, 0, 99];
addOne(num1);
console.log('This is just a line break')
addOne(num2);

function addNum(array, increment){
    for (let i = 0; i < array.length; i++){
        const added = array[i] + increment
        console.log(added)
    }
}
let increment1 = 2
let increment2 = 3

addNum(num1, increment1)

console.log('This is just a line break')

addNum(num1, increment2)

console.log('This is just a line break')

addNum(num2, increment1)