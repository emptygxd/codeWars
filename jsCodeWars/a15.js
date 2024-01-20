// Array - #15 Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих подстроку "js"

const initialArray = ["js", "world", "viktor", "awdjsdc", "javes"];

function contains(array) {
  return array.filter((element) => {
    return element.includes("js");
  });
}

function contains1(array) {
  return array.reduce((acc, element) => {
    if (element.includes("js")) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = contains(initialArray); // Реализовать эту функцию
const result1 = contains1(initialArray); // Реализовать эту функцию

console.log(result); // ['js', 'awdjsdc']
console.log(result1); // ['js', 'awdjsdc']
