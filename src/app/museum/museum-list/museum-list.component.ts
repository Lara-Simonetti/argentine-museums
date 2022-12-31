import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { pluck} from 'rxjs/operators';
import { ApiResults } from '../apiResults';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums: Array<Museum> = [];
  apiResults: ApiResults = {} as ApiResults;

  constructor(private museumService: MuseumService) { }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((apiResults) => {
      this.apiResults = apiResults;
      this.museums = this.apiResults.results;
    });
  }

  ngOnInit() {
    this.getMuseums();
  }

}
