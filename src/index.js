function fibs(num) {
  let array = [0, 1, 1];
  while (array.length < num) {
    array.push(
      Number(array[array.length - 1]) + Number(array[array.length - 2]),
    );
  }
  return array;
}

console.log(fibs(8));

function fibsRec(num) {
  if (num == 2) return [0, 1];
  const sequence = fibsRec(num - 1);
  return [
    ...sequence,
    sequence[sequence.length - 1] + sequence[sequence.length - 2],
  ];
}

console.log(fibsRec(15));

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(leftArray, rightArray) {
  const mergedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    leftArray[0] < rightArray[0]
      ? mergedArray.push(leftArray.shift())
      : mergedArray.push(rightArray.shift());
  }
  return [...mergedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([3, 2, 4, 5, 1, 6]));
