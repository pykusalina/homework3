// Task 1
// const array = [2, 3, 4, 5];
//  let multy = 1;
// for( let i = 0; i < array.length; i++){
//     multy *= array[i];
// }
// console.log(multy);
// let i = 0;
// while( i < array.length) {
//     multy *= array[i];
//     console.log(multy);
//     i++;
// }
 
// Task 2
// for(let i = 0; i < 15; i++){
//     if ( i == 0, 2, 4, 6, 8, 10) {
//         alert('even');
//     } else( i == 1, 3, 5, 7, 9) 
//         alert('odd');
// }


// Task 3
// function randArray(k) {
// const num = [-1, 0, 1, 10, 100, 500, 600];

// num.map(function(x){
//     if(x > 1 || x < 500){
//        var k = [x];
//        console.log(k);
//     }
//   })
// }
// for (let i = 0; i < k.length; i++) {
//     console.log(k[i]);
// }


// Task 4
// a = 2;
// b = 2;
// function raiseToDegree(a,b) {
//     return a ** b
// }
// console.log(raiseToDegree(a,b));


// Task 5
//  function findMin(){
//     let result = 1;
//     for(let i = 0; i < arguments.length; i++) {
//          result = Math.min(i)
//     }
//     console.log(result);
//  };
//  findMin();

// Task 6
// let num = [1, 2, 3, 5, 11];

// function findUnique(arr) {
//     let result = [];

//     for (let num of arr) {
//         if (!result.includes(num)) {
//           result.push(num);
//           console.log(true);
//         } else {
//             return false
//         }
//       }
//       return result;
// }
//console.log(findUnique(num));


// // Task 7
// let array = [1,2,3,4,5];
// Array.prototype.last = function() {
//  return this[this.length - 1];
// }
// array.last();



// Task 8
// function upperCase(str) {
//     let array = str.split(' ');
//     let newArray = [];

//     for(let i = 0; i < array.length; i++) {
//         newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//     }
//     return newArray.join(' ');
// }
// console.log(upperCase('i love java script'));