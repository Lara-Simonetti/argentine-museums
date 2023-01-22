import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumComponent } from './museum.component';
import { MuseumListComponent } from './museum-list/museum-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuseumComponent, MuseumListComponent],
  exports: [MuseumListComponent]
})
export class MuseumModule { }
