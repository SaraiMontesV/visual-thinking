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
}

module.exports = PartnersService;
