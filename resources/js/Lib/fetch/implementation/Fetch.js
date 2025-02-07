import {jsonBodyParser, jsonResponseParser} from "@/Lib/fetch/implementation/Parsers.js";
import {JSON} from "@/Lib/fetch/implementation/ContentTypes.js";
import Cookies from 'js-cookie';

const contentTypeHeaders = {
    [JSON]: {"Content-Type": "application/json"}
};
const requestParsers = {
    [JSON]: jsonBodyParser
};
const responseInformation = {
    [JSON]: {
        responseParser: jsonResponseParser,
        acceptHeader: {"Accept": "application/json"}
    }
};
const assignIfTruthy = (target, source) => {
    if (source) {
        Object.assign(target, source);
    }
};
export const createOptions = (contentType, data, resultContentType) => {
    const options = {requestOptions: {headers: {}}};
    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const contentTypeHeader = contentTypeHeaders[contentType] ?? null;
    const requestParser = requestParsers[contentType] ?? null;
    let {acceptHeader, responseParser} = responseInformation[resultContentType] ?? {
        acceptHeader: null,
        responseParser: null
    };
    assignIfTruthy(options.requestOptions.headers, acceptHeader);
    assignIfTruthy(options.requestOptions.headers, contentTypeHeader);
    assignIfTruthy(options.requestOptions.headers, xsrfToken ? {"X-XSRF-TOKEN": xsrfToken} : null);
    assignIfTruthy(options.requestOptions, data ? {data: requestParser(data)} : null);
    assignIfTruthy(options, responseParser ? {responseParser} : null);
    return options;
};
axios.get('/sanctum/csrf-cookie');
export const httpRequest = async (url, method, options) => {
    const {requestOptions} = options;
    const response = await window.axios.request({
        url,
        method,
        ...requestOptions
    });
    if (!(response.data)) {
        return [response, null];
    }
    const {responseParser} = options;
    if (!responseParser || !response.headers.get('Content-Type')?.includes(options.requestOptions.headers['Accept'])) {
        return [response];
    }
    let parsedData = responseParser(response);
    if (!(parsedData instanceof Promise)) {
        return [response, parsedData];
    }
    parsedData = await parsedData;
    return [response, parsedData];
};
