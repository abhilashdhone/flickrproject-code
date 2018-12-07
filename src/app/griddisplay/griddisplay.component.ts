import { PaginationService } from './../services/pagination.service';
import { FlickrService } from './../services/photopuller.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from './../services/photos.service';

@Component({
  selector: 'app-griddisplay',
  templateUrl: './griddisplay.component.html',
  styleUrls: ['./griddisplay.component.css']
})
export class GriddisplayComponent implements OnInit {

  searchControl = new FormControl();
  model$: Observable<string>;
  photos: Object;
  imageWidth: Number = 200;
  imageHeight: Number = 200;

  // pagination stuff
  pager: any = {};
  pagedItems: any[];

  constructor(private formBuilder: FormBuilder,
              private flickrService: FlickrService,
              private _paginationService: PaginationService,
              private _photosService: PhotosService,
              private router: Router
              ) { }

  ngOnInit() {

    this._photosService.currentPhotos.subscribe(photos => {
      console.log('photos: ', photos);
      this.photos = photos;
    });

  }

  show() {
    this.flickrService.getResult('food').subscribe(value => {
      this._photosService.changePhotos(value);
    });
  }

  onClick(photo: any) {
    this._photosService.changeCurrentActivePhoto(photo);
    this.router.navigateByUrl(`/detail/${photo.id}`);
  }


}
