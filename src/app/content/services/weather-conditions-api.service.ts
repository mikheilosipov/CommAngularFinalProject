import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { WeatherConditionResponse } from "../models";

@Injectable()
export class WeatherConditionsApiService {
    constructor(private http: HttpClient) {}

    getWeatherCurrentConditionsByLocationKey(locationKey: string, details: boolean) {
        return this.http.get<WeatherConditionResponse[]>(`${environment.accuWeather.currentConditionsApiBase}/${locationKey}?apikey=${environment.accuWeather.apiKey}&details=${details}`);
    }

    getWeatherIcon(weatherIconCode: string) {
        return `https://www.accuweather.com/images/weathericons/${weatherIconCode}.svg`;
    }
}

//GET /currentconditions/v1/171705?apikey=QxsLy6zC1HAeiiAu4SUYtXK7QAW8Psa1 HTTP/1.1
// Accept:
// */*
// Accept-Encoding:
// gzip
// Accept-Language:
// en-US
// Host:
// dataservice.accuweather.com
// sec-ch-ua:
// Not A;Brand";v="99
// sec-ch-ua-mobile:
// ?0
// sec-ch-ua-platform:
// Windows
// Sec-Fetch-Dest:
// empty
// Sec-Fetch-Mode:
// cors
// Sec-Fetch-Site:
// cross-site
// User-Agent:
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML
// X-Forwarded-For:
// 95.104.83.94
// X-Forwarded-Port:
// 443
// X-Forwarded-Proto:
// https



// HTTP/1.1 200 OK
// Accept:
// */*
// Accept-Encoding:
// gzip
// Accept-Language:
// en-US
// Access-Control-Allow-Headers:
// origin
// Access-Control-Allow-Methods:
// GET
// Access-Control-Allow-Origin:
// *
// Access-Control-Max-Age:
// 3628800
// Cache-Control:
// public
// Connection:
// keep-alive
// Content-Encoding:
// gzip
// Content-Type:
// application/json; charset=utf-8
// Date:
// Sat, 18 Dec 2021 19:20:36 GMT
// Expires:
// Sat, 18 Dec 2021 19:30:36 GMT
// Host:
// accuweather-api.trafficmanager.net
// Origin:
// https://developer.accuweather.com
// RateLimit-Limit:
// 50
// RateLimit-Remaining:
// 49
// Referer:
// https://developer.accuweather.com/
// sec-ch-ua:
// Not A;Brand";v="99
// sec-ch-ua-mobile:
// ?0
// sec-ch-ua-platform:
// Windows
// Sec-Fetch-Dest:
// empty
// Sec-Fetch-Mode:
// cors
// Sec-Fetch-Site:
// cross-site
// Transfer-Encoding:
// chunked
// User-Agent:
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML
// Vary:
// Accept-Encoding
// X-Forwarded-For:
// 95.104.83.94
// X-Forwarded-Port:
// 443
// X-Forwarded-Proto:
// https
// [
//   {
//     "LocalObservationDateTime": "2021-12-18T23:18:00+04:00",
//     "EpochTime": 1639855080,
//     "WeatherText": "Clear",
//     "WeatherIcon": 33,
//     "HasPrecipitation": false,
//     "PrecipitationType": null,
//     "IsDayTime": false,
//     "Temperature": {
//       "Metric": {
//         "Value": 8.9,
//         "Unit": "C",
//         "UnitType": 17
//       },
//       "Imperial": {
//         "Value": 48,
//         "Unit": "F",
//         "UnitType": 18
//       }
//     },
//     "MobileLink": "http://www.accuweather.com/en/ge/tbilisi/171705/current-weather/171705?lang=en-us",
//     "Link": "http://www.accuweather.com/en/ge/tbilisi/171705/current-weather/171705?lang=en-us"
//   }
// ]