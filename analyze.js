export default function analyzeArray(arr = []) {
  let object = {};
  let sum = 0;
  object.average;
  object.min = Math.min(...arr);
  object.max = Math.max(...arr);
  object.length = arr.length;

  arr.forEach((value) => {
    sum += value;
  });
  object.average = Math.round(sum / arr.length);

  return object;
}
