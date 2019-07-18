import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  @Input() elements;

  constructor() { }

  ngOnInit() {
  }

}
