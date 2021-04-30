import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() iconName: string;
  @Output() buttonClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick(value: string) {
    this.buttonClick.emit(value);
  }
}
