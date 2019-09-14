import { Component, OnInit } from '@angular/core';
import {ServiceDashboard} from './app.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

interface urlData{
  img: string;
}
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <mat-toolbar color="primary">
    Pixeled image
    </mat-toolbar>
    <router-outlet></router-outlet>
    <label> *Describe the amount of knots in the image, amount=height X width. </label>
  </div>
  `
})
export class AppComponent implements OnInit{
  title = 'angular-flask';
  constructor(private router: Router) {}

    flaskText: string;

    ngOnInit() { }
}
