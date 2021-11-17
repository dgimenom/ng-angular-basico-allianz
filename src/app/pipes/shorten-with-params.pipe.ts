import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenWithParams',
})
export class ShortenWithParamsPipe implements PipeTransform {
  transform(value: string, maxLength = 10 ): any {
    if (value.length > maxLength) {
      return value.substr(0, maxLength) + '...';
    }
    return value;
  }
}
