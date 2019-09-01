import { Component, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { InputValues } from '../models/input.interface';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-input-image',
  styleUrls: ['./input-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section>
  <form #form="ngForm"
    (ngSubmit)="handleSubmit(form.value, form.valid)"
    novalidate>
    <div>
      Height: <input type="number" name="height" required
      [(ngModel)] = "defaultVlaues.height">
      Width: <input type="number" name="width" required
      [(ngModel)] = "defaultVlaues.width">
      Size: <input type="number" name="size" required
      [(ngModel)]= "defaultVlaues.size">
      <br>
    </div>
    <div class="btn">
    <button
    type="submit"
    [disabled]="form.invalid"
    *ngIf="imgURL">
      Get pixeled image
    </button>
    </div>
    <div *ngIf=imgURL>
      <img [src]="imgURL">
    </div>
    </form>
  <section>
  `
})
export class InputImageComponent  {

  constructor() { }

  // Variables definition
  // emit the submit event to app container, so the service wont be used directly.
  @Output() submitt: EventEmitter<InputValues> = new EventEmitter<InputValues>();
  @Input() imgURL: any;

   defaultVlaues: InputValues = {
    height: 50,
    width: 50,
    size: 20,
  }

  handleSubmit(inputValues: InputValues, isValid: boolean) {
    if (isValid) {
      // Store the image as base64 in the
      // form input inteface and send to smart component.
      inputValues.image = this.imgURL;
      this.submitt.emit(inputValues);
    }
  }
}
