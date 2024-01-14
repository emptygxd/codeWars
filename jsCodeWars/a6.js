// Array - #6 Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из первых букв каждой строки.

const initialArray = ["Say", "hello", "to", "world"];

function firstLetters(array) {
  return array.reduce((acc, element) => {
    return [...acc, element.slice(0, 1)];
  }, []);
}

const result = firstLetters(initialArray); // Реализовать эту функцию

console.log(result); // ['S', 'h', 't', 'w']
