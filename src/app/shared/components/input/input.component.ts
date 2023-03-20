import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  @Input() type: string = 'text';
  @Input() placeHolder: string = '';

  public change(): void {
    this.valueChange.emit(this.value);
  }
}
