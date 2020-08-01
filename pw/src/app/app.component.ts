import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  password='';

  onChangeUseLetter(){
    this.includeLetters = !this.includeLetters;
  }
  onButtonClick(){
    console.log(this.includeLetters);
    this.password ="Button was clicked";
  }
}
