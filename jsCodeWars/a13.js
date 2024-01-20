// Array - #13 Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов,
// которые больше среднего значения всех элементов массива.

const initialArray = [1, 20, 13, 234, 59, 9, 40, 78];

function getAvg(array) {
  return Math.floor(
    array.reduce((acc, element) => acc + element, 0) / array.length
  );
}

function greaterThanAverage(array) {
  const avg = getAvg(array);

  return array.filter((element) => {
    return element > avg;
  });
}

function greaterThanAverage1(array) {
  const avg = getAvg(array);

  return array.reduce((acc, element) => {
    if (element > avg) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

const result = greaterThanAverage(initialArray); // Реализовать эту функцию
const result1 = greaterThanAverage1(initialArray); // Реализовать эту функцию

console.log(result); // [234, 59, 78]
console.log(result1); // [234, 59, 78]
