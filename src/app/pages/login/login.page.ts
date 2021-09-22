import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Usuario: string;
  Password: number;

  usu = "juan";
  clave = 1234;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    //console.log(this.Usuario)
    //console.log(this.Password)
    if(this.Usuario == this.usu && this.Password == this.clave){
      let navigationExtras: NavigationExtras = {
        state: { textoEnviado: this.Usuario}
      }
      this.router.navigate(['/home'], navigationExtras);
      
    }
    else{
      this.presentToast("Usuario y/o Contraseña Incorrectos");
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

}
