import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookPageComponent } from './home/book-page/book-page.component';
import { CartComponent } from './header/cart-page/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},//default routes
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'book/:id',component:BookPageComponent},
    {path:'cart-page', component:CartComponent},
    {path:'aboutUs', component:AboutusComponent},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterPageComponent},
    {path:'checkout', component:CheckoutPageComponent},
    {path:'confirm', component:ConfirmationComponent},
];
