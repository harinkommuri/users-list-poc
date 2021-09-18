import httpService from "./http";

class UsersService {
    getUsersList() {
        const endPoint = "users";
        return httpService.get(endPoint);
    }

    getUserDetails(userId) {
        const endPoint = `users/${userId}`;
        return httpService.get(endPoint);
    }
}

export default new UsersService();