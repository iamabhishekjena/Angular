import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertkm'
})
export class ConvertkmPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value){
      return "";
    }
    return value * 1.60934;
  }

}
