import { Component, OnInit } from '@angular/core';
import { IRickandmorty } from 'src/app/interfaces/rickandmorty';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss'],
})
export class RickandmortyComponent implements OnInit {
  public characters: IRickandmorty[] = [];
  constructor(private rickService: RickandmortyService) {}

  ngOnInit(): void {
    this.rickService.getAllCharacters().subscribe((res) => {
      this.characters = res;
    });
  }
}
