import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title : "Why is the sky blue", content: " Just because it is "},
    {title : "Another random question-1", content : " Appropriate Answer-1"},
    {title : "Another random question-2", content : " Appropriate Answer-2"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
