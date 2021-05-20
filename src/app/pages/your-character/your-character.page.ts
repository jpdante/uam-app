import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service.service';

interface Atrib {
  strength : number;
  dexterity : number;
  constitution : number;
  intelligence : number;
  wisdom : number;
  charisma : number;
}
@Component({
  selector: 'app-your-character',
  templateUrl: './your-character.page.html',
  styleUrls: ['./your-character.page.scss'],
})
export class YourCharacterPage implements OnInit {
  public id: '';
  public character;

  public defaultAtribs = {
    strength : 17,
    dexterity : 10,
    constitution : 10,
    intelligence : 10,
    wisdom : 10,
    charisma : 10
  }


  constructor(private route: ActivatedRoute, public storageService: StorageService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.character = {
      image : '',
      name : '',
      gender : '',
      class : '',
      spellsList : '',
      itensList : '',
      level : 1,
      race : '',
      atrib : this.defaultAtribs
    };
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    let characters = await this.storageService.get('characters');
    this.character = characters[parseInt(this.id)];
  }

  public async levelUp (){
    if(this.character.level < 20)
    this.character.level += 1; 
    let characters = await this.storageService.get ('characters');
    characters[this.id] = this.character;
    await this.storageService.set('characters', characters);
  }
  
  public async levelDown (){
    if(this.character.level > 1)
    this.character.level -= 1;
    let characters = await this.storageService.get ('characters');
    characters[this.id] = this.character;
    await this.storageService.set('characters', characters);
  }

  public calculateMod (ability: number){
    return Math.floor((ability - 10)/2)
  }
}
