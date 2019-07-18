import { Movie } from './../../model/movie';
import { StarWarsApiService } from './../../services/star-wars-api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output() movieWasSelected = new EventEmitter<Movie>();
  @Output() elementsEmitter = new EventEmitter<Object>();
  selectedMovie = [];

  movies: Movie[];
  characters = [];
  planets = [];
  starships = [];
  vehicles = [];
  species = [];

  elements = {
    characters : {},
    planets: {},
    starships: {},
    vehicles: {},
    species: {}
  }

  constructor(private service: StarWarsApiService) { }

  ngOnInit() {
    this.getMovieService();
  }

  getMovieService(){
    this.service.getMovieList().subscribe((get:any)=>{
      for(let i=0;i<get.results.length;i++){
        get.results[i].episode_id = this.integerToRoman(get.results[i].episode_id);
      }
      this.movies = get.results;
    });
  }

  getServices(value, arr){
    for(let i=0;i<value.length;i++){
      this.service.getServicesByUrl(value[i]).subscribe((get:any)=>{
        arr.push(get);
      });
    }
  }

  movieSelected(movie){
    this.movieWasSelected.emit(movie);
    this.selectedMovie = movie;
    
    this.resetArrayElements();

    this.getServices(movie.characters, this.characters);
    this.getServices(movie.planets, this.planets);
    this.getServices(movie.starships, this.starships);
    this.getServices(movie.vehicles, this.vehicles);
    this.getServices(movie.species, this.species);

    this.assignElements();

    this.elementsEmitter.emit(this.elements);
  }

  resetArrayElements(){
    this.characters = [];
    this.planets = [];
    this.starships = [];
    this.vehicles = [];
    this.species = [];
  }

  assignElements(){
    this.elements.characters = this.characters;
    this.elements.planets = this.planets;
    this.elements.starships = this.starships;
    this.elements.vehicles = this.vehicles;
    this.elements.species = this.species;
  }

  integerToRoman(number) {
    if(!Number.isInteger(number)) return false;

    let integer = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let romanValue = "";

    for(let i=12;i>=0;i--) {
      while (number >= integer[i]) {
        romanValue += roman[i];
        number -= integer[i];
      }
    }

    return romanValue;
  }

}
