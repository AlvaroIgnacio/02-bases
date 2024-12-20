import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid())

@Injectable({providedIn: 'root'})
export class DbzService {

  characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter(character: Character): void{
    const newCharacter = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  /*
  onDeleteCharacter(i: number): void{
    this.characters.splice(i,1);
  }*/

  deleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
