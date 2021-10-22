import { UsersController } from "../../api/controllers/usersController.js";
import { CONFIG } from "../../config/env.config";

const secretKey = CONFIG.S_KEY;
let firstUser;

describe("Check Users api functionality", function() {
    it("Check APIs greeting message", async function() {
        const response = await UsersController.getUserMainAPI();
        let message = response.greeting;
        expect(message).toEqual("Welcome to the Adonis API tutorial")
	});
    
    it("Check Users list", async function() {
		const response = await UsersController.getUsers();
        firstUser = response[0].id;
        let allUsersAmount = response.length;
        expect(allUsersAmount).toBeGreaterThan(600)
	});

    it("Check user by Id", async function() {
		const response = await UsersController.getUserById(firstUser);
        expect(response[0].username).toEqual("stan")
        expect(response[0].email).toEqual("ndagis@gmail.com")
	});

    it("Check user not existed", async function() {
		const response = await UsersController.getUserById("99192192912912");
        expect(response.length).toEqual(0)
	});

    it("Check Github Actions secrets", async function() {
		console.log("here is secret KEY: ", secretKey);
	});
});