// Array - #20 Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, у которых индекс чётный.

const initialArray = [19, 1, 3, 4, 5, 6, 20, 8];

function evenIndexOnly(array) {
  return array.filter((element, index) => {
    return index % 2 === 0;
  });
}

function evenIndexOnly1(array) {
  return array.reduce((acc, element, index) => {
    if (index % 2 === 0) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = evenIndexOnly(initialArray); // Реализовать эту функцию
const result1 = evenIndexOnly1(initialArray); // Реализовать эту функцию

console.log(result); // Выводит [19, 3, 5, 20]
console.log(result1); // Выводит [19, 3, 5, 20]
