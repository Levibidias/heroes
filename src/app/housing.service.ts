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
      "photo":"/assets/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg",
      "availableUnits":4,
      "wifi":true,
      "laundry":true
    },
    {
      "id":1,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/frames-for-your-heart-vbSRUrNm3Ik-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":2,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":3,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":4,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/grant-durr-8N6s3Fmw-h0-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":5,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/r-architecture-0tKCSyLXqQM-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":6,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":7,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/r-architecture-wot0Q5sg91E-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":8,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/stephan-bechert-yFV39g6AZ5o-unsplash.jpg",
      "availableUnits":0,
      "wifi":false,
      "laundry":true
    },
    {
      "id":9,
      "name":"A113 Transitional Housing",
      "city":"Santa Monica",
      "state":"CA",
      "photo":"/assets/todd-kent-178j8tJrNlc-unsplash.jpg",
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
