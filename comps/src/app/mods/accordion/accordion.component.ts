import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items=[];
  openItemIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index:number){2
    if(index === this.openItemIndex){
      this.openItemIndex= -1;
    }
    else{
      this.openItemIndex = index;

    }  
  
  }
}
