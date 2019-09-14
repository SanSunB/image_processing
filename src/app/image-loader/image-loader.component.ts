import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Uploading user image from his computer
@Component({
  selector: 'app-image-loader',
  template: `
  <div *ngIf="!Loading">
    <label *ngIf="image">Change image: </label>
    <input type="file" accept="image/gif, image/jpeg, image/png"
    name="imageUpload"  #imageUpload required
    (change)="onFileSelected(imageUpload.files)">
  </div>
  `,
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {
  @Input() Loading;
  imagePath;
  image;
  @Output() imageChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Get user's file selection
  onFileSelected(files) {
    if (files.length > 0) {
      const reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
      this.image = reader.result;
      this.imageChange.emit(this.image);
      }
    }
  }

}
