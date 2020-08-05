import { Pipe, PipeTransform } from '@angular/core';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if(!value){
      return "";
    }
    switch(targetUnits){
      case 'km':
        return value * 1.60934;
      case 'm' :
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 *100;
      default :
        throw Error ("Target Unit not supported");

    }
  }
}