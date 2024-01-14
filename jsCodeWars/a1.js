// Array - #1 Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из четных чисел
const initialArray = [2, 2, 3, 4, 5, 6, 7, 8];

function evenNumbersOnly(array) {
  return array.reduce((acc, element) => {
    if (element % 2 === 0) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = evenNumbersOnly(initialArray); // Реализовать эту функцию

console.log(result); // Выводит [2, 4, 6, 8]
