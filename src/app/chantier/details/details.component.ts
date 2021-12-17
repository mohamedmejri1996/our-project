import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ChantierService} from 'src/app/services/chantier.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  chantie : any;
   idch=this.route.snapshot.params.chantierid;
  constructor(private route: ActivatedRoute,private chantierService:ChantierService ) { }

  ngOnInit(): void {
    this.chantierService.get( this.idch).subscribe(
      res => this.chantie = res
    );

  }

}
