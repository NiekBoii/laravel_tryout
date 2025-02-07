import {createOptions, httpRequest} from "@/Lib/fetch/implementation/Fetch.js";
import {POST} from "@/Lib/fetch/implementation/Methods.js";
import {JSON} from "@/Lib/fetch/implementation/ContentTypes.js";

export const userLoginRequest = async (credentials) => {
    return await httpRequest(
        route('login'),
        POST,
        createOptions(JSON, credentials, JSON));
};

export const userLogoutRequest = async () => {
    return await httpRequest(
        route('logout'),
        POST,
        createOptions(JSON, null, JSON));
};
