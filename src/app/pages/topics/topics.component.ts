import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  data = [
    {
      "title": "Inspiration",
      "desc": "Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops.",
      "image": "../../../assets/topics/1.svg"
    },
    {
      "title": "Resource",
      "desc": "All the free tools and resources you need to build better websites, manage your time, be more creative, and freelance like a boss.",
      "image": "../../../assets/topics/2.svg"
    },
    {
      "title": "Announcements",
      "desc": "Get the lowdown on the latest new features of 3layers, from flexbox to responsive images, Client Billing to Google Domains.",
      "image": "../../../assets/topics/3.svg"
    },
    {
      "title": "Entrepreneurship",
      "desc": "Get tips and insights on building your own business with a little help from 3layers.",
      "image": "../../../assets/topics/4.svg"
    },
    {
      "title": "Tutorials",
      "desc": "Get step-by-step guides to building common layouts and interactions, including how to build natural-language forms, modals, ebooks, banner ads, and much more.",
      "image": "../../../assets/topics/5.svg"
    },
    {
      "title": "Freelancing",
      "desc": "Get tips, insights, and advice on becoming a freelance web designer, including how to find clients, design your freelancing rates, and managing projects.",
      "image": "../../../assets/topics/6.svg"
    },
    {
      "title": "Design Process",
      "desc": "Learn to better manage your design process, from wireframing and prototyping to gathering and handling feedback — plus tools that help.",
      "image": "../../../assets/topics/7.svg"
    },
    {
      "title": "Web Design",
      "desc": "Get detailed tips and insights on common design patterns and best practices, SEO, landing page design, and so much more.",
      "image": "../../../assets/topics/8.svg"
    }
  ]
}
