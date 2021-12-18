export interface WeatherConditionResponse {
    WeatherText: string;
    WeatherIcon: string;
    HasPrecipitation: boolean;
    PrecipitationType?: PrecipitationTypeReponse;
    IsDayTime: boolean;
    Temperature: TemperatureResponse;
    RelativeHumidity?: number;
    IndoorRelativeHumidity?: number;
}

export interface TemperatureResponse {
    Metric: TemperatureTypeResponse;
    Imperial: TemperatureTypeResponse;
}

export interface TemperatureTypeResponse {
    Value: number;
    Unit: UnitResponse;
    UnitType: string;
}

export enum UnitResponse {
    C = 'C',
    F = 'F'
}

export enum PrecipitationTypeReponse {
    Rain = 'Rain',
    Snow = 'Snow',
    Ice = 'Ice',
    Mixed = 'Mixed'
}

export interface WeatherConditionViewModel {
    WeatherText: string;
    WeatherIcon: string;
    WeatherIconUrl: string;
    HasPrecipitation: boolean;
    PrecipitationType?: PrecipitationTypeReponse;
    IsDayTime: boolean;
    Temperature: TemperatureResponse;
    RelativeHumidity?: number;
    IndoorRelativeHumidity?: number;
}