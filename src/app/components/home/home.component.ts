import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollMenu', { read: ElementRef, static: true }) public widgetsContent: ElementRef<any>;
  constructor() { }

  ngOnInit() {
    this.scrollToLeft(this.getScrollAmountBasedOnWindowSize());
  }

  scrollToLeft(pixels: number) {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + pixels), behavior: 'smooth' });
  }


  scrollToRight(pixels: number) {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - pixels), behavior: 'smooth' });
  }

  getScrollAmountBasedOnWindowSize(): number {
    let scrollAmount = 84;
    if (window.innerWidth <= 1080) {
      scrollAmount = 84;
    }
    return scrollAmount;
  }

  handleLeftArrowClick() {
    this.scrollToLeft(84);
  }

  handleRightArrowClick() {
    this.scrollToRight(84);
  }

}
