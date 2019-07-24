import { Component, OnInit } from '@angular/core';
import {ServiceDashboard} from './app.service';
import { Router,ActivatedRoute } from '@angular/router';

interface urlData{
  img: string;
}
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
  <h1> Pixeled image </h1>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  title = 'angular-flask';
  constructor(private router: Router) {}

    flaskText: string;

    ngOnInit() { }
}
