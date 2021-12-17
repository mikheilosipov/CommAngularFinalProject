import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCityComponent } from './add-city/add-city.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { ContentComponent } from './content.component';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'add',
    component: AddCityComponent
  },
  {
    path: ':id',
    component: CityDetailsComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [
      RouterModule
    ]
})
export class ContentRoutingModule { }