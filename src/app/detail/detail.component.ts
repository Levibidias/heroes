import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 route:ActivatedRoute = inject(ActivatedRoute);
 housingService = inject(HousingService);
 housingLocation: HousingLocation | undefined;
 applyForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  date: new FormControl( )
 })
 
 constructor(){
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) =>{
    this.housingLocation = housingLocation;   
  });
 }
 submitApplication(){
  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
    this.applyForm.value.date ?? ['']
  )
 }
}
