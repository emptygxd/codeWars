// Array - #16 Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, состоящий только из уникальных имён.

function unique(array) {
  // return array.filter((element) => {
  //   console.log(array)
  //   console.log(element.name);
  //   console.log(!array.includes(element.name));
  //   return !array.includes(element.name);
  // });
  array.forEach();
  array.forEach((element) => {
    console.log(Object.values(element));
    console.log(Object.values(element).includes(element.name));
  });
  return array.reduce((acc, element) => {});
  //   if (Object.values(array.includes(element.name))){
  //     return [...acc, element]
  //   }
  //   return acc
  // },[])
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
