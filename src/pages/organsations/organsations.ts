import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Organsations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organsations',
  templateUrl: 'organsations.html'
})
export class OrgansationsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Organsations Page');
  }

}
