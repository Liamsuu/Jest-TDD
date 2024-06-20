import capitalize from "./capitalize.js";

describe("Capitalize 1st character in string value", () => {
  test("all lower case characters", () => {
    expect(capitalize("capitalized")).toBe("Capitalized");
  });
  test("mixed upper and lowercase values", () => {
    expect(capitalize("tEsT")).toBe("TEsT");
  });
  test("strings with multiple words", () => {
    expect(capitalize("first second")).toBe("First second");
  });
});
