import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.scss'
})
export class TextfieldComponent {

  @Input()
  fieldName!: string;

  @Input()
  label?: string;

  @Input()
  placeholder?: string;

  @Input()
  value: string = "";

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

}
