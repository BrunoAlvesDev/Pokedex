import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-comment-modal',
  templateUrl: './add-comment-modal.component.html',
  styleUrls: ['./add-comment-modal.component.scss'],
})
export class AddCommentModalComponent {
  @Output() closeEvent = new EventEmitter<string>();

  public close(): void {
    this.closeEvent.emit();
  }

  public save(): void {
    this.closeEvent.emit();
  }
}
