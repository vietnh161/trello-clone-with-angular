import { Type } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  Board,
  BoardRecentlyView,
  BoardShortDetail,
} from 'src/app/models/board';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent implements OnInit, AfterViewInit {
  @Input() boardData!: Board | BoardShortDetail | BoardRecentlyView;
  @Input() boardType!: 'Board' | 'BoardShortDetail' | 'BoardRecentlyView';
  @ViewChild('boardCard', { static: false }) boardCard!: ElementRef;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.elRef.nativeElement);

    this.renderer.setAttribute(
      this.boardCard.nativeElement,
      'style',
      `background: ${this.boardData.Background}`
    );
  }
}
