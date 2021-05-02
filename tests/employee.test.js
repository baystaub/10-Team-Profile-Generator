const Employee = require("../Library/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("Name is generated.", () => {
            const name = "Bailey";
            const nameTest = new Employee(name, "123", "staubbm@gmail.com");
            expect(nameTest.getName()).toBe(name);
        });
    });

    describe("getID", () => {
        it("ID is generated.", () => {
            const eId = "123";
            const idTest = new Employee("Bailey", eId, "staubbm@gmail.com");
            expect(idTest.getId()).toBe(eId);
        });
    });

    describe("getEmail", () => {
        it("Email is generated.", () => {
            const email = "staubbm@gmail.com";
            const idTest = new Employee("Bailey", "123", email);
            expect(idTest.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it("Role is generated", () => {
            const roleString = "Employee";
            const roleTest = new Employee("Bailey", 1, "staubbm@gmail.com");
            expect(roleTest.getRole()).toBe(roleString);
        });
    });
});