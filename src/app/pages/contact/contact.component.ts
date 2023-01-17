import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private toastr: ToastrService) {}

  onSubmit() {
    this.toastr.success('Thanks for message', 'Sent!', {timeOut: 1000});

  }
}
