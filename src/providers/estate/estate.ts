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

  private url: string = 'https://api.mlab.com/api/1/databases/eamsdevdb/collections/Companies?apiKey=_y0CqqgMFT7QU8Yv-yJIWdlYAs1-YiWJ';

  constructor(private http: Http) {
    console.log('Hello EstateProvider Provider');
  }

  getAllData() {
    return this.http.get(this.url)
      .map(this.extractData)
      .do(this.logResponse)
      .catch(this.catchError);
  }

  private logResponse(res: Response){
    console.log(res)
  }

  private extractData(res: Response){
    return res.json();
  }

  private catchError(error: Response | any){
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }


}
