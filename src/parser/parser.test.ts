import { RPGist } from "./parser";

describe("RPGIST", () => {
  describe("simple input", () => {
    const input = "12345"

    it("parses a NumberLiteral", () => {
      expect(RPGist.NumberLiteral.tryParse(input)).toEqual(12345);
    });

    it("parses a BasicValue", () => {
      expect(RPGist.BasicValue.tryParse(input)).toEqual(12345);
    });

    it("parses an Expression ", () => {
      expect(RPGist.Expression.tryParse(input)).toEqual(12345);
    });
  });
});
