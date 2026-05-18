import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MOCK_DIM, DossierDIM } from '../../../mock-data/mock-data';
import { NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzDescriptionsComponent, NzDescriptionsItemComponent } from 'ng-zorro-antd/descriptions';
import { NzProgressComponent } from 'ng-zorro-antd/progress';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzTimelineComponent, NzTimelineItemComponent } from 'ng-zorro-antd/timeline';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

interface Document {
  nom: string;
  obligatoire: boolean;
  recu: boolean;
  dateReception?: Date;
}

@Component({
    selector: 'app-dim-detail',
    templateUrl: './dim-detail.component.html',
    styleUrls: ['./dim-detail.component.less'],
    imports: [NgIf, NzSpaceCompactItemDirective, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzIconDirective, NzTagComponent, NzCardComponent, NzDescriptionsComponent, NzDescriptionsItemComponent, NzProgressComponent, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgFor, NzTimelineComponent, NzTimelineItemComponent, NzAlertComponent, RouterLink, DecimalPipe, DatePipe]
})
export class DimDetailComponent implements OnInit {
  dossier: DossierDIM | undefined;
  id = '';

  documents: Document[] = [
    { nom: 'Facture commerciale', obligatoire: true, recu: true, dateReception: new Date('2024-01-20') },
    { nom: 'Connaissement / LTA', obligatoire: true, recu: true, dateReception: new Date('2024-01-22') },
    { nom: 'Certificat d\'origine', obligatoire: true, recu: false },
    { nom: 'Liste de colisage', obligatoire: false, recu: true, dateReception: new Date('2024-01-21') },
    { nom: 'Certificat phytosanitaire', obligatoire: false, recu: false },
    { nom: 'Déclaration d\'importation', obligatoire: true, recu: true, dateReception: new Date('2024-01-25') },
    { nom: 'Bon à dédouaner', obligatoire: true, recu: false },
  ];

  timeline = [
    { date: '15/01/2024', action: 'Ouverture du dossier', agent: 'Diallo Amadou', color: 'green' },
    { date: '20/01/2024', action: 'Réception facture commerciale', agent: 'Diallo Amadou', color: 'blue' },
    { date: '22/01/2024', action: 'Réception connaissement', agent: 'Diallo Amadou', color: 'blue' },
    { date: '25/01/2024', action: 'Relance client - documents manquants', agent: 'Système', color: 'orange' },
  ];

  get docsProgress(): number {
    const total = this.documents.filter(d => d.obligatoire).length;
    const done = this.documents.filter(d => d.obligatoire && d.recu).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.dossier = MOCK_DIM.find(d => d.id === this.id) || MOCK_DIM[0];
  }

  goBack(): void {
    this.router.navigate(['/dim/dossiers']);
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'En cours': return 'blue';
      case 'Complet': return 'green';
      case 'Incomplet': return 'orange';
      case 'En retard': return 'red';
      case 'Suspendu': return 'default';
      default: return 'default';
    }
  }
}
