import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { Commentaire } from "../commentaire";
import { CommentaireService } from "../commentaire.service";
import { Voiture } from "../voiture";
import { VoitureService } from "../voiture.service";

import { AuthenticationService } from "../login/auth.service";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  isLoggedIn = false;
  id: number;
  proprietaire: string;
  voiture: Voiture;
  commentaires: Observable<Commentaire[]>;

  constructor(private commentaireService: CommentaireService, private voitureService: VoitureService,
    private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
    this.voiture = new Voiture();
    this.id = this.route.snapshot.params['id'];
    this.voitureService.getVoiture(this.id)
      .subscribe(data => {
        console.log(data)
        this.voiture = data;

      }, error => console.log(error));
    this.reloadData();
    this.commentaire.proprietaire = this.authenticationService.getLoggedInUserName();
  }

  reloadData() {
    this.commentaires = this.commentaireService.getAllCommentairesByVoiture(this.id);

  }

  commentaire: Commentaire = new Commentaire();
  submitted = false;

  newCommentaire(): void {
    this.submitted = false;
    this.commentaire = new Commentaire();
  }

  save() {
    this.commentaireService
      .createCommentaire(this.commentaire, this.id).subscribe(data => {
        console.log(data)

        this.commentaire = new Commentaire();

        this.ngOnInit();

      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  listVoitures() {
    this.router.navigate(['voituresc']);
  }

}
