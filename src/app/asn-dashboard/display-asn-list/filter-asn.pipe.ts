import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAsn'
})
export class FilterAsnPipe implements PipeTransform {
  transform(asns: any[], status: string): any[] {
    if (!asns) return [];
    if (status === 'all') return asns;
    return asns.filter(asn => asn.status.toString() === status);
  }
}
