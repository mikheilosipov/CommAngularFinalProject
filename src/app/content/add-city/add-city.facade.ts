import { Injectable } from "@angular/core";
import { finalize, map, of, switchMap, tap, EMPTY } from "rxjs";
import { LoadingService } from "src/app/services/loading.service";
import { CitySearchResult, CityViewModel, WeatherConditionResponse, WeatherConditionViewModel } from "../models";
import { CityApiService, WeatherConditionsApiService } from "../services";

@Injectable()
export class AddCityFacade {
    constructor(
        private loadingService: LoadingService,
        private cityApiService: CityApiService,
        private weatherConditionsService: WeatherConditionsApiService
    ) {}

    mapCity(city: CitySearchResult[]): CityViewModel {
        const firstCity = city[0];

        return {
            key: firstCity.Key,
            type: firstCity.Type,
            localizedName: firstCity.LocalizedName,
            englishName: firstCity.EnglishName
        }
    }

    mapWeatherCondition(weatherConditions: WeatherConditionResponse[]): WeatherConditionViewModel {
        const firstWeatherCondition = weatherConditions[0];

        return {
            WeatherText: firstWeatherCondition.WeatherText,
            WeatherIcon: firstWeatherCondition.WeatherIcon,
            Temperature: firstWeatherCondition.Temperature,
            IsDayTime: firstWeatherCondition.IsDayTime,
            RelativeHumidity: firstWeatherCondition.RelativeHumidity,
            HasPrecipitation: firstWeatherCondition.HasPrecipitation,
            PrecipitationType: firstWeatherCondition.PrecipitationType,
            IndoorRelativeHumidity: firstWeatherCondition.IndoorRelativeHumidity,
            WeatherIconUrl: this.weatherConditionsService.getWeatherIcon(firstWeatherCondition.WeatherIcon)
            
        }
    }

    getWeatherCurrentConditionsByLocationKey(locationKey: string) {
        return this.weatherConditionsService
                    .getWeatherCurrentConditionsByLocationKey(locationKey, false)
                    .pipe(
                        map<WeatherConditionResponse[], WeatherConditionViewModel>(
                            (weatherCondition) => this.mapWeatherCondition(weatherCondition)
                        )
                    )
    }

    fetchCity(cityName: string) {
        this.loadingService.start();
        return this.cityApiService.searchCityByName(cityName)
            .pipe(
                // tap((city) => {
                //     console.log(city)
                // }),
                switchMap((cities) => {
                    const firstCity = cities[0];
                    if(!firstCity)
                        //return of({} as CityViewModel);
                        return EMPTY;

                    return this.getWeatherCurrentConditionsByLocationKey(firstCity.Key).pipe(
                        map<WeatherConditionViewModel, CityViewModel>((weatherCondition) => {
                                const cityView = this.mapCity(cities);
                                cityView.weatherCondition = weatherCondition;
                                return cityView;
                            })
                    )
                }),
                finalize(() => {
                    this.loadingService.stop();
                  })
            );
        // return this.cityApiService.searchSityByName(cityName)
        // .pipe(
        //     finalize(() => {
        //         this.loadingService.stop();
        //       })
        // );
    }
}
