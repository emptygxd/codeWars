// Array - #2 Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, длина которых больше 5 символов

const initialArray = ["Say", "hello", "to", "world", "javascript", "students"];

function longerThanFive(array) {
  return array.reduce((acc, element) => {
    if (element.length > 5) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = longerThanFive(initialArray); // Реализовать эту функцию

console.log(result); // Выведет ['javascript', 'students']
