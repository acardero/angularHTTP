import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-jokes-pipe',
  templateUrl: './jokes-pipe.component.html',
  styleUrls: ['./jokes-pipe.component.css'],
  providers: [JokesService]
})
export class JokesPipeComponent implements OnInit {
  joke$: Observable<string>;
  constructor(private jokes: JokesService) { }
  ngOnInit() {}
  getRandomJoke() {
    this.joke$ = this.jokes.getRandom();
  }
}