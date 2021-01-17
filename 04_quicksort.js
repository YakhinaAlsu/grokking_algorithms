//просуммировать значения массива

function sum(array) {
    if (array.length == 1) return array[0];
    return array[0] + sum(array.slice(1));
  }