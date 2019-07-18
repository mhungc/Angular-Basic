import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pageTitle = 'Editar Usuario';
  userForm: FormGroup;
  user: User;
  errorMessage: string;
  private sub: Subscription;

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

    // Read the user Id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getUser(id);
      }
    );

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

  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe(
        (user: User) => this.displayUser(user),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayUser(user: User): void {
    if (this.userForm) {
      this.userForm.reset();
    }
    this.user = user;

    if (this.user.id === 0) {
      this.pageTitle = 'Agregar Usuario';
    } else {
      this.pageTitle = `Editar Usuario: ${this.user.lastName}`;
    }

    // Update the data on the form
    this.userForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    });
    // this.userForm.setControl('tags', this.fb.array(this.user.tags || []));
  }

  onSubmit() {
    console.warn(this.userForm.value);
    console.log("calling onSubmit");
    if (this.userForm.valid) {
      console.log("userform is valid");
      if (this.userForm.dirty) {
        console.log("userform is dirty");
        const user = { ...this.user, ...this.userForm.value };
        console.log("user.id: " + user.id);
        if (user.id === undefined) {
          console.log("new user");
          this.userService.createUser(user)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        } else {
          console.log("update user");
          this.userService.updateUser(user).subscribe(
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
    this.router.navigate(['/user']);
  }

}
