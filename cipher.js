export default function caesarCipher(text = "", shiftNum = 0) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let cipheredText = "";
  for (const char of text) {
    if (!isLetter(char)) {
      // if the character is a number
      cipheredText += char;
    } else {
      if (char === char.toUpperCase()) {
        // run if uppercase letter
        switch (alphabet.at(alphabet.indexOf(char.toLowerCase()) + shiftNum)) {
          case undefined:
            const difference =
              alphabet.indexOf(char.toLowerCase()) + shiftNum - alphabet.length;
            cipheredText += alphabet.at(difference).toUpperCase();
            break;

          default:
            cipheredText += alphabet
              .at(alphabet.indexOf(char.toLowerCase()) + shiftNum)
              .toUpperCase();
            break;
        }
      } else {
        // run if lowercase letter
        switch (alphabet.at(alphabet.indexOf(char) + shiftNum)) {
          case undefined:
            const difference =
              alphabet.indexOf(char) + shiftNum - alphabet.length;
            cipheredText += alphabet.at(difference);
            break;
          default:
            cipheredText += alphabet.at(alphabet.indexOf(char) + shiftNum);
            break;
        }
      }
    }
  }
  return cipheredText;
}

function isLetter(character) {
  return /[A-Za-z]+/.test(character);
}
