import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 route:ActivatedRoute = inject(ActivatedRoute);
 housingService = inject(HousingService);
 housingLocation: HousingLocation | undefined;
 
 constructor(){
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingLocation=this.housingService.getHousingLocationById(housingLocationId);
 }
}
