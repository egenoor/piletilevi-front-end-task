import { TestBed } from '@angular/core/testing'
import { Category } from '../../common/enums/category.enum'
import { MappedDiscount } from '../../common/interfaces/mapped-discount.interface'
import { DiscountFilterService } from './discount-filter.service'

const mockedDiscounts: MappedDiscount[] = [
  {
    "name": "Early Bird Discount",
    "startDate": new Date("2023-05-01"),
    "endDate": new Date("2023-05-15"),
    "timePeriod": "01.05.2023 00:00 - 15.05.2023 00:00",
    "amount": "10 €",
    "category": Category.TICKET_TYPE
  },
  {
    "name": "Summer Festival",
    "startDate": new Date("2023-06-20"),
    "endDate": new Date("2023-06-25"),
    "timePeriod": "20.06.2023 00:00 - 25.06.2023 00:00",
    "amount": "20 €",
    "category": Category.EVENT
  },
  {
    "name": "Concert Series Pass",
    "startDate": new Date("2023-07-01"),
    "endDate": new Date("2023-07-31"),
    "timePeriod": "01.07.2023 00:00 - 31.07.2023 00:00",
    "amount": "15 €",
    "category": Category.SERIES
  }
];

describe('DiscountFilterService', () => {
  let service: DiscountFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('filterBySearchCriteria()', () => {
    it('should filter discounts by freeText and category', () => {
      const testCases = [
        {
          input: {
            discount: mockedDiscounts[0],
            filters: {
              freeText: "Bake",
              categories: []
            }
          },
          expected: false
        },
        {
          input: {
            discount: mockedDiscounts[2],
            filters: {
              freeText: "",
              categories: [Category.SERIES]
            }
          },
          expected: true
        },
        {
          input: {
            discount: mockedDiscounts[1],
            filters: {
              freeText: "festival",
              categories: []
            }
          },
          expected: true
        },
        {
          input: {
            discount: mockedDiscounts[1],
            filters: {
              freeText: "",
              categories: []
            }
          },
          expected: true
        }
      ];

      testCases.forEach(({ input, expected }) => {
        expect(service.filterBySearchCriteria(input.discount, input.filters)).toEqual(expected)
      })
    })
  })
});
