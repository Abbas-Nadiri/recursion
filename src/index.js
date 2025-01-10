function fibs(num) {
  let array = [0, 1, 1];
  while (array.length < num) {
    array.push(
      Number(array[array.length - 1]) + Number(array[array.length - 2]),
    );
  }
  return array;
}

//console.log(fibs(8));

function fibsRec(num) {
    if (num == 2) return [0, 1];
    const sequence = fibsRec(num - 1);
    return [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]];
}
console.log(fibsRec(15));
