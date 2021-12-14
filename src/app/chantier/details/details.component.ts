import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import chantier from '../chantier';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  chantierList =chantier ;
  chantie : any;
   idch=this.route.snapshot.params.chantierid;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    for (var ch of this.chantierList) {

      if(ch.id==this.idch){
        this.chantie =ch ;
      }
    }
  }

}
