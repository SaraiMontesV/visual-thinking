class PartnersService {
  static getAllStudents(students) {
    return students;
  }

  static getEmailsWithCertification(students) {
    const studentsWithCertification = students.filter(
      (student) => student.haveCertification
    );
    const email_list = studentsWithCertification.map(
      (student) => student.email
    );
    return email_list;
  }

  static getCreditsUpTo500(students) {
    const creditsUpTo500 = students.filter((student) => student.credits > 500);
    return creditsUpTo500;
  }
}

module.exports = PartnersService;
