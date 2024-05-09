import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e401',
  standalone: true,
  imports: [],
  templateUrl: './e401.component.html',
  styleUrl: './e401.component.css'
})
export class E401Component {

  constructor(private router:Router) {
  }


  GoToHome(){
    this.router.navigate(['']);
  }
  
}
