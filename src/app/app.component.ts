import { Component, OnInit } from '@angular/core';
import { CatFacts } from './cat-facts';
import { CatFactsService } from './cat-facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable-demo';
  factsError = false;
  catFacts: CatFacts[] = [];
  errorMessage: string = "";

  constructor(private _catdata: CatFactsService) {

  }
  ngOnInit() {
    this._catdata.getAllFacts().subscribe({next: (catFacts) => this.catFacts = catFacts,
    error: (err) => {this.factsError = true; this.errorMessage = JSON.stringify(err)},
    complete: () => console.log('complete')});
  }
}
