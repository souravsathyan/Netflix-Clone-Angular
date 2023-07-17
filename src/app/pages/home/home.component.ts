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

  ngOnInit(): void {
    this.bannerData()
    this.trendingMovieData()
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
}
