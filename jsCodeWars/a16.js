// Array - #16 Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, состоящий только из уникальных имён.

function unique(array) {
  const newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    let counter = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i].name === array[j].name || array[i].age === array[j].age) {
        counter++;
        break;
      }
    }
    if (counter === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const initialArray = [
  { name: "Viktor", age: 24 },
  { name: "Aboba", age: 16 },
  { name: "Abiba", age: 35 },
  { name: "Viktor", age: 35 },
  { name: "Abiba", age: 35 },
];

const result = unique(initialArray); // Реализовать эту функцию

console.log(result); // [{ "name": "Aboba", "age": 16 }]
