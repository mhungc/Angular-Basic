import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user-data';

@NgModule({
  declarations: [UserComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: UserComponent },
      { path: 'users', component: UserComponent },

    ]),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
