// Array - #12 Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, отсортированный по убыванию возраста.

const initialArray = [
  { name: "Viktor", age: 24 },
  { name: "Aboba", age: 11 },
  { name: "Abiba", age: 35 },
];

function sortByAge(array) {
  return array.sort((a, b) => {
    // if (!(a.hasOwnProperty("age") || b.hasOwnProperty("age"))) {
    return b.age - a.age;
    // } else {
    // console.log('asd')
    // }
  });
}

const result = sortByAge(initialArray); // Реализовать эту функцию

console.log(...result); // [{ "name": "Abiba", "age": 35 }, { "name": "Viktor", "age": 24 }, { "name": "Aboba", "age": 16 },]
