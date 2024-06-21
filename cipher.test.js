import caesarCipher from "./cipher";

describe("Caeser Cipher a text", () => {
  test("All lowercase characters", () => {
    expect(caesarCipher("hello", 2)).toBe("jgnnq");
  });
  test("Text with numbers", () => {
    expect(caesarCipher("hell0", 2)).toBe("jgnn0");
  });
  test("Text with punctuation, spaces or special characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("Text with uppercase characters", () => {
    expect(caesarCipher("hEllo", 2)).toBe("jGnnq");
  });
  test("Text with multile letter ciphers that goes past z", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Text with only one letter that goes past z", () => {
    expect(caesarCipher("aczf", 4)).toBe("egdj");
  });
});
