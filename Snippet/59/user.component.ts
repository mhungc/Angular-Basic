import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl } from '@angular/forms';
import { User } from './user';

@Component({
  // selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

     this.userForm  = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['']
    });

  }

  onSubmit() {

    console.warn(this.userForm.value);
  }

}
