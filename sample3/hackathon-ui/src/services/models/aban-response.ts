export interface IPerson {
    id: string;
    full_name: string;
    age: string;
    date: string;
    province: string;
    province_id: number;
    city: string;
    cause: string;
    thumb_url: string;
    image_url: string;
    event: string;
}
export interface IProvinceRecord {
    provinceId: number;
    province: string;
    count: number;
}

export interface IDeathResponse {
    people: IPerson[];
    provinceRecords: IProvinceRecord[];
}
