import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityViewModel } from '../models';
import { AddCityFacade } from './add-city.facade';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss'],
  providers: [
    AddCityFacade
  ]
})
export class AddCityComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  searchKey: string = '';

  searchHasError = false;

  selectedCity$: Observable<CityViewModel> | null = null;
  // selectedCity: CityViewModel | null = null;

  constructor(
    private facade: AddCityFacade
  ) { }

  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }

    this.searchHasError = false;

    //this.facade.addToLastSearches(this.searchKey);
    this.fetchCity(this.searchKey);
  }

  fetchCity(title: string) {
    this.selectedCity$ = this.facade.fetchCity(title);
    this.selectedCity$.subscribe((city) => console.log(city));

    // this.selectedCity = {
    //   key: "city.Key",
    //   type: "city.Type",
    //   localizedName: "city.LocalizedName",
    //   englishName: "city.EnglishName"
    // };

    // const t$ = this.facade.fetchCity(title);
    // t$.subscribe((city) => {
    //       this.selectedCity = {
    //         key: city[0].Key,
    //         type: city[0].Type,
    //         englishName: city[0].EnglishName,
    //         localizedName: city[0].LocalizedName
    //       };
    //       console.log(city)
    //     });
  }

  ngOnInit(): void {
  }

}
