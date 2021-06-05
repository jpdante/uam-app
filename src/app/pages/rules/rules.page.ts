import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public rules: Rule[] = [];

  constructor(private router: Router) { }

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

  public redirectToTopic(id: any) {
    this.router.navigate(['/text-rule', JSON.stringify(this.rules[id])]);
  }

}
