import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.page.html',
  styleUrls: ['./reg-user.page.scss'],
})
export class RegUserPage implements OnInit {

  usuario: string;
  password: string;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  registro(){

        
    if(this.usuario !="" && this.password !=""){
      
      this.router.navigate(['/login']) &&
      this.presentToast("Su usuario a sido creado con exito");
      
    }
    else{
      this.stopToast("Ingrese un nombre y/o contraseña validos");
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
