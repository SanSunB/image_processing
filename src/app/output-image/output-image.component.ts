import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceDashboard} from '../app.service';

// Display the pixeled image.
@Component({
  selector: 'app-output-image',
  styleUrls: ['./output-image.component.css'],
  template: `
  <div>
  <img [src]="image">
  <br>
  <button mat-raised-button color="primary" (click)="onBack()"> <<Back </button>
  </div>

  `
})
export class OutputImageComponent implements OnInit {
  imageName: string;
  image;

  constructor(
    private serviceDashboard: ServiceDashboard,
    private router: Router) {
    this.imageName = this.router.getCurrentNavigation().extras.state.name; }

  ngOnInit() {
    this.image = 'http://localhost:5000' + this.imageName;
  }

  // Navigate back to home page.
  onBack(){
    this.router.navigate(['/']);
  }
}
