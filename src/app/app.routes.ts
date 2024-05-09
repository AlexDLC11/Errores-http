import { Routes } from '@angular/router';
import { Error404Component } from './Components/error404/error404.component';
import { HomeComponent } from './Components/home/home.component';
import { Error500Component } from './Components/error500/error500.component';
import { E401Component } from './Components/e401/e401.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'error404',component:Error404Component},
  {path:'error500',component:Error500Component},
  {path:'error401',component:E401Component},  
];
