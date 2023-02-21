import axios, { ResponseType } from "axios";
import axiosRetry from "axios-retry";

const axiosOnce = axios.create();

axiosRetry(axios, {
    retries: 3,
    retryDelay: (retryCount) => retryCount * 1000,
});

const buildErrorResponse = (error: any): ErrorResponse => {
    return {
        data:
            error.response && error.response.data
                ? error.response.data
                : error.message,
        status:
            error.response && error.response.status
                ? error.response.status
                : -1,
    };
};

const getClient = (retry: boolean) => (retry ? axios : axiosOnce);

export const HTTP_CODE = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
};

const errorMiddleware = (error: any, url: string): ErrorResponse => {
    const errResponse = buildErrorResponse(error);

    const errorMessage = `Message: Failed to request to ${url}, Status: ${
        errResponse.status
    }, ${JSON.stringify(errResponse)}`;

    console.log(errorMessage);

    return errResponse;
};

export const get = async (
    link: string,
    headers = {},
    params = {},
    retry = true,
    responseType: ResponseType = "json"
): Promise<any> => {
    return await getClient(retry)
        .get(link, {
            headers: headers,
            params: params,
            responseType: responseType,
        })
        .then((response) => response)
        .catch((error) => {
            throw errorMiddleware(error, link);
        });
};

export const post = async (
    link: string,
    data: any,
    headers = {},
    retry = true,
    responseType: ResponseType = "json"
): Promise<any> => {
    return await getClient(retry)
        .post(link, data, {
            headers: headers,
            responseType: responseType,
        })
        .then((response) => response)
        .catch((error) => {
            throw errorMiddleware(error, link);
        });
};

export const put = async (
    link: string,
    data: any,
    headers = {},
    retry = true
): Promise<any> => {
    return await getClient(retry)
        .put(link, data, { headers: headers })
        .then((response) => response)
        .catch((error) => {
            throw errorMiddleware(error, link);
        });
};

export const patch = async (
    link: string,
    data: any,
    headers: {},
    retry = true
): Promise<any> => {
    return await getClient(retry)
        .patch(link, data, { headers: headers })
        .then((response) => response)
        .catch((error) => {
            throw errorMiddleware(error, link);
        });
};

export interface ErrorResponse {
    data: any;
    status: number;
}
