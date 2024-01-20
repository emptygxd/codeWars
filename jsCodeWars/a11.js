// Array - #11 Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, начинающихся с заглавной буквы.

const initialArray = ["Say", "hello", "to", "World"];

function uppercaseOnly(array) {
  return array.reduce((acc, element) => {
    if (element[0] === element[0].toUpperCase()) {
      return [...acc, element[0]];
    }
    return acc;
  }, []);
}

const result = uppercaseOnly(initialArray); // Реализовать эту функцию

console.log(result); // ['S', 'W']
