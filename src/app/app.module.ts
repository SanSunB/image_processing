import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Add the http client module to imports
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// Services we created, add it to providers
import {ServiceDashboard} from './app.service';
import { ImageProcessComponent } from './image-process/image-process.component'
import { InputImageComponent } from './input-image/input-image.component'
import { OutputImageComponent } from './output-image/output-image.component';


const routes: Routes =[
  {path: '', component: ImageProcessComponent, pathMatch: 'full'},
  {path: 'pixeledImage', component: OutputImageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ImageProcessComponent,
    InputImageComponent,
    OutputImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceDashboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
