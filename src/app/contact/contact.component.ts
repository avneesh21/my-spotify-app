import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  // styleUrls: ['./contact.component.css']
  styles: [
    `
      .classBinding {
        color: #1DB954;
      }
    `
  ]
})
export class ContactComponent implements OnInit {

  @Input() nameOfAuthor: string;

  propBind: any = 'This text is extracted using property binding from the TS file into the HTML file!'; // property binding
  strInterpolation = 'This text is extracted using string interpolation!';  // string interpolation

  // Two way binding related variables
  fname = '';
  lname = '';

  // signin = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   password: new FormControl(null, Validators.required),
  //   captcha: new FormControl(),
  // });

  isTrue(): boolean {
    return true;
  }

  constructor() { }

  goToHomeHandler(): void
  {
    console.log('Event Binding example!');
    alert('Event Binding example, executed by ' + this.nameOfAuthor);
  }

  ngOnInit(): void {
  }

}
