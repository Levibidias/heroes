import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList:HousingLocation[] = 
  [
    {
      "id":0,
      "name":"Acme Fresh Start Housing",
      "city":"Chicago",
      "state":"IL",
      "photo":"/assets/location-pin",
      "availableUnits":4,
      "wifi":true,
      "laundry":true
    },
    {
      "id":1,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":2,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":3,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":4,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":5,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":6,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":7,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":8,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":9,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/location-pin",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
  ];
  constructor() { }

  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationById(id:number): HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id===id);

  }
}
