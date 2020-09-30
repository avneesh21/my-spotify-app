import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  // datepicker related variables
  minDate = new Date();
  maxDate = new Date(2030, 9, 21);

  constructor() { }

  // PIPES related data
  projectdetails: any[] = [
    {
      id: 'p01', technology: 'Java'
    },
    {
      id: 'p02', technology: 'C++'
    },
    {
      id: 'p03', technology: 'Python'
    },
    {
      id: 'p04', technology: 'Angular'
    }
  ];


  ngOnInit(): void {
  }

}
