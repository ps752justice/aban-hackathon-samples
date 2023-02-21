import config from "../config/config";
import { get } from "./api-service";
import { IPingResponse } from "./models/ping-response";

export const pingBakcend = async (): Promise<IPingResponse> => {
    const result = await get(`${config.apiUrl}/ping`);
    return {
        response: result.data,
    };
};
