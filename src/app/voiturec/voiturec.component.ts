import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthenticationService } from "../login/auth.service";
import { Voiture } from "../voiture";
import { VoitureService } from "../voiture.service";

@Component({
  selector: 'app-voiturec',
  templateUrl: './voiturec.component.html',
  styleUrls: ['./voiturec.component.css']
})
export class VoiturecComponent implements OnInit {
  isLoggedIn = false;
  voitures: Observable<Voiture[]>;

  constructor(private voitureService: VoitureService, private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.reloadData();
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  reloadData() {
    this.voitures = this.voitureService.getVoituresList();
  }

  commentairesVoiture(id: number) {
    this.router.navigate(['commentaire', id]);
  }
}