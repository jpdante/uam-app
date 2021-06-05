import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
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
  public editCharacterStory: boolean = false;
  public editCharactersList: boolean = false;
  public editCharactersSpells: boolean = false;
  public editLanguagesAndProeficiencies: boolean = false;


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

  public async updateImage(e: any) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
      quality: 100,
      
    });
    console.log(capturedPhoto);
    if (capturedPhoto.dataUrl) {
      this.character.image = capturedPhoto.dataUrl;
    } 
  }


  public async changeLifePoints (life: number){
    if(life < 1000 && life > 0)
    this.character.lifePoints = life;
    this.getSetSave();
  }

  public async changeArmorClass (armor: number){
    if(armor < 100 && armor > 0)
    this.character.armorClass = armor; 
    this.getSetSave();
  }

  public async levelUp (){
    if(this.character.level < 20)
    this.character.level += 1; 
    this.getSetSave();
  }
  
  public async levelDown (){
    if(this.character.level > 1)
    this.character.level -= 1;
    this.getSetSave();
  }

  public async strengthUp (){
    if(this.character.atrib.strength < 30)
    this.character.atrib.strength += 1; 
    this.getSetSave();
  }
  
  public async strengthDown (){
    if(this.character.atrib.strength > 1)
    this.character.atrib.strength -= 1;
    this.getSetSave();
  }

  public async dexterityUp (){
    if(this.character.atrib.dexterity < 30)
    this.character.atrib.dexterity += 1; 
    this.getSetSave();
  }
  
  public async dexterityDown (){
    if(this.character.atrib.dexterity > 1)
    this.character.atrib.dexterity -= 1;
    this.getSetSave();
  }

  public async constitutionUp (){
    if(this.character.atrib.constitution < 30)
    this.character.atrib.constitution += 1; 
    this.getSetSave();
  }
  
  public async constitutionDown (){
    if(this.character.atrib.constitution > 1)
    this.character.atrib.constitution -= 1;
    this.getSetSave();
  }

  public async intelligenceUp (){
    if(this.character.atrib.intelligence < 30)
    this.character.atrib.intelligence += 1; 
    this.getSetSave();
  }
  
  public async intelligenceDown (){
    if(this.character.atrib.intelligence > 1)
    this.character.atrib.intelligence -= 1;
    this.getSetSave();
  }

  public async wisdomUp (){
    if(this.character.atrib.wisdom < 30)
    this.character.atrib.wisdom += 1; 
    this.getSetSave();
  }
  
  public async wisdomDown (){
    if(this.character.atrib.wisdom > 1)
    this.character.atrib.wisdom -= 1;
    this.getSetSave();
  }

  public async charismaUp (){
    if(this.character.atrib.charisma < 30)
    this.character.atrib.charisma += 1; 
    this.getSetSave();
  }
  
  public async charismaDown (){
    if(this.character.atrib.charisma > 1)
    this.character.atrib.charisma -= 1;
    this.getSetSave();
  }

  public async changeCharacterStory (text: string){
    this.character.story = text; 
    this.getSetSave();
  }

  public async changeItens (text: string){
    this.character.itensList = text;
    this.getSetSave();
  }

  public async changeSpells (text: string){
    this.character.spellsList = text;
    this.getSetSave();
  }

  public async changeLanguagesAndProeficiencies (text: string){
    this.character.languagesAndProficiencies = text;
    this.getSetSave();
  }

  public async changeXp (number: number){
    if(number < 1000000000 && number > 0)
    this.character.xp = number;
    this.getSetSave();
  }

  public async changeAlignment  (text: string){
    this.character.alignment = text;
    this.getSetSave();
  }

  public async changeInitiative (number: number){
    if(number < 21 && number > 0)
    this.character.initiative = number;
    this.getSetSave();
  }

  public async changeSpeed (number: number){
    if(number < 100 && number > 0)
    this.character.speed = number;
    this.getSetSave();
  }

  public async getSetSave (){
    let characters = await this.storageService.get ('characters');
    characters[this.id] = this.character;
    await this.storageService.set('characters', characters);
  }

  public async savePage (a: number, b: number, c: string, d: string, e: string, f: string, g: number, h: string, i: number, j: number){
    this.changeLifePoints(a);
    this.changeArmorClass(b);
    this.changeCharacterStory(c);
    this.changeSpells(d);
    this.changeItens(e);
    this.changeLanguagesAndProeficiencies(f);
    this.changeXp(g);
    this.changeAlignment(h);
    this.changeInitiative(i);
    this.changeSpeed(j);
  }

  public calculateMod (ability: number){
    return Math.floor((ability - 10)/2)
  }
}
