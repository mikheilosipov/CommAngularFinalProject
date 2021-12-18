import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { CitySearchResult } from "../models";

@Injectable()
export class CityApiService {
    constructor(private http: HttpClient) {}

    searchCityByName(cityName: string) {
        return this.http.get<CitySearchResult[]>(`${environment.accuWeather.locationsApiBase}/cities/search?apikey=${environment.accuWeather.apiKey}&q=${cityName}`);
    }
}

//Request
// GET /locations/v1/cities/search?apikey=QxsLy6zC1HAeiiAu4SUYtXK7QAW8Psa1&q=Tbilisi HTTP/1.1
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

//Response
// HTTP/1.1 200 OK
// Accept:
// */*
// Accept-Encoding:
// gzip
// Accept-Language:
// en-US
// Access-Control-Allow-Credentials:
// true
// Access-Control-Allow-Headers:
// origin
// Access-Control-Allow-Methods:
// GET
// Access-Control-Allow-Origin:
// *
// Access-Control-Max-Age:
// 3628800
// Akamai-GRN:
// 0.52deda17.1639764075.74273cf0
// Cache-Control:
// public
// Connection:
// keep-alive
// Content-Encoding:
// gzip
// Content-Type:
// application/json; charset=utf-8
// Date:
// Fri, 17 Dec 2021 18:01:15 GMT
// Expires:
// Sat, 18 Dec 2021 17:47:31 GMT
// Host:
// api.accuweather.com
// Origin:
// https://developer.accuweather.com
// RateLimit-Limit:
// 50
// RateLimit-Remaining:
// 47
// Referer:
// https://developer.accuweather.com/
// Request-Context:
// appId=cid-v1:cc223195-bccf-4201-9cde-374567896e20
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
//     "Version": 1,
//     "Key": "171705",
//     "Type": "City",
//     "Rank": 20,
//     "LocalizedName": "Tbilisi",
//     "EnglishName": "Tbilisi",
//     "PrimaryPostalCode": "",
//     "Region": {
//       "ID": "ASI",
//       "LocalizedName": "Asia",
//       "EnglishName": "Asia"
//     },
//     "Country": {
//       "ID": "GE",
//       "LocalizedName": "Georgia",
//       "EnglishName": "Georgia"
//     },
//     "AdministrativeArea": {
//       "ID": "TB",
//       "LocalizedName": "Tbilisi",
//       "EnglishName": "Tbilisi",
//       "Level": 1,
//       "LocalizedType": "City",
//       "EnglishType": "City",
//       "CountryID": "GE"
//     },
//     "TimeZone": {
//       "Code": "GET",
//       "Name": "Asia/Tbilisi",
//       "GmtOffset": 4,
//       "IsDaylightSaving": false,
//       "NextOffsetChange": null
//     },
//     "GeoPosition": {
//       "Latitude": 41.722,
//       "Longitude": 44.783,
//       "Elevation": {
//         "Metric": {
//           "Value": 447,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "Imperial": {
//           "Value": 1466,
//           "Unit": "ft",
//           "UnitType": 0
//         }
//       }
//     },
//     "IsAlias": false,
//     "SupplementalAdminAreas": [
//       {
//         "Level": 2,
//         "LocalizedName": "Tbilisi",
//         "EnglishName": "Tbilisi"
//       }
//     ],
//     "DataSets": [
//       "AirQualityCurrentConditions",
//       "AirQualityForecasts",
//       "DailyPollenForecast",
//       "ForecastConfidence"
//     ]
//   }
// ]