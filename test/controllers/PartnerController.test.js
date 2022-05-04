const PartnerController = require("./../../lib/controllers/PartnerController");

describe("Unit Test for PartnersController", () => {
    test("1) Validate length of students", () => {
        const allStudents = PartnerController.getAllStudents();
        expect(allStudents.length).toBeGreaterThanOrEqual(0);
    });

    test("2) Verifying properties of students ", () => {
        const student = [
            {
                id: "6264d5d864550a6a867d8e22",
                name: "Rosanne",
                email: "Juliette@visualpartnership.xyz",
                credits: 469,
                enrollments: ["Visual Thinking Avanzado"],
                previousCourses: 3,
                haveCertification: true,
            },
        ];
        expect(student[0]).toEqual(
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
        const allEmails = PartnerController.getEmailsWithCertification();
        expect(allEmails).not.toBeNull();
    });

    test("4) Get students with credits up to 500", () => {
        const creditsUpTo500 = PartnerController.getCreditsUpTo500();
        expect(creditsUpTo500).not.toBeNull();
    });
});
