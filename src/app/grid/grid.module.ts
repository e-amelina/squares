import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from './grid.component';
import { InformBlockComponent } from './inform-block/inform-block.component';

@NgModule({
  declarations: [GridComponent, InformBlockComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [GridComponent],
})
export class GridModule {}
