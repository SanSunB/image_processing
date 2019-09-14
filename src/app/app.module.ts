import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Add the http client module to imports
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFileUploadModule } from 'angular-material-fileupload';

// Services we created, add it to providers
import {ServiceDashboard} from './app.service';
import { ImageProcessComponent } from './image-process/image-process.component'
import { InputImageComponent } from './input-image/input-image.component'
import { OutputImageComponent } from './output-image/output-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ImageLoaderComponent } from './image-loader/image-loader.component';



const routes: Routes =[
  {path: '', component: ImageProcessComponent, pathMatch: 'full'},
  {path: 'pixeledImage', component: OutputImageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ImageProcessComponent,
    InputImageComponent,
    OutputImageComponent,
    ImageLoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFileUploadModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceDashboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
