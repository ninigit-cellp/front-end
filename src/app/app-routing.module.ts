import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { LoginComponent } from './login/login.component';
import { VoiturecComponent } from './voiturec/voiturec.component';
import { VoituresListComponent } from './voitures-list/voitures-list.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: VoituresListComponent },
    { path: 'logout', component: VoituresListComponent },
    { path: 'voitures', component: VoituresListComponent },
    { path: 'voituresc', component: VoiturecComponent },
    { path: 'commentaire/:id', component: CommentaireComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }