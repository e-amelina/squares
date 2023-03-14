import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inform-block',
  templateUrl: './inform-block.component.html',
  styleUrls: ['./inform-block.component.scss'],
})
export class InformBlockComponent {
  @Input() data: any;
}
