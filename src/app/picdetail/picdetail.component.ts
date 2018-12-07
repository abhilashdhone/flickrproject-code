import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { PhotosService } from './../services/photos.service';

@Component({
  selector: 'app-picdetail',
  templateUrl: './picdetail.component.html',
  styleUrls: ['./picdetail.component.css']
})
export class PicdetailComponent implements OnInit {
  public photo: IPhoto;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _photosService: PhotosService
  ) {

  }


  ngOnInit(): void {
    this._photosService.currentActivePhoto.subscribe(( value: IPhoto ) => {
      this.photo = value;
      console.log(value);
    });
  }

  onBack(): void {
    this._router.navigate(['/home']);
  }

  deployForm() {
    console.log(this.photo);
    this._router.navigate(['/home']);
  }
}

export interface IPhoto {
  id: number;
  title: string;
  url: string;
  starRating?: string;
  reason?: string;
  provider?: string;
}
