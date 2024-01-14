// // Array - #10 Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из уникальных элементов.

// const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1];

// function removeAllDuplicates(arr, num) {
//   arr.forEach((element, index) => {
//     if (element === num) {
//       delete arr[index];
//     }
//   });
// }

// function uniqueOnly(array) {
//   const copyArray = array.slice(0);
//   const newArray = [];
//   copyArray.forEach((element,index) => {
//     delete copyArray[index];
//     if (!copyArray.includes(element)) {
//       newArray.push(element);
//     }else{
//       removeAllDuplicates(copyArray, element);
//     }
//   })
//   return newArray.sort()
// }

// const result = uniqueOnly(initialArray); // Реализовать эту функцию

// console.log(result); // [3, 5, 6, 9]


console.log('a'==='a')