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
  public type: string;
  public subtype: string;
  public verifyType = "classes"


  constructor() {}

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
                type: type,
                name: element.name,
              });
            });
          }
        })
        .catch((e: any) => {
          console.error(e);
        });
  }

  public elementsList: Elements[] = [];
}
