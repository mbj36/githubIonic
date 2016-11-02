import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

	user: User;
	login: string;

  constructor(public navCtrl: NavController, private navParams:NavParams, private githubUsers: GithubUsers) {
  	this.login=navParams.get('login');
  	 githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    })
  }

  ionViewDidLoad() {
    console.log('Hello UserDetails Page');
  }

}
