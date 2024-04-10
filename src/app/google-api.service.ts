import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private apikey= "AIzaSyAM3EhtBlcNKvNo3KiEHerdip_WX9tUR2M";
  private clientId="1085844138260-uuhepognuvvqgvp4lkc1gtvln8uq8c1n.apps.googleusercontent.com";
  constructor() { 
    this.initClient();
  }
  initClient(){
    gapi.load('client',() => {
      gapi.client.init({
        apiKey: this.apikey,
        clientId:this.clientId,
        discoveryDocs:["https://gmail.googleapis.com/$discovery/rest?version=v1"],
        scope: 'https://www.googleapis.com/auth/gmail.addons.current.message.readonly'
      }).then(() =>{
        console.log('Google API client initialized');
      },(error:any) => {
          console.error('Error initializing Google API client', error);
      })
    })
  }
  //Ajoutez d'autres méthodes pour interagir avec les API Google ici
  sendConfirmationEmail(to: string|null|undefined, subject: string, body: string): Promise<any> {
    return gapi.client.gmail.users.messages.send({
      'userId': 'levibidias03@gmail.com',
      'resource': {
        'raw': this.createMessage(to, subject, body)
      }
    });
  }

  private createMessage(to: string|null|undefined, subject: string, body: string): string {
    const email = `
      From: levibidias03@gmail.com
      To: ${to}
      Subject: ${subject}
      
      ${body}
    `;
    return btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
}
