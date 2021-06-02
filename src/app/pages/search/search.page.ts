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

  constructor() {}

  ngOnInit() {}

  onSearch(e: any) {
    console.log(this.type)
    switch (this.type) {
      case "1":
        Net.get('https://www.dnd5eapi.co/api/classes?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'class',
                  name: element.name,
                });
              });
            }
          })
          .catch((e: any) => {
            console.error(e);
          });
        break;
      case "2":
        Net.get('https://www.dnd5eapi.co/api/races?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'race',
                  name: element.name,
                });
              });
            }
          })
          .catch((e: any) => {
            console.error(e);
          });
        break;
      case "3":
        Net.get('https://www.dnd5eapi.co/api/equipment?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'equipment',
                  name: element.name,
                });
              });
            }
          })
          .catch((e: any) => {
            console.error(e);
          });
        break;
      case "4":
        console.log("ola amigo")
        Net.get('https://www.dnd5eapi.co/api/spells?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'spell',
                  name: element.name,
                });
              });
            }
          })
          .catch((e: any) => {
            console.error(e);
          });
        break;
      case "5":
        Net.get('https://www.dnd5eapi.co/api/monsters?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'monster',
                  name: element.name,
                });
              });
            }
          })
          .catch((e: any) => {
            console.error(e);
          });
        break;
      default:
        break;
    }
  }

  public elementsList: Elements[] = [];
}
