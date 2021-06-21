import { RPGist } from "./parser";

const input = "12345"

describe("RPGIST", () => {
  it("produces the expected output", () => {
    expect(RPGist.parse(input)).toBeTruthy();
  });
});
