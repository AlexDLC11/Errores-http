import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  constructor(
    private router:Router
  ) {  
  }

  E404(){
    this.router.navigate(['error404']);
  }

  E500(){
    this.router.navigate(['error500']);
  }
}
