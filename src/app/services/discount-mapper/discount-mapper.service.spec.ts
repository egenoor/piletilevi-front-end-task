import { formatCurrency, registerLocaleData } from '@angular/common'
import localeEt from '@angular/common/locales/et'
import { LOCALE_ID } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { Category } from '../../common/enums/category.enum'
import { MappedDiscount } from '../../common/interfaces/mapped-discount.interface'
import { Discount } from '../../models/discount'
import { DiscountMapperService } from './discount-mapper.service'

registerLocaleData(localeEt)

describe('DiscountMapperService', () => {
  let service: DiscountMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: LOCALE_ID, useValue: 'et-EE'}]
    });
    service = TestBed.inject(DiscountMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map discounts to correct structure', () => {
    const expectedResult: MappedDiscount[] = [
      {
        "name": "Early Bird Discount",
        "startDate": new Date("2023-05-01"),
        "endDate": new Date("2023-05-15"),
        "timePeriod": "01.05.2023 00:00 - 15.05.2023 00:00",
        "amount": formatCurrency(10, "et-EE", "€", "EUR", "1.0-2"),
        "category": Category.TICKET_TYPE
    },
    {
        "name": "Summer Festival",
        "startDate": new Date("2023-06-20"),
        "endDate": new Date("2023-06-25"),
        "timePeriod": "20.06.2023 00:00 - 25.06.2023 00:00",
        "amount": formatCurrency(20, "et-EE", "€", "EUR", "1.0-2"),
        "category": Category.EVENT
    },
    {
        "name": "Concert Series Pass",
        "startDate": new Date("2023-07-01"),
        "endDate": new Date("2023-07-31"),
        "timePeriod": "01.07.2023 00:00 - 31.07.2023 00:00",
        "amount": formatCurrency(15, "et-EE", "€", "EUR", "1.0-2"),
        "category": Category.SERIES
    }
    ];
    const input: Discount[] = [
        {
            "id": 1,
            "name": "Early Bird Discount",
            "startDate": "2023-05-01",
            "endDate": "2023-05-15",
            "discountAmount": 10,
            "category": Category.TICKET_TYPE
        },
        {
            "id": 2,
            "name": "Summer Festival",
            "startDate": "2023-06-20",
            "endDate": "2023-06-25",
            "discountAmount": 20,
            "category": Category.EVENT
        },
        {
            "id": 3,
            "name": "Concert Series Pass",
            "startDate": "2023-07-01",
            "endDate": "2023-07-31",
            "discountAmount": 15,
            "category": Category.SERIES
        }
    ];
    expect(service.mapDiscounts(input)).toEqual(expectedResult);
  })
});
