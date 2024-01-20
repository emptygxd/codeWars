// Array - #19 Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих только буквы латинского алфавита.

const initialArray = ["Say", "привет", "to", "АБЦ Wold"];

function latinAlphabetOnly(array) {
  const re = /^[a-zA-Z]+$/;
  return array.filter((element) => {
    return re.test(String(element).toLowerCase());
  });
}

function latinAlphabetOnly1(array) {
  const re = /^[a-zA-Z]+$/;
  return array.reduce((acc, element) => {
    if (re.test(String(element).toLowerCase())) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = latinAlphabetOnly(initialArray); // Реализовать эту функцию
const result1 = latinAlphabetOnly1(initialArray); // Реализовать эту функцию

console.log(result); // ['Say', 'to']
console.log(result1); // ['Say', 'to']
