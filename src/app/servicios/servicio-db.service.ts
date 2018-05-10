import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServicioDbService {
  private url:any='http://localhost:8080/php/personas/';
  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});

  constructor(public http: Http) { }

  public obtener ( que: string) {
    console.log(this.url+que);
    return this.http
    .get( this.url+que )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public genericInsert(que,objeto) {
    return this.http.post(this.url + que, objeto).map(res => res.json());
  }

  public genericDelete(que,objeto) {
    return this.http.post(this.url + que, objeto).map(res => res.json());
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
