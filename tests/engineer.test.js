const Engineer = require("../library/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("Name is generated.", () => {
            const name = "Bailey";
            const nameTest = new Engineer(name, "234", "email", "github");
            expect(nameTest.getName()).toBe(name);
        });
    });

    describe("getID", () => {
        it("ID is generated.", () => {
            const eId = "234";
            const idTest = new Engineer("Bailey", eId, "email", "github");
            expect(idTest.getId()).toBe(eId);
        });
    });

    describe("getEmail", () => {
        it("Email is generated.", () => {
            const email = "test@gmail.com";
            const emailTest = new Engineer("Bailey", "234", email, "github");
            expect(emailTest.getEmail()).toBe(email);
        });
    });

    describe("getGithub", () => {
        it("GitHub is generated.", () => {
            const github = "Baystaub";
            const githubTest = new Engineer("Bailey", 234, "email", github);
            expect(githubTest.getGithub()).toBe(github);
        });
    });

    describe("getRole", () => {
        it("Role is generated.", () => {
            const roleString = "Engineer";
            const roleTest = new Engineer("Bailey", 1, "test@gmail.com", "github");
            expect(roleTest.getRole()).toBe(roleString);
        });
    });
});