import config from "../config/config";
import { get } from "./api-service";
import { IDeathResponse } from "./models/aban-response";

export const getAbanDeaths = async (
    searchToken: string,
    languageCode: string
): Promise<IDeathResponse> => {
    const result = await get(
        `${config.apiUrl}/people/ab98/${languageCode}?search=${
            searchToken ? `${searchToken}` : ""
        }`
    );
    return result.data;
};
