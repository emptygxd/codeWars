// Array - #7 Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, отсортированный по возрастанию возраста.

const initialArray = [
  { name: "1243e", age: 16 },
  { name: "Viktor", age: 24 },
  { name: "Aboba", age: 16 },
  { name: "Abiba", age: 35 },
  { name: "fty", age: 10 },
  { name: "jghj", age: 102 },
  { name: "ser", age: 333 },
];

function sortByAge(array) {
  return array.sort((a, b) => {
    return a.age - b.age;
  });
}

const result = sortByAge(initialArray); // Реализовать эту функцию

console.log(result); // [{ "name": "Aboba", "age": 16 }, { "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 },]
