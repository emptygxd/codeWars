// Array - #4 Напишите функцию, которая принимает два массива чисел и возвращает новый массив, состоящий из элементов,
// которые есть в обоих массивах.
//Тут есть много решений, предоставьте как минимум 3 разных.

const initialArray2 = [1, 2, 3];
const initialArray3 = [4, 5, 6];

function combine1(array1, array2) {
  return array1.concat(array2);
}

function combine2(array1, array2) {
  return array2.reduce((array1, element) => {
    return [...array1, element];
  }, array1);
}

function combine3(array1, array2) {
  return [...array1, ...array2];
}

const resultC1 = combine1(initialArray2, initialArray3); // Реализовать эту функцию
const resultC2 = combine2(initialArray2, initialArray3); // Реализовать эту функцию
const resultC3 = combine3(initialArray2, initialArray3); // Реализовать эту функцию

console.log(resultC1); // [1, 2, 3, 4, 5, 6]
console.log(resultC2); // [1, 2, 3, 4, 5, 6]
console.log(resultC3); // [1, 2, 3, 4, 5, 6]
