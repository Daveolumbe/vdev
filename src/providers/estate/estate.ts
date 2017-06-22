import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";

/*
 Generated class for the EstateProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class EstateProvider {

  private key: string = '_y0CqqgMFT7QU8Yv-yJIWdlYAs1-YiWJ';
  private url: string = 'https://api.mlab.com/api/1/databases/eamsdevdb/collections/Companies?';
  private guestUrl : string = 'https://api.mlab.com/api/1/databases/eamsdevdb/collections/VisitorsTbl?';

  constructor(private http: Http) {
    console.log('Hello EstateProvider Provider');
  }



  getAllData(value) {
    return this.http.get(this.url + 'q={"Email": '+ JSON.stringify(value) +'}&apiKey=' + this.key)
      .map(this.extractData)
      .do(this.logResponse)
      .catch(this.catchError);
  }

  checkInGuest(value){
      return this.http.get(this.guestUrl + 'q={"AccessCode": '+ value +'}&apiKey=' + this.key)
        .map(this.extractData)
        .do(this.logResponseGuestInfo)
        .catch(this.catchError);
  }

  private logResponse(res: Response){
      console.log(res);
  }

  private logResponseGuestInfo(res: Response){
    console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }

  private catchError(error: Response | any){
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }


}
