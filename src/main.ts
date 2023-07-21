// Array
// const arr: (string | number)[] = ["SUman", 1, 2, 3]


// Tuple
// let myTuple: [string, number, boolean] = ["Suman", 12, true];

// const mixed = ["Shyam", 42, false]
// myTuple = mixed //Error

// Objects
// interface Info{
//     name?: string,
//     age: number,
//     edu:string
// }


// const user1: Info = {
//     name: "Suman",
//     age: 23,
//     edu:"Bachelor"
// }


// const userC = (user:Info) => {
//     console.log(`The Name is ${user.name?.toUpperCase()}`)
// }

/**type ,interfaces,tuple */

/**Function in TypeScript */
//Aliases

type stringOrNumber = string | number

const userId: stringOrNumber = 23;
const userId1:stringOrNumber = "S23"


// Literal Type
let userName: "Harry" |"zyan"|"Robin" ;
userName = "Harry"
userName = "zyan"
console.log(userName)