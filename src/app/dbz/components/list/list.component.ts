import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Output()
  //onDeleteCharacter: EventEmitter<number> = new EventEmitter()
  onDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  /*
  deleteCharacter(index: number): void{
    this.onDeleteCharacter.emit(index);
  }*/

  deleteCharacterById(id?: string): void{
    if(!id) return;
    this.onDelete.emit(id);
  }

}

