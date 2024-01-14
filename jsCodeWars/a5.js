// Array - #5 Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, которые повторяются более одного раза.

const initialArray = [1, 4, 2, 3];

function removeAllDuplicates(arr, num) {
  arr.forEach((element, index) => {
    if (element === num) {
      delete arr[index];
    }
  });
}

function duplicatesOnly(array) {
  const copyArray = array.slice(0);
  const newArray = [];
  copyArray.forEach((element, index) => {
    delete copyArray[index];
    if (copyArray.includes(element)) {
      removeAllDuplicates(copyArray, element);
      newArray.push(element);
    }
  });
  return newArray.sort();
}

const result = duplicatesOnly(initialArray); // Реализовать эту функцию
console.log(result); // [1, 2, 4]
