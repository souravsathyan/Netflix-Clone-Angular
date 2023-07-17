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
  //search movie 
  getSearchMovie(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  //getMovieDetails
  getMovieDetails(data:string):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  //getting movie trailer video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  //movie cast data
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  //action movies
  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }
  //adventure
  fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }
  //Animation
  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }
  //Comedy
  fetchComedyMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }
  //Documentries
  fetchDocumentryMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }
  //sci-fi
  fetchSciFiMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }
  //thriller
  fetchThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }


}
