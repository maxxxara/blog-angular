import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent {
  @Input() item: any;

}
