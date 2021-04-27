import { Component, OnInit } from '@angular/core';
import Net from 'axios';

interface Rule {
  index: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Net.get('https://www.dnd5eapi.co/api/rules/')
    .then((e: any) => {
      console.log(e.data);
      this.rules = [];
      if (e.data) {
        e.data.results.forEach(element => {
          this.rules.push({
            index: element.index,
            name: element.name,
            url: element.url,
          });
        });
      }
    })
    .catch((e: any) => {
      console.error(e);
    });
  }

  public rules: Rule[] = [];

}
