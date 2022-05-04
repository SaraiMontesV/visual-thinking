const PartnerController = require("./../../lib/controllers/PartnerController");
const Reader = require("../../lib/utils/Reader");
const students = Reader.readJsonFile("./test/test_visualpartners.json");


describe("Unit Test for PartnersController", () => {

    test("1) Validate length of students", () => {
        const allStudents = PartnerController.getAllStudents(students);
        expect(allStudents.length).toBeGreaterThanOrEqual(0);
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

      test("3) Get all emails not to be null", () => {
        const allEmails = PartnerController.getEmailsWithCertification(students);
        expect(allEmails).not.toBeNull();
      });
    
      test("4) Get students with credits up to 500", () => {
        const creditsUpTo500 = PartnerController.getCreditsUpTo500(students);
        expect(creditsUpTo500).not.toBeNull();
      });
})