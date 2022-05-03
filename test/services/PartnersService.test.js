const PartnersService = require("../../lib/services/PartnersService");
const Reader = require("../../lib/utils/Reader");
const students = Reader.readJsonFile("./test/test_visualpartners.json");

describe("Unit test for Partner Service", () => {
  test("1) Get all students not to be null", () => {
    const allStudents = PartnersService.getAllStudents(students);
    expect(allStudents).not.toBeNull();
  });

  test("2) Verifying properties of students ", () => {
    expect(students[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
        credits: expect.any(Number),
        haveCertification: expect.any(Boolean),
        previousCourses: expect.any(Number),
      })
    );
  });
});
