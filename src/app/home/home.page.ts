import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:String;
  
  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };

  constructor(public alertController: AlertController, private activedRoute: ActivatedRoute, private router: Router) {
    this.activedRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario = this.router.getCurrentNavigation().extras.state.textoEnviado;
      }
    });
  }

  clickedOut(){

    this.router.navigate(['/login']);
  }
}