import { CONFIG } from "../../config/env.config";
import { ApiRequest } from "../apiRequest"

const baseUrl = CONFIG.API_URL;

export class UsersController {
    static async getUserMainAPI(usertId) {
        return (
            await new ApiRequest()
                .url(baseUrl)
                .send()
        ).body;
    }
    
    static async getUsers() {
        return (
            await new ApiRequest()
                .url(baseUrl + "/user/get")
                .send()
        ).body;
    }

    static async getUserById(userId) {
        return (
            await new ApiRequest()
                .url(baseUrl + "/user/get?id=" + userId)
                .send()
        ).body;
    }
    
    static async createUser(userId, json) {
        return (
            await new ApiRequest()
                .url(baseUrl + "/user/" + userId)
                .method("POST")
                .body(json)
                .send()
        ).body;
    }
}