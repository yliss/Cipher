import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "plain-text",
  templateUrl: "./plainText.component.html",
  styleUrls: ["./plainText.component.scss"]
})
export class PlainText implements OnInit {
  @Output() onPlainTextChange=new EventEmitter<string>();
  @Input() shift: number;
  @Input() plainText: string;
  constructor() {}

  ngOnInit() {
  }

  newText(value: string) {
    this.onPlainTextChange.emit(value);
    this.plainText=value;
  }
}
