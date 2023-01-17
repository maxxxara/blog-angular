import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
  public getScreenWidth: any;
  @Input() item: any;
  @Input() height: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 1000) this.height = 280
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 1000) this.height = 280

  }
}
