import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import{ AuthProvider } from '../../providers/auth';
import{ DataProvider } from '../../providers/data';

import{ JumpPage } from '../jump/jump';


@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {
  dataProductos: FirebaseListObservable<any>;
  constructor(
    private nav: NavController,
    private auth: AuthProvider,
    private data: DataProvider
  ) {
    this.dataProductos = this.data.list( "productos" );
  }
  logout(){
    this.auth.logout();
    this.nav.push( JumpPage );

  }
  pushlist( uid: any, name: string, price: string ){
    this.data.push( uid, { 'nombre' : name, 'precio' : price });

  }
}
