import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() startIndex: number = 1;
  @Output() startIndexChange = new EventEmitter<number>();

  public actualPageIndex: number = 1;

  public pages: number[] = [1, 2, 3, 4, 5];

  public goToPage(page: number): void {
    this.actualPageIndex = page;
    this.generatePagesButtons();
  }

  public goToPrevPage(): void {
    if (this.actualPageIndex == 1) return;

    this.actualPageIndex--;

    this.generatePagesButtons();
  }

  public goToNextPage(): void {
    if (this.actualPageIndex == 128) return;

    this.actualPageIndex++;

    this.generatePagesButtons();
  }

  public generatePagesButtons(): void {
    this.startIndexChange.emit(this.actualPageIndex);

    if (this.actualPageIndex < 3 || this.actualPageIndex > 127) return;
    this.pages = [];

    for (let i = -2; i < 3; i++) {
      this.pages.push(this.actualPageIndex + i);
    }
  }
}
