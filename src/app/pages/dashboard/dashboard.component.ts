import { Component } from '@angular/core';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NgFor } from '@angular/common';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';

interface KpiCard {
  title: string;
  value: number;
  color: string;
  icon: string;
}

interface SummaryRow {
  type: string;
  total: number;
  ouverts: number;
  enAttente: number;
  apures: number;
  enRetard: number;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less'],
    imports: [NzAlertComponent, NgFor, NzCardComponent, NzIconDirective, ɵNzTransitionPatchDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NzTagComponent]
})
export class DashboardComponent {
  kpis: KpiCard[] = [
    { title: 'Dossiers DIM', value: 142, color: '#1890ff', icon: 'import' },
    { title: 'Dossiers DEX', value: 87, color: '#52c41a', icon: 'export' },
    { title: 'RRE en cours', value: 23, color: '#faad14', icon: 'sync' },
    { title: 'Autorisations de Change', value: 34, color: '#722ed1', icon: 'transaction' },
    { title: 'À relancer', value: 18, color: '#F05023', icon: 'mail' },
    { title: 'En retard', value: 7, color: '#ff4d4f', icon: 'clock-circle' },
    { title: 'Apurés ce mois', value: 56, color: '#13c2c2', icon: 'check-circle' },
    { title: 'Fichiers GUCE', value: 3, color: '#eb2f96', icon: 'file' },
  ];

  summaryData: SummaryRow[] = [
    { type: 'DIM (Importations)', total: 142, ouverts: 98, enAttente: 37, apures: 56, enRetard: 7 },
    { type: 'DEX (Exportations)', total: 87, ouverts: 55, enAttente: 25, apures: 40, enRetard: 4 },
    { type: 'RRE (Rapatriement)', total: 23, ouverts: 15, enAttente: 8, apures: 12, enRetard: 3 },
    { type: 'AC (Autorisations)', total: 34, ouverts: 20, enAttente: 10, apures: 18, enRetard: 2 },
  ];

  monthlyData = [
    { mois: 'Janvier', dim: 12, dex: 8, apures: 15 },
    { mois: 'Février', dim: 18, dex: 11, apures: 22 },
    { mois: 'Mars', dim: 25, dex: 15, apures: 19 },
    { mois: 'Avril', dim: 14, dex: 9, apures: 28 },
  ];
}
