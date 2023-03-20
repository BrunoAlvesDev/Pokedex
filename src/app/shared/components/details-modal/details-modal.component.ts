import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {
  @Output() closeEvent = new EventEmitter<string>();

  public close(): void {
    this.closeEvent.emit();
  }
}
