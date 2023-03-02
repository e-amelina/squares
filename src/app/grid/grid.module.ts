import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridTemplateComponent } from './grid-template.component';

@NgModule({
  declarations: [GridTemplateComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [GridTemplateComponent],
})
export class GridModule {}
