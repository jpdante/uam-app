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
  public type: string
  public subtype : string

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
          switch (this.subtype) {
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
              break;
            case "2":
              Net.get('https://www.dnd5eapi.co/api/subclasses?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'subclass',
                  name: element.name,
                });
              });
            }
          })
              break;
            case "3":
              Net.get('https://www.dnd5eapi.co/api/features?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'feature',
                  name: element.name,
                });
              });
            }
          })
              break;
            case "4":
              Net.get('https://www.dnd5eapi.co/api/starting-equipment?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'Starting Equipmente',
                  name: element.name,
                });
              });
            }
          })
              break;
          
            default:
              break;
          }
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
          switch (this.subtype) {
            case "1":
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
              break;
            case "2":
              Net.get('https://www.dnd5eapi.co/api/subraces?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'subrace',
                  name: element.name,
                });
              });
            }
          })
              break;
            case "3":
              Net.get('https://www.dnd5eapi.co/api/traits?name=' + e.target.value)
          .then((e: any) => {
            console.log(e.data);
            this.elementsList = [];
            if (e.data) {
              e.data.results.forEach((element) => {
                this.elementsList.push({
                  index: element.index,
                  type: 'trait',
                  name: element.name,
                });
              });
            }
          })
              break;

            default:
              break;
          }
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
