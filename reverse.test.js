import reverseString from "./reverse";

describe("Returns a string in reversed order", () => {
  test("lowercase and no whitespace", () => {
    expect(reverseString("reversed")).toBe("desrever");
  });
  test("strings with spaces", () => {
    expect(reverseString("one two")).toBe("owt eno");
  });
  test("strings with numbers", () => {
    expect(reverseString("heyth3re")).toBe("er3htyeh");
  });
});
