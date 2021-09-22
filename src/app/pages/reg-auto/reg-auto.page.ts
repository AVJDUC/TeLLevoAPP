import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  

  ngOnInit() {
  }

  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }
  

}
