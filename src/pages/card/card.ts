import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{ Pedido } from  '../../providers/pedido';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {


public card:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public pedido: Pedido) {
    this.card = {}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

pedir(){
  this.pedido.pedir();
}


}
