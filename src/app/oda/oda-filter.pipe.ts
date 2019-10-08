import { Pipe, PipeTransform } from '@angular/core';
import { Oda } from '../models/Oda';

@Pipe({
  name: 'odaFilter'
})
export class OdaFilterPipe implements PipeTransform {

  transform(value: Oda[], filterText?: string): Oda[] {

    filterText=filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((o:Oda)=>o.aciklama.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
