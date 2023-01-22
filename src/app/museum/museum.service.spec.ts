/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { MuseumService } from './museum.service';

describe('Service: Museum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, NgxPaginationModule],
      providers: [MuseumService]
    });
  });

  it('should ...', inject([MuseumService], (service: MuseumService) => {
    expect(service).toBeTruthy();
  }));
});
