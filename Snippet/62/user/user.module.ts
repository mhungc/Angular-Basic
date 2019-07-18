import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user-data';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserEditComponent, UserListComponent, UserEditComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      {path: ':id/edit', component: UserEditComponent}

    ]),
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
