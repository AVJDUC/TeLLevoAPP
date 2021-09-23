import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reg-auto',
  templateUrl: './reg-auto.page.html',
  styleUrls: ['./reg-auto.page.scss'],
})
export class RegAutoPage implements OnInit {

  data:any={
    marca:"",
    modelo:"",
    aModelo:"",
    patente:"",
    cantPasaj:""
  };

  constructor(private router: Router, public toastController: ToastController) { }
  

  ngOnInit() {
  }

  regAuto(){
    
    if(this.data.marca !="" && this.data.modelo !="" && this.data.aModelo !="" 
    && this.data.patente !="" && this.data.cantPasaj !=""){
      
      this.router.navigate(['/home']) &&
      this.presentToast("Se ha registrado su vehiculo");
      
    }
    else{
      this.stopToast("Revise que los datos ingresados sean validos");
    }
  }

  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }
  
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

  async stopToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

}
