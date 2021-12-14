import { Component, OnInit } from '@angular/core';
import chantier from 'src/app/chantier/chantier'
@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrls: ['./chantier.component.css']
})
export class ChantierComponent implements OnInit {
 chantierList =chantier ;
  constructor() { }

  ngOnInit(): void {
  }

}
