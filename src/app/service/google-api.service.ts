import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';


const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '516449568980-1fnjop20sf0vp084p6kj4fv99rb6nttn.apps.googleusercontent.com',
  scope: 'openId profile email'
  
}



@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  // constructor(private readonly oAuthService: OAuthService) {
  //     oAuthService.configure(oAuthConfig)
  //     oAuthService.loadDiscoveryDocument().then( () => {
  //       oAuthService.tryLoginImplicitFlow().then(() => {
  //         if(!oAuthService.hasValidAccessToken()){
  //           oAuthService.initLoginFlow()
  //         }else{
  //           oAuthService.loadUserProfile().then((userProfile) => {
  //             console.log(JSON.stringify(userProfile))
  //           })
  //         }
  //       })
  //     })
  //  }
}
