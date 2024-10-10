import { Component , inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { HousingLocation } from '../housinglocation';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone : true,
  imports : [
    HousingLocationComponent,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  housingLocationList: HousingLocation[] = [];
  housingService : HousingService = inject(HousingService);
  filteredLocationList : HousingLocation[] = [];

  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList : HousingLocation[]) =>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })
  }

  filterResults(text: string){
    if (!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => 
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
























