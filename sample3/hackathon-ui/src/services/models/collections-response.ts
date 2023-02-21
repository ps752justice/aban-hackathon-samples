export interface ICollectionResponse {
    title: string;
    items: ICollectionItem[];
}

export interface ICollectionItem {
    src: string;
    alt: string;
}
