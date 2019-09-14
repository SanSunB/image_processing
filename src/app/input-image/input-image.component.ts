import { Component, OnChanges, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { InputValues } from '../models/input.interface';
import { ChangeDetectionStrategy } from '@angular/core';

// Input form for getting input image processing parameters.
@Component({
  selector: 'app-input-image',
  styleUrls: ['./input-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section>
  <form #form="ngForm"
    (ngSubmit)="handleSubmit(form.value, form.valid)"
    novalidate>
    <div *ngIf="!Loading">
      <mat-form-field>
        <input matInput placeholder="height"
        type="number" name="height" required
        [(ngModel)] = "defaultVlaues.height">
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="width"
        type="number" name="width" required
        [(ngModel)] = "defaultVlaues.width">
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="size"
        type="number" name="size" required
        [(ngModel)] = "defaultVlaues.size">
      </mat-form-field>
      <button mat-raised-button color="primary"
      type="submit"
      [disabled]="form.invalid"
      *ngIf="imgURL">
      Get pixeled image
      </button>
    </div>

    <div *ngIf="Loading">
      <p> Proccessing image, pleas wait...</p>
      <mat-spinner></mat-spinner>
    </div>
    <div *ngIf="imgURL && !Loading">
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
  @Input() Loading: boolean;

  defaultVlaues: InputValues = {
    height: 50,
    width: 50,
    size: 20
  };

  handleSubmit(inputValues: InputValues, isValid: boolean) {
    if (isValid) {
      this.Loading = true;
      // Store the image as base64 in the
      // form input inteface and send to smart component.
      inputValues.image = this.imgURL;
      this.submitt.emit(inputValues);
    }
  }
}
