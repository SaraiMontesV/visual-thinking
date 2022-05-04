const Reader = require("./../utils/Reader");
const PartnersService = require("./../services/PartnersService");

const students = Reader.readJsonFile("visualpartners.json");

class PartnerController {
  static getAllStudents(students) {
    const allStudents = PartnersService.getAllStudents(students);
    return allStudents;
  }

  static getEmailsWithCertification(students) {
    const emailsWithCertification =
      PartnersService.getEmailsWithCertification(students);
    return emailsWithCertification;
  }

  static getCreditsUpTo500(_mission) {
    const creditsUpTo500 = PartnersService.getCreditsUpTo500(students);
    return creditsUpTo500;
  }
}

module.exports = PartnerController;
