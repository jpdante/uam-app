import { Component, OnInit } from '@angular/core';
//import { TextInput } from 'ionic-angular';

interface Elements {
  name : string,
  description: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  /*onSearch(e: TextInput){
    console.error(e.TextInput);
  }*/

  public elementsList : Elements[] = [
    {
      name : "Healing Potion" ,
      description : "1d6" 
    },
    {
      name : "Duck" ,
      description : "1d100" 
    },
    {
      name : "Long Sword" ,
      description : "1d8" 
    },
    {
      name : "Mother-in-Law" ,
      description : "1dbillion" 
    },
  ];
}
