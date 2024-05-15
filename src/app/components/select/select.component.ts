import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from '../../models/option.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input()
  fieldName!: string;

  @Input()
  label?: string;

  @Input()
  value: string = "";

  @Input()
  options: Option[] = [];

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  onValueChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
