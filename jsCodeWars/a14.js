// Array - #14 Напишите функцию, которая принимает два массива чисел и возвращает новый массив, состоящий из элементов первого массива, которых нет во втором массиве.

const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9];
const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40];

function compare(array1, array2) {
  return array1.reduce((acc, element) => {
    if (!array2.includes(element)) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

function compare1(array1, array2) {
  const newArr = [];
  array1.forEach((element) => {
    if (!array2.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

function compare2(array1, array2) {
  return array1.filter((element) => {
    return !array2.includes(element);
  });
}

const result = compare(initialArray1, initialArray2); // Реализовать эту функцию
const result1 = compare1(initialArray1, initialArray2); // Реализовать эту функцию
const result2 = compare2(initialArray1, initialArray2); // Реализовать эту функцию

console.log(result); // [2, 6]
console.log(result1); // [2, 6]
console.log(result2); // [2, 6]
