import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PhotosService {
  public photosSource = new BehaviorSubject([]);
  currentPhotos = this.photosSource.asObservable();

  public activePhoto = new BehaviorSubject({});
  currentActivePhoto = this.activePhoto.asObservable();
  constructor() {}

  changePhotos(message: any) {
    this.photosSource.next(message);
  }

  changeCurrentActivePhoto(photo: any) {
    this.activePhoto.next(photo);
  }
}

