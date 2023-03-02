import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @ViewChildren('cell') squares: ElementRef[];
  @ViewChild('informList') informList: ElementRef;
  @ViewChild('gridEl', { static: false }) grid: ElementRef;

  constructor(private ref: ChangeDetectorRef) {}

  @Input() set size(val: number) {
    if (this.squares?.length) {
      this.destroyGrid();
      this.ref.detectChanges();
    }
    if (val) {
      this.shouldBeDestroyed = false;
      this._size = val;
      this.cells = new Array(val);
      setTimeout(() => {
        this.setHoverSubscription();
      });
    }
  }

  get size(): number {
    return this._size;
  }

  cells: number[];
  shouldBeDestroyed = false;
  private _size: number;

  addInformRow(row: number, col: number): void {
    const informBlock = document.createElement('div');
    informBlock.classList.add('inform-block');
    informBlock.textContent = `row ${row} col ${col}`;
    this.informList?.nativeElement.insertBefore(
      informBlock,
      this.informList.nativeElement.children[1]
    );
  }

  setHoverSubscription(): void {
    this.squares.forEach(square => {
      const entered$ = fromEvent(square.nativeElement, 'mouseenter');

      entered$
        .pipe(
          switchMap((a: any) => {
            if (!a.target.classList.value.includes('hovered')) {
              a.target.classList.add('hovered');
              this.addInformRow(
                +a.target.attributes.row.value + 1,
                +a.target.attributes.col.value + 1
              );
              return of();
            }
            return of(a);
          })
        )
        .subscribe((val: any) => {
          if (val) {
            val.target.classList.remove('hovered');
          }
        });
    });
  }

  calculateHeight(): number {
    return this.grid?.nativeElement.clientWidth / this.size;
  }

  destroyGrid(): void {
    this.shouldBeDestroyed = true;
    this.grid.nativeElement.firstChild.remove();
  }
}