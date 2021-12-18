import { WeatherConditionViewModel } from ".";

export interface Region {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

export interface Country {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

export interface CitySearchResult {
    Key: string;
    Type: string;
    LocalizedName: string;
    EnglishName: string;
    region: Region;
    country: Country;
}

export interface CityViewModel {
    key: string;
    type: string;
    localizedName: string;
    englishName: string;

    weatherCondition?: WeatherConditionViewModel;
}