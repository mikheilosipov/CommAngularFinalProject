import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ContentComponent } from './content.component';
import { AddCityComponent } from './add-city/add-city.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityListItemComponent } from './city-list/city-list-item/city-list-item.component';
import { CityApiService } from './services';


@NgModule({
  declarations: [
    ContentComponent,
    AddCityComponent,
    CityListComponent,
    CityDetailsComponent,
    CityListItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ContentRoutingModule
  ],
  providers: [
    CityApiService
  ]
})
export class ContentModule { }
