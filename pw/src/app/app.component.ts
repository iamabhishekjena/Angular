import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password='';

  onChangeLength(passwordLength : number){
    if(passwordLength==null){
      this.length =0;
    }
    else{
      if(!isNaN(passwordLength)){
        this.length=passwordLength;
      }
    }
  }
  
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onButtonClick(){
    const numbers = "1234567890";
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '~!@#$%^&*_./,;:\?><=-`';

    let validChars='';
    if(this.includeLetters){
    
      validChars+=letters;
    
    }
    if(this.includeNumbers){

      validChars+=numbers;
    
    }
    if(this.includeSymbols){

      validChars+=symbols;
    
    }
  
  let generatedPassword ='';

  for(let i=0; i<this.length; i++){
    const index = Math.floor(Math.random()*validChars.length);
    generatedPassword+=validChars[index];
  }
  this.password=generatedPassword;
  }
}
