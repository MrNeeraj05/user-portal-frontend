import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freight-page',
  templateUrl: './freight-page.html',
  styleUrls: ['./freight-page.css']
})
export class FreightPageComponent implements OnInit {

  tableData = {
    ntkms: {
      targetThisYear: 12000,
      targetLastYear: 11500,
      unitsThisYear: 11800,
      unitsLastYear: 11000,
      forMonthThisYear: 1000,
      forMonthLastYear: 950,
      upToThisMonthThisYear: 9800,
      upToThisMonthLastYear: 9200,
      var: 6.5
    },
    lead: {
      // ... similar data structure for lead
    },
    // ... add more data objects for other rows
  };

  constructor() { }

  ngOnInit(): void {
  }
}