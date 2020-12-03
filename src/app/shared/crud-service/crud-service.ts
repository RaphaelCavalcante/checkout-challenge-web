import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANT_URL } from 'src/app/constant/constant-rest';

export abstract class CrudService<T> {

  protected BASE_URL = CONSTANT_URL.BASE_URL;

  constructor(
    public http: HttpClient,
    private URL: string
  ) {
    this.BASE_URL += URL;
  }

  public chooseList(type: number) {
    /*
      0 - Inativos
      1 - Ativos
      2 - Todos
    */
    switch (type) {
      case 0:
        return this.getAllDisabled();
      case 1:
        return this.getAllEnabled();
      case 2:
        return this.getAll();
      default:
        return this.getAllEnabled();
    }
  }

  public chooseChangeStatus(type: number, list: T[]) {
    /*
      0 - Inativos
      1 - Ativos
    */
    switch (type) {
      case 0:
        return this.deleteList(list);
      case 1:
        return this.recoveryList(list);
    }
  }

  public getAll(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  public getAllEnabled(): Observable<any> {
    const url = this.BASE_URL + 'enabled';
    return this.http.get(url);
  }

  public getAllDisabled(): Observable<any> {
    const url = this.BASE_URL + 'disabled';
    return this.http.get(url);
  }

  public getOne(id: any): Observable<any> {
    const url = this.BASE_URL + id;
    return this.http.get(url);
  }

  public save(data: T | any): Observable<any> {
    const url = this.BASE_URL;
    return this.http.post(url, data);
  }

  public update(data: T): Observable<any> {
    const url = this.BASE_URL;
    return this.http.put(url, data);
  }

  public patch(data: T): Observable<any> {
    const url = this.BASE_URL;
    return this.http.patch(url, data);
  }

  public delete(id: any): Observable<any> {
    const url = this.BASE_URL + 'disabled/' + id;
    return this.http.delete(url);
  }

  public recovery(id: any): Observable<any> {
    const url = this.BASE_URL + 'enabled/' + id;
    return this.http.delete(url);
  }

  public enable(id: any): Observable<any> {
    const url = this.BASE_URL + 'enabled';
    return this.http.put(url, id);
  }

  public deleteList(data: T[]): Observable<any> {
    const url = this.BASE_URL + 'collection/disabled';
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: data
    };
    return this.http.delete(url, options);
  }

  public recoveryList(data: T[]) {
    const url = this.BASE_URL + 'collection/enabled';
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: data
    };
    return this.http.delete(url, options);
  }
}
