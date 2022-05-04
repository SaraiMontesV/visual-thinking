const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual thinking Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const allUsers = PartnerController.getAllStudents();
    response.json(allUsers);
});

app.get("/v1/students/emails", (request, response) => {
    const emailsWithCertification =
    PartnerController.getEmailsWithCertification();
    response.json(emailsWithCertification);
});

app.get("/v1/students/credits", (request, response) => {
    const credistUpto500 =
    PartnerController.getCreditsUpTo500();
    response.json(credistUpto500);
});


app.listen(port, () => {
    console.log(`Visual thinking API in localhost:${port}`);
});
