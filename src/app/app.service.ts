import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs'; 
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = environment.apiUrl;
  public list$ = new BehaviorSubject<any>(null); 
  
  constructor(private http: HttpClient) { } 

  async getList(path: string, data: any) {
    let params = new HttpParams();
    Object.keys(data).forEach((key, index) => {
      if(data[key] !== null && data[key] !== '' && data[key] !== undefined){
        params = params.append(key, data[key]);
      }
    });
    const res = await lastValueFrom(this.http.get(`${this.baseUrl}/${path}`, { params: params } ));
    this.list$.next(res);  
  }
  
}
