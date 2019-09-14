import { Component, OnInit } from '@angular/core';
import { InputValues } from '../models/input.interface';
import {ServiceDashboard} from '../app.service';
import { Router, NavigationExtras } from '@angular/router';

// Main view of getting image and parameters to send image for processing
@Component({
  selector: 'app-image-process',
  styleUrls: ['./image-process.component.css'],
  template: `
  <div>
    <app-input-image
    (submitt)="onSubmitImage($event)"
    [imgURL]="image"
    [Loading]="isLoading">
    </app-input-image>
    <app-image-loader
    [Loading]="isLoading"
    (imageChange)="imageChange($event)"></app-image-loader>
  </div>
  `
})
export class ImageProcessComponent {
  constructor(private router: Router,
              private serviceDashboard: ServiceDashboard) { }

  image: any = null;
  pixeledImage: any = null;
  isLoading = false;

  // Send image to service and call output view.
  onSubmitImage(inputValues: InputValues){
    this.isLoading = true;
    // Call the service and navigate to a different page
    this.serviceDashboard.getPixeledImage(inputValues)
    .subscribe((data) => {
      // Navigate to output view to display pixeled image.
      const navigationExtras: NavigationExtras = {state: {name: data.img}};
      this.router.navigate(['/pixeledImage'], navigationExtras);
    });
  }

  // Update image from child view
  imageChange(image) {
    this.image = image;
  }
}
