

import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Voiture } from "../voiture";
import { VoitureService } from "../voiture.service";

@Component({
  selector: 'app-voitures-list',
  templateUrl: './voitures-list.component.html',
  styleUrls: ['./voitures-list.component.css']
})
export class VoituresListComponent implements OnInit {

  voitures: Observable<Voiture[]>;

  constructor(private voitureService: VoitureService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.voitures = this.voitureService.getVoituresList();
  }
  commentairesVoiture(id: number) {
    this.router.navigate(['commentaire', id]);
  }
}
