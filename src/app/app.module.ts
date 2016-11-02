import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrgansationsPage } from '../pages/organsations/organsations';

import { GithubUsers } from '../providers/github-users';

import { UserDetailsPage } from '../pages/user-details/user-details';


@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrgansationsPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrgansationsPage,
    UserDetailsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}