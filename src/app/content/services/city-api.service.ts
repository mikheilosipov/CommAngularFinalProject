import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { CitySearchResult } from "../models";

@Injectable()
export class CityApiService {
    constructor(private http: HttpClient) {}

    searchSityByName(cityName: string) {
        return this.http.get<CitySearchResult[]>(`${environment.accuWeather.locationsApiBase}/cities/search?apikey=${environment.accuWeather.apiKey}&q=${cityName}`);
    }
}