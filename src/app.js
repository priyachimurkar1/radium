// 1.Folder/ src/ app.js
// Module1 : src/logger.js

// log (name) -> print name
// welcome() -> Welcome to my application. I am this , i am functionup.
// url (variable) -> print the url in app.js

// 2.Module 2 : src/util/helper.js

// printDate() : prints the current date
// printMonth() : prints the current month
// getBatchInfo() : print batch name, week#, Day#, the topic being taught today
// 3.

// Module 3: Folder/validator/formatter.js

// trim() : calls the trim function on a string [Call trim on your string]
// changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on your string]
// changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on your string]
// All the functions should called from app.jAll the variables/constants should be printed on console in app.js
// 4.
// 1.Create an array of strings containing the names all the months 
// of a year and split the array into 4 equally sized sub-arrays using the chunk function
// 2.Using the tail function, return the last n-1 elements of an array containing the first 10 odd numbers
// 3. Create 5 arrays of numbers containing a few duplicate values. 
// Using the function union create a merged array with only unique values
//4. Use the function fromPairs to create a object contating key value pairs.
//  For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

const loggerobj = require('./logger')
const helperObj = require('./util/helper')
const formatterObj = require('../validator/formatter')
 const obj =require('underscore')
const obj2 =require('lodash')

loggerobj.Logname('  module system')
loggerobj.printWelcomeMessage()
console.log(loggerobj.loggerEndpoint)
console.log("-----------------------------")
helperObj.getDate()
helperObj.getMonth()
helperObj.getBatchInfo()
console.log("--------------------------")
formatterObj.trimInput()
formatterObj.changeToLowerCase()
formatterObj.changeToUpperCase()
console.log("--------------------------")
console.log(obj.first([5, 4, 3, 2, 1]))
console.log(obj.last(["abc","bcd","mam"]))
console.log('------------------------------------------------------')
console.log(obj2.chunk(['jan','feb','mar','apr','may','june','jul','aug','sep','oct','nov','dec']),4)
console.log('------------------------------------------------------')
console.log(obj2.tail([1,3,5,7,9,11,13,15,17,19]),10)
console.log(obj2.union([1,2],[2,3],[3,4],[4,5],[5,6],[6,7]))
console.log(obj2.fromPairs([["horror","the shining"],["drama","titanic"],["thirller","shutter island"],["fantasy","pans labyrinth"]]))