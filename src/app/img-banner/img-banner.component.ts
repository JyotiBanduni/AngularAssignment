import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img-banner',
  templateUrl: './img-banner.component.html',
  styleUrls: ['./img-banner.component.css']
})
export class ImgBannerComponent implements OnInit {
  @Input() imagSource='https://i.natgeofe.com/n/daf0a20f-9795-46b8-903d-6fc029c53d3e/NationalGeographic_1200591_3x2.jpg';
  @Input() altText='Picture is here!';
  @Input() imgHeight = '500';
  @Input() imgWidth = '500';
  @Output() ClickedBy : EventEmitter<any> = new EventEmitter<any>();
  Loader = true;

  constructor() { }

  ngOnInit(): void {
  }
  clicked(): void{
    this.ClickedBy.emit("I'm being emitted by parent component");

  }
  Error() : void{
    this.imagSource='https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png';
  }

}
