import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Repos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }

}
