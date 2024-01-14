// Array - #3 Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив,
// состоящий только из объектов, у которых возраст больше 18 лет

const initialArray = [
  { name: "Viktor", age: 24 },
  { name: "qwedq", age: 14 },
  { name: "asc", age: 25 },
  { name: "ascxa", age: 44 },
  { name: "Aboba", age: 16 },
];

function adultOnly(array) {
  return array.reduce((acc, element) => {
    if (element.age > 18) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = adultOnly(initialArray); // Реализовать эту функцию

console.log(result); // Выведет [{ "name": "Viktor", "age": 24 }]
