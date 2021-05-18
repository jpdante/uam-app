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
  public character: {
    image : '',
    name : '',
    class : '',
    level : 1,
    race : '',
  };

  constructor(private route: ActivatedRoute, public storageService: StorageService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    let characters = this.storageService.get('characters');
    this.character = characters[parseInt(this.id)];
  }
}
