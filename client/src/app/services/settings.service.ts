import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  version: string = "1.0.1";
  baseUrl: string = "http://localhost:5000";
  userId: number = 0
  currentPage: number = 0;
  public slides = [
    { src: "http://www.localhost:5000/carousel_commercials/commercial_pic1.png" },
    { src: "http://www.localhost:5000/carousel_commercials/commercial_pic2.png" },
    { src: "http://www.localhost:5000/carousel_commercials/commercial_pic3.png" },
    { src: "http://www.localhost:5000/carousel_commercials/commercial_pic4.png" }
  ];


}
