import { Component } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent {
  data = [
    {
      "title": "How to Migrate from Wix to Wordpress (Complete Guide)",
      "image": "../../../assets/blogs/1.jpg",
      "topic": "RESOURCE",
      "date": "10 December"
    },
    {
      "title": "10 Best WordPress Directory Plugins",
      "image": "../../../assets/blogs/2.jpg",
      "topic": "FRONT END",
      "date": "19 May"
    }
  ]
}
