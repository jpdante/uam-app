import { Component, OnInit } from '@angular/core';
import Net from 'axios';

interface Elements {
  index: string;
  type: string;
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSearch(e: any) {
    console.log(e.target.value);
    Net.get('https://www.dnd5eapi.co/api/spells?name=' + e.target.value)
      .then((e: any) => {
        console.log(e.data);
        this.elementsList = [];
        if (e.data) {
          e.data.results.forEach(element => {
            this.elementsList.push({
              index: element.index,
              type: "spell",
              name: element.name,
            });
          });
        }
      })
      .catch((e: any) => {
        console.error(e);
      });
  }

  public elementsList: Elements[] = [
  ];
}
