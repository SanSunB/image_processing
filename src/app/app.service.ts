import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InputValues } from './models/input.interface';


//import 'rxjs/add/operator/map';

// The address of the server of flask to connect to.
const FLASK_API = 'http://localhost:5000/';

@Injectable()
export class ServiceDashboard{

  // inject an http server
  constructor(private http: HttpClient){}

  // Define a get function from the flask, ask deta from the server
  getPixeledImage(inputValues : InputValues): Observable<any> {
    //inputValues.image = btoa(inputValues.image);
    let params = new HttpParams();

    // Loop over the inputValues json and insert the key and data
    // to HttpParams object.
    Object.entries(inputValues).forEach(element => {
      // 0 location is the key, 1 location is value
      params = params.append(element[0], element[1]);
    });

    return this.http.get(FLASK_API, {params});
  }


  // Send a string to the server
  putAny(): Observable<any> {
    return this.http.post(FLASK_API, 'sunsun');
  }

}
