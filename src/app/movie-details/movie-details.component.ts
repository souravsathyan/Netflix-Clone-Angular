import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  constructor(
    private movieService:MovieApiServiceService,
    private router:ActivatedRoute){}

  movieDetailResult:any=[]
  movieVideo:any;
  movieCast:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    
    this.getMovie(getParamId)
    this.getMovieCast(getParamId)
    this.getMovieVideo(getParamId)
    
  }
  //getting the movie details
  getMovie(id:string){
    this.movieService.getMovieDetails(id)
    .subscribe((result)=>{
      this.movieDetailResult=result 
    })
  }

  //getting the movie video
  getMovieVideo(id:any){
    this.movieService.getMovieVideo(id)
    .subscribe((result)=>{
      console.log(result);
      result.results.forEach((element:any) => {
        if(element.type==='Trailer')
        {
          this.movieVideo = element.key
        }
      });
    })
  }

  //getting the movie cast
  getMovieCast(id:any){
    this.movieService.getMovieCast(id)
    .subscribe((result)=>{
      console.log(result);
      this.movieCast=result.cast
    })
  }

}
