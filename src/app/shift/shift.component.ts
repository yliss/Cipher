import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "shift",
  templateUrl: "./shift.component.html",
  styleUrls: ["./shift.component.scss"]
})
export class Shift implements OnInit {
  @Output() onShiftChange= new EventEmitter<number>();

  shiftOptions: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  constructor() {
  }

  ngOnInit() {
  }

  newSelection(value: number) {
    this.onShiftChange.emit(value);
  }
}
