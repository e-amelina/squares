import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { DataGridService } from '../data-grid.service';

export type Modes = {
  name: string;
  field: number;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  modes: Modes[] = [];
  cellsCount: number;

  private _componentIsActive = true;

  @Output() modeChanged = new EventEmitter<number>();

  constructor(private _dataGridService: DataGridService) {
    this._dataGridService.getGridData().subscribe(val => {
      this.modes = val;
    });
  }

  formModeControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.formModeControl.valueChanges
      .pipe(takeWhile(() => this._componentIsActive))
      .subscribe(val => {
        if (val) {
          this.cellsCount = val.field;
        }
      });
  }

  onSubmit(): void {
    this.modeChanged.emit(this.cellsCount);
  }

  ngOnDestroy(): void {
    this._componentIsActive = false;
  }
}
