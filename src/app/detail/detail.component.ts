import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup} from '@angular/forms';
import { GoogleApiService } from '../google-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  //test du client google
  gapi: GoogleApiService = inject(GoogleApiService);
  route:ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
   firstName: new FormControl(''),
   lastName: new FormControl(''),
   email: new FormControl(''),
   date: new FormControl( )
  })
  //test de l'initialisation du client google avec OnInit
  ngOnInit(): void {
    this.gapi.initClient();
  }
  
  constructor(private googleApiService: GoogleApiService){
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
  sendConfirmation() {
    const to = this.applyForm.value.email;
    const subject = 'Confirmation de la réservation';
    const body = 'Votre réservation a été effectuée avec succès';

    this.googleApiService.sendConfirmationEmail(to, subject, body)
      .then((response:any) => {
        console.log('Email de confirmation envoyé avec succès:', response);
      })
      .catch((error:any) => {
        console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
      });
  }
}

