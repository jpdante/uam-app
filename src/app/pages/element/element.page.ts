import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Net from 'axios';
import { Remarkable } from 'remarkable';

interface Element {
  type: string;
  data: any;
}

@Component({
  selector: 'app-element',
  templateUrl: './element.page.html',
  styleUrls: ['./element.page.scss'],
})
export class ElementPage implements OnInit {
  public elementBase: {
    index: string;
    name: string;
    url: string;
  } = {
    index: '',
    name: '',
    url: '',
  };

  public element: Element = {
    type: '',
    data: {
      name: '',
    },
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.elementBase = JSON.parse(params['id']);
    });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.loadElement();
  }

  public async loadElement() {
    var md = new Remarkable();
    await Net.get(`https://www.dnd5eapi.co${this.elementBase.url}`)
      .then((e: any) => {
        console.log(e.data);
        if (e.data) {
          var urlBroken = this.elementBase.url.split('/');
          this.element = { type: urlBroken[2], data: e.data };
        }
      })
      .catch((e: any) => {
        console.error(e);
      });
  }

  public redirectToElement(obj: any) {
    this.router.navigate(['/element', JSON.stringify(obj)]);
  }
}
