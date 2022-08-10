import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from './services/guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projectMaterial';

  constructor(private router: Router, private guardSvc: GuardService) {}

  ngOnInit() {
    if(this.guardSvc.getValue()){
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['']);
    }
    
  }
}
