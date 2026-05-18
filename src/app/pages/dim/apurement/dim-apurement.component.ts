import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MOCK_DIM, DossierDIM } from '../../../mock-data/mock-data';
import { NgIf, NgFor } from '@angular/common';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzProgressComponent } from 'ng-zorro-antd/progress';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzInputDirective, NzAutosizeDirective } from 'ng-zorro-antd/input';
import { NzPopconfirmDirective } from 'ng-zorro-antd/popconfirm';

interface ChecklistItem {
  document: string;
  statut: 'Reçu' | 'Manquant' | 'En attente';
}

@Component({
    selector: 'app-dim-apurement',
    templateUrl: './dim-apurement.component.html',
    styleUrls: ['./dim-apurement.component.less'],
    imports: [NgIf, NzSpaceCompactItemDirective, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzIconDirective, NzAlertComponent, NzCardComponent, NzProgressComponent, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgFor, NzTagComponent, FormsModule, NzFormDirective, ReactiveFormsModule, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormLabelComponent, NzFormControlComponent, NzDatePickerComponent, NzInputNumberComponent, NzInputDirective, NzAutosizeDirective, NzPopconfirmDirective]
})
export class DimApurementComponent implements OnInit {
  dossier: DossierDIM | undefined;
  apurementForm: FormGroup;

  checklist: ChecklistItem[] = [
    { document: 'Déclaration en douane (DUM)', statut: 'Reçu' },
    { document: 'Quittance de dédouanement', statut: 'Reçu' },
    { document: 'Justificatif de règlement (SWIFT)', statut: 'Reçu' },
    { document: 'Rapport d\'inspection', statut: 'En attente' },
    { document: 'Attestation de domiciliation apurée', statut: 'Manquant' },
  ];

  get progress(): number {
    const done = this.checklist.filter(c => c.statut === 'Reçu').length;
    return Math.round((done / this.checklist.length) * 100);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.apurementForm = this.fb.group({
      dateApurement: [null, Validators.required],
      montantApure: [null, Validators.required],
      refDocDouane: ['', Validators.required],
      observations: [''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.dossier = MOCK_DIM.find(d => d.id === id) || MOCK_DIM[0];
  }

  getCheckStatutColor(statut: string): string {
    switch (statut) {
      case 'Reçu': return 'green';
      case 'Manquant': return 'red';
      case 'En attente': return 'orange';
      default: return 'default';
    }
  }

  confirmer(): void {
    if (this.apurementForm.valid) {
      this.router.navigate(['/dim/dossiers']);
    }
  }

  annuler(): void {
    this.router.navigate(['/dim/dossiers']);
  }
}
