import {route} from "ziggy-js";
import {createOptions, httpRequest} from "@/Lib/fetch/implementation/Fetch.js";
import {JSON} from "@/Lib/fetch/implementation/ContentTypes.js";
import {POST, PUT} from "@/Lib/fetch/implementation/Methods.js";

export const updateUser = async (updatedUser) => {
    return await httpRequest(
        route('api.users.update', updatedUser.id),
        PUT,
        createOptions(JSON, updatedUser, JSON));
};

export const createUser = async (newUser) => {
    return await httpRequest(
        route('api.users.store'),
        POST,
        createOptions(JSON, newUser, JSON));
};
