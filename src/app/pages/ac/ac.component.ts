import { Component } from '@angular/core';
import { NzTabsComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { NzTagComponent } from 'ng-zorro-antd/tag';

@Component({
    selector: 'app-ac',
    templateUrl: './ac.component.html',
    styleUrls: ['./ac.component.less'],
    imports: [NzTabsComponent, NzTabComponent, NzSpaceCompactItemDirective, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzIconDirective, NzCardComponent, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgFor, NzTagComponent, DecimalPipe, DatePipe]
})
export class AcComponent {
  selectedTabIndex = 0;

  acData = [
    { id: 'AC001', refGUCE: 'GUCE-AC-2024-001', client: 'KOUAME & FILS SARL', montant: 25000000, devise: 'EUR', dateEmission: new Date('2024-03-10'), statut: 'Actif' },
    { id: 'AC002', refGUCE: 'GUCE-AC-2024-002', client: 'GLOBAL TRADE CI', montant: 75000000, devise: 'USD', dateEmission: new Date('2024-03-15'), statut: 'En attente' },
    { id: 'AC003', refGUCE: 'GUCE-AC-2024-003', client: 'SOPROCI', montant: 120000000, devise: 'EUR', dateEmission: new Date('2024-03-20'), statut: 'Expiré' },
    { id: 'AC004', refGUCE: 'GUCE-AC-2024-004', client: 'CI DISTRIBUTION', montant: 45000000, devise: 'USD', dateEmission: new Date('2024-04-01'), statut: 'Actif' },
  ];

  transfers = [
    { id: 'TR001', ac: 'AC001', montant: 12000000, devise: 'EUR', date: new Date('2024-03-25'), banque: 'BNP PARIBAS', statut: 'Effectué' },
    { id: 'TR002', ac: 'AC002', montant: 35000000, devise: 'USD', date: new Date('2024-03-28'), banque: 'SOCIÉTÉ GÉNÉRALE', statut: 'En cours' },
  ];

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'Actif': return 'green';
      case 'En attente': return 'orange';
      case 'Expiré': return 'red';
      case 'Effectué': return 'green';
      case 'En cours': return 'blue';
      default: return 'default';
    }
  }
}
