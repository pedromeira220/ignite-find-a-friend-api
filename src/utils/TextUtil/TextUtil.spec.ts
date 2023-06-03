import { TextUtil } from "./TextUtil"

describe("Text Util suit", () => {
  it("should transform an given string to another one with only numbers", async () => {
    const string = "123string456a789"
    const expectedValue = "123456789"

    expect(TextUtil.onlyNumbers(string)).toBe(expectedValue)
  })
})
