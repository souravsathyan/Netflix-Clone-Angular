import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private movieService:MovieApiServiceService
  ){}

  bannerResult:any =[]
  trendingMovieResult:any=[]
  actionMovies:any=[]
  adventureMovies:any=[]
  animationMovies:any=[]
  sciFiMovies:any=[]
  comedyMovies:any=[]
  documentries:any=[]
  

  ngOnInit(): void {
    this.bannerData()
    this.trendingMovieData()
    this.getActionMovies()
    this.getAdventureMovies()
    this.getAnimationMovies()
    this.getcomedyMovies()
    this.getDocumentries()
    this.getSciFiMovies()
  }

  //getting banner data
  bannerData(){
    this.movieService.bannerApiData()
    .subscribe((result)=>{
      this.bannerResult = result.results
    })
  }
  // trending movies data
  trendingMovieData(){
    this.movieService.trendingMovieApiData()
    .subscribe((result)=>{
      this.trendingMovieResult = result.results
    })
  }
  //Action movies
  getActionMovies(){
    this.movieService.fetchActionMovies()
    .subscribe((result)=>{
      this.actionMovies = result.results
    })
  }
  //adventure movies
  getAdventureMovies(){
    this.movieService.fetchAdventureMovies()
    .subscribe((result)=>{
      this.adventureMovies = result.results
    })
  }
  //animation movies
  getAnimationMovies(){
    this.movieService.fetchAnimationMovies()
    .subscribe((result)=>{
      this.animationMovies = result.results
    })
  }
  //sci-fi movies
  getSciFiMovies(){
    this.movieService.fetchSciFiMovies()
    .subscribe((result)=>{
      this.sciFiMovies = result.results
    })
  }
  //comedy moveis
  getcomedyMovies(){
    this.movieService.fetchComedyMovies()
    .subscribe((result)=>{
      this.comedyMovies = result.results
    })
  }
  //documentries
  getDocumentries(){
    this.movieService.fetchDocumentryMovies()
    .subscribe((result)=>{
      this.documentries = result.results
    })
  }
}
