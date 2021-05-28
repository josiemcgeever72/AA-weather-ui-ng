import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-value-row',
  templateUrl: './label-value-row.component.html'
})
export class LabelValueRowComponent implements OnInit {
  @Input() dataValue: string;
  @Input() labelValue: string;
  @Input() imgUrl!: string;
  
  constructor() { 
    this.dataValue ='';
    this.labelValue ='';
  }

  ngOnInit(): void {
  }

}
