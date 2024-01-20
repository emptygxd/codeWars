// Array - #18 Напишите функцию, которая принимает два массива объектов с полями "имя" и "возраст" и возвращает новый массив,
// состоящий только из объектов, которые есть в обоих массивах.

const initialArray1 = [
  { name: "Viktor", age: 24 },
  { name: "Abiba", age: 35 },
  { name: "Viktor", age: 35 },
  { name: "Abiba", age: 35 },
];

const initialArray2 = [
  { name: "Viktor", age: 24 },
  { name: "Aboba", age: 16 },
  { name: "Abiba", age: 35 },
];

function unique(array1, array2) {
  const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (
        array1[i].name === array2[j].name &&
        array1[i].age === array2[j].age &&
        !newArr.includes(array2[j])
      ) {
        newArr.push(array2[j]);
        break;
      }
    }
  }
  return newArr;
}

const result = unique(initialArray1, initialArray2); // Реализовать эту функцию

console.log(result); // [{ "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 }]
