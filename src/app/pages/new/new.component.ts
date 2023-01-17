import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  info = [
    {
      "name": "Inspiration",
      "desc": "Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
    },
    {
      "name": "Resource",
      "desc": "Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
    },
    {
      "name": "Announcements",
      "desc": "Get the lowdown on the latest new features of 3layers, from flexbox to responsive images, Client Billing to Google Domains."
    },
    {
      "name": "Entrepreneurship",
      "desc": "Get tips and insights on building your own business with a little help from 3layers."
    },
    {
      "name": "Tutorials",
      "desc": "Get step-by-step guides to building common layouts and interactions, including how to build natural-language forms, modals, ebooks and other."
    },
    {
      "name": "Freelancing",
      "desc": "Get tips, insights, and advice on becoming a freelance web designer, including how to find clients and design your freelancing rates."
    },
    {
      "name": "Design",
      "desc": "Learn to better manage your design process, from wireframing and prototyping to gathering and handling feedback — plus tools that help."
    },
    {
      "name": "Web",
      "desc": "Get detailed tips and insights on common design patterns and best practices, SEO, landing page design, and so much more."
    }
  ]
  public type: any;
  pageTitle = "New";
  pageDescription = "Our latest web design tips, tricks, insights, and resources, hot off the presses.";
  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.type = params["type"];
      if(this.type != "new") {
        this.info.map(item => {
          if(item.name.toLowerCase() == this.type.toLowerCase()) {
            this.pageTitle = item.name;
            this.pageDescription = item.desc;
          }
        })
      }
    });
  }
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
    },
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
    },
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
