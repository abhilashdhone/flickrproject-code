import { PaginationService } from './services/pagination.service';
import { FlickrService } from './services/photopuller.service';
import { PhotosService } from './services/photos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { }
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatCheckboxModule
} from '@angular/material';



import { AppComponent } from './app.component';
import { GriddisplayComponent } from './griddisplay/griddisplay.component';
import { PicdetailComponent } from './picdetail/picdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    GriddisplayComponent,
    PicdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'detail/:id', component: PicdetailComponent},
      {path: 'home', component: GriddisplayComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [
    FlickrService,
    PaginationService,
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
