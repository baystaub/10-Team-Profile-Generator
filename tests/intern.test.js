const Intern = require('../library/Intern');

describe("Intern", () => {
    describe("getName", () => {
        it("Name is generated.", () => {
            const name = "Kelsea";
            const nameTest = new Intern(name, "345", "email", "github");
            expect(nameTest.getName()).toBe(name);
        });
    });

    describe("getID", () => {
        it("ID is generated.", () => {
            const eId = "345";
            const idTest = new Intern("Kelsea", eId, "email", "github");
            expect(idTest.getId()).toBe(eId);
        });
    });

    describe("getEmail", () => {
        it("Email is generated.", () => {
            const email = "test@gmail.com";
            const emailTest = new Intern("Kelsea", "345", email, "github");
            expect(emailTest.getEmail()).toBe(email);
        });
    });

    describe("getSchool", () => {
        it("School is generated.", () => {
            const school = "University of Denver";
            const schoolTest = new Intern("Kelsea", "345", "test@gmail.com", school);
            expect(schoolTest.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("Role is generated.", () => {
            const roleString = "Intern";
            const roleTest = new Intern("Kelsea", 1, "test@gmail.com", "github");
            expect(roleTest.getRole()).toBe(roleString);
        });
    });
});