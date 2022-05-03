const Reader = require("../../lib/utils/Reader");

describe("Unit Test for Reader", () => {
  test("1) Reading a json file", () => {
    const explorers = Reader.readJsonFile("./test/test_visualpartners.json");
    expect(explorers).not.toBeNull();
  });
});