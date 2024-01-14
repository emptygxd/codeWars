// Array - #8 Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

const initialArray = [1, 2, 3, 4, 5];

function sum(array) {
  return array.reduce((acc, element) => {
    return acc + element;
  }, 0);
}

const result = sum(initialArray); // Реализовать эту функцию

console.log(result); // 15
