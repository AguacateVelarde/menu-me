import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import{ DataProvider } from './data';
import { AuthProvider } from './auth';



@Injectable()
export class Pedido {
  public Menu:Array<any> = [];
  public cont:number;
  public costoTotal:number;
  constructor(public http: Http,
              public data: DataProvider,
              public af: AngularFire,
              public auth: AuthProvider
  ) {
    this.cont = 0;
    this.costoTotal = 0;

  }

  add ( nombre, precio, imagen ){
    console.log( this.Menu );
    let value = {
      nombre : nombre,
      img : imagen,
      precio : precio
    }
    this.Menu.push ( value );
    this.costoTotal+= precio;
    this.cont++;
  }

  getCostoTotal(){
    return this.costoTotal;
  }

  pedir( ){
    //this.data.push( 'pedidos', this.Menu );


     var dat = this.af.database.list('pedido').push({}).key;
     this.af.database.list('pedido').update(dat,{
       Pedido : this.Menu,
       img : this.Menu[ 0 ].img,
       //user : this.auth.getUserData(),
       completo : false,
       id : dat

     });
  }

}
