import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: UserComponent },
    ]),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
