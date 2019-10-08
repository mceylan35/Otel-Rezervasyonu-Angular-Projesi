import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule
} from "@angular/forms";
import { RegisterUser } from '../models/registerUser';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  registerUser: RegisterUser;
  registerForm: FormGroup;


 
  
  createRegisterForm(){
    this.registerForm = this.formBuilder.group(
      {
        ad:["",Validators.required],
        soyad:["",Validators.required],
        kullaniciAdi:["",Validators.required],
        password:["",[Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)]],
        confirmPassword:["",Validators.required]
      },
      {validator:this.passwordMatchValidator}
    )
  }
  
  ngOnInit() {
    this.createRegisterForm();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("confirmPassword").value
      ? null
      : { missMatch: true };
  }
  register() {
    debugger;
    if (this.registerForm.valid) {
      this.registerUser = Object.assign({}, this.registerForm.value);
      this.authService.register(this.registerUser);
    }
  }
}
