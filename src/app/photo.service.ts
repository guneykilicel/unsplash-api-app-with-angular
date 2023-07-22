import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface CallResponse {
  urls: {
    regular:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }


  getPhotos() {
    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 93RKOpIZAyQvJrNpllaC87uFCEaWorD-RQJS3WsJL1A'
      }
    });
  }
}
