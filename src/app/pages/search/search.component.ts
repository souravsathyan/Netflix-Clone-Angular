import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResult:any=[]
  constructor(private searchService : MovieApiServiceService){}

  searchForm = new FormGroup({
    movieName:new FormControl(null)
  })

  submitForm(){
    this.searchService.getSearchMovie(this.searchForm.value)
    .subscribe((result)=>{
      this.searchResult = result.results
    })
  }



}
