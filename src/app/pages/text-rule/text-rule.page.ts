import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Net from 'axios';
import { Remarkable } from 'remarkable';

interface Topic {
  index: string;
  name: string;
  url: string;
}

interface TopicData {
  desc: string;
}

@Component({
  selector: 'app-text-rule',
  templateUrl: './text-rule.page.html',
  styleUrls: ['./text-rule.page.scss'],
})
export class TextRulePage implements OnInit {
  public ruleTopic: {
    index: string;
    name: string;
    url: string;
  } = {
    index: 'none',
    name: 'None',
    url: 'none',
  };
  public topicList: Topic[] = [];
  public topicData: TopicData = {
    desc: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.ruleTopic = JSON.parse(params['id']);
    });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.loadTopics();
  }

  public async loadTopics() {
    var md = new Remarkable();
    await Net.get(`http://www.dnd5eapi.co${this.ruleTopic.url}`)
      .then((e: any) => {
        console.log(e.data);
        this.topicList = [];
        if (e.data) {
          if (e.data.subsections) {
            e.data.subsections.forEach((element) => {
              this.topicList.push({
                index: element.index,
                name: element.name,
                url: element.url,
              });
            });
          } else {
            this.topicData = {
              desc: md.render(e.data.desc),
            };
          }
        }
      })
      .catch((e: any) => {
        console.error(e);
      });
  }

  public redirectToTopic(id: any) {
    this.router.navigate(['/text-rule', JSON.stringify(this.topicList[id])]);
  }
}
