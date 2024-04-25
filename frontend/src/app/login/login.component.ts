import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DefaultButtonComponent } from './default-button/default-button.component';

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [TitleComponent,CommonModule,ReactiveFormsModule,InputContainerComponent, InputValidationComponent, TextInputComponent,DefaultButtonComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm!:FormGroup;
    isSubmitted=false;
    returnUrl='';
    constructor(private formBuilder:FormBuilder, private userService:UserService, private activatedRoute:ActivatedRoute, private router:Router){}

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:['', [Validators.required,Validators.email]],
        password:['', Validators.required]
      });
      this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl;
    }
  
    get fc(){
      return this.loginForm.controls;
    }
  
    submit(){
      this.isSubmitted = true;
      if(this.loginForm.invalid) return;

      this.userService.login({email:this.fc.email.value,
        password:this.fc.password.value}).subscribe(()=>{
          this.router.navigateByUrl(this.returnUrl);
        });
    }
  
  }
