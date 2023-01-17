import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bg = '#F9F9FB';
  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if(event.url == "/") {
          this.bg = "#F9F9FB"
        } else {
          this.bg = "#FFFFFF"
        }
      }
  });
  }
}
