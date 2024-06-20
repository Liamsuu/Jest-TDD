export default function reverseString(value = "") {
  let reversedCharArr = [];
  for (let x = value.length - 1; x > -1; x--) {
    reversedCharArr.push(value.charAt(x));
  }
  return reversedCharArr.join("");
}
