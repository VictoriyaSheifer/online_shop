import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, timeout as setTimeout, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  createPostService(url: string, ob: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        await this.httpClient.post(url, ob, { headers }).subscribe(data => {
          resolve(data);
        }, error => {
          //console.log('oops', error, error.error)
        });
      } catch (err) {
        //console.log("ERRORRR : ", err)
        //console.log(err);
      }
    });
  }


  createGetService(url: string, headParams?: any) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.httpClient.get(url).subscribe(data => {
          resolve(data);
        }, error => {
          //console.log('oops', error, error.error)
        });
      } catch (err) {
        //console.log("ERRORRR : ", err)
        //console.log(err);
      }
    });
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return throwError(errMsg);
  }
}
