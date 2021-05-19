import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-your-character',
  templateUrl: './your-character.page.html',
  styleUrls: ['./your-character.page.scss'],
})
export class YourCharacterPage implements OnInit {
  public id: '';
  public character;

  constructor(private route: ActivatedRoute, public storageService: StorageService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.character = {
      image : 'https://1.bp.blogspot.com/-sjbGDcBYNcs/WVMeIaFQARI/AAAAAAAA90Y/BUy7yGOFduEtbZlslht9PFccIAbwBKNkgCLcBGAs/s1600/iron-maiden-comics-2.jpg',
      name : 'None',
      class : 'None',
      level : 1,
      race : 'None',
    };
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    let characters = await this.storageService.get('characters');
    this.character = characters[parseInt(this.id)];
  }

  public levelUp (){
    if(this.character.level < 20)
    this.character.level += 1;
  }
  public levelDown (){
    if(this.character.level > 1)
    this.character.level -= 1;
  }
}
