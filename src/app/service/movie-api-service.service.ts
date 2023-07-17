import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(
    private http:HttpClient
  ) { }
  baseurl = "https://api.themoviedb.org/3"
  apikey ='56f587a0914200d6a1da9d3e94475d5c'
  //bannerApi
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }
  //trending Movies Api
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }


}
