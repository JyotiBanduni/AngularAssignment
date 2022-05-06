import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-thumbnail',
  templateUrl: './img-thumbnail.component.html',
  styleUrls: ['./img-thumbnail.component.css']
})
export class ImgThumbnailComponent implements OnInit {

  imgSrc = 'https://assets-natgeotv.fnghub.com/ShowHubs/446.jpg';
  imgheight = '300';
  imgwidth = '400';
  altTxt = 'Image is here!';

  constructor() { }

  ngOnInit(): void {
  }
  ClickedOn(event:Event): void{
    alert("This is a banner component");
  }

}
