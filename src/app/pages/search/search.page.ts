import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Net from 'axios';

interface Elements {
  index: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public type: string;
  public subtype: string;
  public verifyType = "classes"

  public elementsList: Elements[] = [];

  constructor(private router: Router) { }

  ngOnInit() {}

  public forceSearchType() {
    this.search(this.type, undefined, " ");
  }

  public forceSearchSubType() {
    this.search(this.type, this.subtype, " ");
  }

  onSearch(e: any) {
    this.search(this.type, this.subtype, e.target.value);
  }

  public search(type: string, subtype: string | undefined, name: string) {
    let url;
    if (subtype === undefined) {
      url = `https://www.dnd5eapi.co/api/${type}?name=${name}`
    } else {
      url = `https://www.dnd5eapi.co/api/${subtype}?name=${name}`
    }
    Net.get(url)
        .then((e: any) => {
          console.log(e.data);
          this.elementsList = [];
          if (e.data) {
            e.data.results.forEach((element) => {
              this.elementsList.push({
                index: element.index,
                name: element.name,
                url: element.url
              });
            });
          }
        })
        .catch((e: any) => {
          console.error(e);
        });
  }

  public redirectToElement(id: any) {
    this.router.navigate(['/element', JSON.stringify(this.elementsList[id])]);
  }
}
