// const arr =[5,5,6,7,8,8,9,10,11,12,22,20]

function countUnique(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i++;
  } else {
    throw new Error("Array is Empty");
  }
}
const result = countUnique([5, 5, 6, 7, 8, 8, 9, 10]);
console.log(result);
// console.log(countUnique(arr));

// const arr = [
//     {
//         'title': 'a',
//         'value': 1,
//     },
//     {
//         'title': 'b',
//         'value': 2,
//     },
//     {
//         'title': 'c',
//         'value': 3,
//     },
// ]

// let result ={};

// // result["alamxyz"] = "abc"
// // result[arr[0].title]= arr[0].value
// // result["title"]="value";
// for(let result = 0; result<arr.length; result++){
//     console.log(arr[result].title, arr[result].value)
// }

// // console.log(result)
// // console.log(arr[0].title, arr[0].value)
console.log("Alam");
