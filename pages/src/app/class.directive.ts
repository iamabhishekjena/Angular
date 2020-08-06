import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element : ElementRef) { }
  
  @Input('appClass') set classNames(objectObj : any){
    for(let key in objectObj){
      if(objectObj[key]){
        this.element.nativeElement.classList.add(key);
      }
      else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
