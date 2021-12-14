import { Component, OnInit } from '@angular/core';

import { tache} from './taches';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  public tacheList  = tache ;
  constructor() { }

  ngOnInit(): void {
  }

}
