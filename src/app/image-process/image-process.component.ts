import { Component, OnInit } from '@angular/core';
import { InputValues } from '../models/input.interface';
import {ServiceDashboard} from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-image-process',
  styleUrls: ['./image-process.component.css'],
  template: `
  <div>
  <input type="file" accept="image/gif, image/jpeg, image/png"
  name="imageUpload"  #imageUpload required
  (change)="onFileSelected(imageUpload.files)">
  <app-input-image
  (submitt)="onSubmitPassenger($event)"
  [imgURL]="image">
  </app-input-image>
  </div>
  `
})
export class ImageProcessComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private serviceDashboard: ServiceDashboard) { }


  image: any = null;
  imagePath;


  onFileSelected(files) {
    if (files.length > 0) {
      const reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
      this.image = reader.result;
      }
    }
  }

  onSubmitPassenger(inputValues: InputValues){
    // Call the service and navigate to a different page
    this.serviceDashboard.getPixeledImage(inputValues)
    .subscribe((data) =>
    {this.image = 'http://localhost:5000' + data.img;});
    //this.image = 'http://localhost:5000' + data.img;
  }
}
