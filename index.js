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



let str = 'Hello World'
let newStr = str.toLowerCase()
console.log(newStr)

let count = str.length
console.log(count)

let colors = ["Blue", "Yellow", "Red"];
let countarr = colors.length
console.log(countarr)



let arr = ['kiwi', 'orange', 'apple']
arr.splice(0, 2, "banana");

console.log(arr)

let newarr = arr.slice(0, 1)

console.log(newarr)

for(let fruit of arr) {
    console.log(fruit,"!")
}



let text = 'Hello World !'
let newtext = text.split(' ', 1)
console.log(newtext)
