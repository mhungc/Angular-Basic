import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  errorMessage: string;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  onSubmit() {
    console.warn(this.userForm.value);
    console.log("calling onSubmit");
    if (this.userForm.valid) {
      console.log("userform is valid");
      if (this.userForm.dirty) {
        console.log("userform is dirty");
        const user = { ...this.user, ...this.userForm.value };
        console.log("user.id: "+user.id);
        if (user.id === undefined) {
          console.log("new user");
          this.userService.createUser(user)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        } else {
            console.log("update user");
          this.userService.updateUser(user)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.userForm.reset();
    this.router.navigate(['/users']);
  }

}
