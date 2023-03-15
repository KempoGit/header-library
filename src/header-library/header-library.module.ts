import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLibraryComponent } from './header-library.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderLibraryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderLibraryComponent]
})
export class HeaderLibraryModule { }
