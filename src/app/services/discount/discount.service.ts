import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Discount } from '../../models/discount'

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private readonly baseUrl = 'https://api.intra.piletilevi.ee'

  constructor(private http: HttpClient) { }

  getDiscounts(): Observable<Discount[]> {
    const url = this.baseUrl + '/v1/discounts';
    return this.http.get<Discount[]>(url);
  }
}
