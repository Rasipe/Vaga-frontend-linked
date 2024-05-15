import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardSet } from '../../models/collection.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.scss'
})
export class SetListComponent {

  @Input()
  sets: CardSet[] = [];

  @Output()
  setSelected: EventEmitter<string> = new EventEmitter();

  onClickHander(set: CardSet) {
    this.setSelected.emit(set.code)
  }
}
