import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-n-clave',
  templateUrl: './n-clave.page.html',
  styleUrls: ['./n-clave.page.scss'],
})
export class NClavePage implements OnInit {

  Usuario: string;
  usu = "juan";

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  nClave(){
    if(this.Usuario == this.usu){
      
      this.router.navigate(['/login']) &&
      this.presentToast("Se envio un correo para cambiar su clave");
      
    }
    else{
      this.stopToast("El usuario ingresado no existe");
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
