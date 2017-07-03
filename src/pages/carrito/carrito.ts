import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{ Pedido } from  '../../providers/pedido';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html'
})
export class CarritoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public pedido: Pedido
              ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  getCostoTotal(){
    return this.pedido.getCostoTotal();
  }



  getCont( ){
    return this.pedido.cont;
  }
  pedir(  ){
  //  this.pedido.pedir();
  this.navCtrl.push( CardPage );
  }
  getMenu(){
    return this.pedido.Menu;
  }
}
