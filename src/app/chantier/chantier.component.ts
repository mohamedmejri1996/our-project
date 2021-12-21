import { Component, OnInit } from '@angular/core';
import {ChantierService} from 'src/app/services/chantier.service'
@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrls: ['./chantier.component.css']
})
export class ChantierComponent implements OnInit {
 public chantierList : any =[];
  constructor(private chantierService:ChantierService  ) { }

  ngOnInit(): void {
    this.chantierService.all().subscribe(
      res => this.chantierList = res
    );
  }

}
