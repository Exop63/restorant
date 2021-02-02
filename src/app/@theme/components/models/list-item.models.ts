
export interface Image {
    itemType: string;
    itemId: string;
    imageSize: string;
    base64: string;
    storeId: string;
}

export interface Location {
    type: string;
    coordinates: number[];
}

export interface GeoLocation {
    approve: boolean;
    latitude: number;
    longitude: number;
}

export interface WorkingHour {
    day: number;
    open: string;
    close: string;
}

export interface StoreInfo {
    id: string;
    geoLocation: GeoLocation;
    userPoint: number;
    workingHours: WorkingHour[];
    status: string;
    rate: number;
    minOrderPrice: number;
}

export interface FoodItem {
    id: string;
    title: string;
    text: string;
    type: string;
    images: Image[];
    location: Location;
    isDinner: boolean;
    isDelivery: boolean;
    storeInfo: StoreInfo;
    categoryId: string;
}

export interface FoodParam {
    skip: number;
    limit: number;
    latitude: number;
    longitude: number;
}
export interface Status {
    isLoading: boolean;
    isEnd: boolean;
}
