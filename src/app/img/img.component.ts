import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  imgSrc = 'https://i.natgeofe.com/n/af145d8c-b599-4597-9ace-f6a7b9d4fe0c/Selvagens_DSC04967_3x2.jpg';
  imgheight = '300';
  imgwidth = '400';
  altTxt = 'Image is here';

  constructor() { }

  ngOnInit(): void {
  }
  OnclickedBy(event : Event): void{
      console.log(event);
  }

}
