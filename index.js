// let arr = ['red', 'yellow', 'white']
// arr.pop()
// arr.push('green')
// for(let color of arr) {
//     console.log(color + ' color')
// }


// let string = 'hello'
// console.log(string[1])


// let toString = arr.toString()
// console.log(toString)


// let arrToString = arr.join(' ')
// console.log(arrToString)


// let arrArr = arr.join(' and ')
// let arrtoString = arr.join(' and ')
// console.log( arr[0] , arr[1] , 'and' , arr[2] )


// let mtr = []
// mtr[0]='a'
// mtr[1]='b'
// console.log(mtr)


// let obj = {a: 'banana', b: 5, c: ['red', 'yellow', 'white'], d: 6}
// console.log(obj['b'] + obj['d'])

// let week = {
//     1: "monday",
//     2: "tuesday",
//     3: "wednesday",
//     4: "thursday",
//     5: "friday",
//     6: "saturday",
//     7: "sunday",
// };
// console.log(week[6])


// for(let i=1; i<=5; i++) {
//     console.log(i)
// }                        

 

// let str = 'Hello World'
// let newStr = str.toLowerCase()
// console.log(newStr)

// let count = str.length
// console.log(count)

// let colors = ["Blue", "Yellow", "Red"];
// let countarr = colors.length
// console.log(countarr)



// let arr = ['kiwi', 'orange', 'apple']
// arr.splice(0, 2, "banana");

// console.log(arr)

// let newarr = arr.slice(0, 1)

// console.log(newarr)

// for(let fruit of arr) {
//     console.log(fruit,"!")
// }



// let text = 'Hello World !'
// let newtext = text.split(' ', 1)
// console.log(newtext)



// let obj = { a: 20, b: 10, colors: ["red", "yellow", "blue"] };
// let sum = obj["b"] + obj["a"]
// console.log(sum)

// let color = obj["colors"][2]
// console.log(color)

let colors = ["Blue", "Yellow", "Red", "White", "Pink"];
colors.splice(3, 2,"green", "black");
let colorsToString = colors.join(', ').length
console.log(colorsToString)


let obj = { colors: ["red", "yellow", "blue"], b: 20, c: 10 };
let sum = obj['b']+ obj['c']
console.log(sum)


let arrOfObj = [{name: 'Jonh', age: '15'}, {name: 'Jane', age: '24'}, {name: 'Mary', age: '21'}]
let findAge = arrOfObj.find(item=>item.age>20)
console.log(findAge)


let newArr = [0, 1, "hello", { name: "Alex", age: 20 }, false];
console.log(newArr.indexOf(1))


console.log(colors.includes('green'))


let arrOfObj1 = [
    { name: "Alex", age: 19, dog: false },
    { name: "Maria", age: 30, dog: true },
    { name: "John", age: 15, dog: false },
  ];
let dogFind = arrOfObj1.map((item)=>{
    if(item.dog==false) {
        console.log(item)
    }
})

let ageFind = arrOfObj1.map((item)=>{
    if(item.age>20) {
        console.log(item)
    }
})