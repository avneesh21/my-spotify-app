import { Component, OnInit } from '@angular/core';
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

  propBind: any = 'This text is extracted using property binding from the TS file into the HTML file!'; // property binding
  strInterpolation = 'This text is extracted using string interpolation!';  // string interpolation

  // signin = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   password: new FormControl(null, Validators.required),
  //   captcha: new FormControl(),
  // });

  isTrue(): boolean {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
