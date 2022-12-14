import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private guardSvc: GuardService) { }

  ngOnInit(): void {
  }

}
