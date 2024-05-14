import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  buttonType: 'button' | 'submit' = 'button';

  @Input()
  label!: string;

  @Input()
  disabled?: boolean;

  @Output()
  click: EventEmitter<void> = new EventEmitter();

  clickHandler(event: any) {
    event.preventDefault();
    this.click.emit();
  }
}
