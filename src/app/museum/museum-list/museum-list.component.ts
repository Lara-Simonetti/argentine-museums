import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { ApiResults } from '../apiResults';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  apiResults: ApiResults = {} as ApiResults;
  museums: Array<Museum> = [];
  currentMuseum: Museum = {} as Museum;
  currentMuseumIsFirst: boolean = {} as boolean;
  currentMuseumIsLast: boolean = false;

  constructor(private museumService: MuseumService) { }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((apiResults) => {
      this.apiResults = apiResults;
      this.museums = this.apiResults.results;
      this.currentMuseum = this.museums[0];
      this.currentMuseumIsFirst = true;
    });
  }

  ngOnInit() {
    this.getMuseums();
    this.currentMuseum = this.museums[0];
    console.log(this.currentMuseum);
  }

//Checks for empty values so that their lines are not displayed
  checkEmptyValue(value: string) {
    if(value===""){
      return false
    }
    else{
      return true
    }
  }

//Navigation functions
  isLastMuseum(museum:Museum){
    if(museum === this.museums[-1]){
      return true;
    }
    else{
      return false
    }
  }

  getMuseumIndex(museum: Museum){
    var index: number = 0;
    for(let i = 0; i < this.museums.length; i++){
      if(museum.id == this.museums[i].id){
        index = i;
      }
    }
    return index;
  }

  getNextMuseum(museum:Museum){
    var currentMuseumIndex = this.getMuseumIndex(museum);
    this.currentMuseum = this.museums[currentMuseumIndex + 1]
    this.currentMuseumIsFirst = false;
    if(this.currentMuseum.id === this.museums.slice(-1)[0].id){
      this.currentMuseumIsLast = true;
    }
  }

  getPreviousMuseum(museum:Museum){
    var currentMuseumIndex = this.getMuseumIndex(museum);
    this.currentMuseum = this.museums[currentMuseumIndex - 1]
    this.currentMuseumIsLast = false;
    if(currentMuseumIndex - 1 === 0){
      this.currentMuseumIsFirst = true;
    }
  }

}
