import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    },
    {
      "title": "Preparing Your WordPress Site for the Google Mobile-First Index",
      "image": "../../../assets/blogs/3.jpg",
      "topic": "RESOURCE",
      "date": "10 December"
    },
    {
      "title": "How To Use Yoast SEO On WordPress: Complete Tutorial",
      "image": "../../../assets/blogs/4.jpg",
      "topic": "FRONT END",
      "date": "19 May"
    },
    {
      "title": "9 Best WordPress LMS Plugins",
      "image": "../../../assets/blogs/5.jpg",
      "topic": "RESOURCE",
      "date": "10 December"
    },
    {
      "title": "Interview with David Vongries",
      "image": "../../../assets/blogs/6.jpg",
      "topic": "FRONT END",
      "date": "19 May"
    }
  ]
}
