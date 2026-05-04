import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MOCK_DIM, DossierDIM } from '../../../mock-data/mock-data';

interface ChecklistItem {
  document: string;
  statut: 'Reçu' | 'Manquant' | 'En attente';
}

@Component({
  standalone: false,
  selector: 'app-dim-apurement',
  templateUrl: './dim-apurement.component.html',
  styleUrls: ['./dim-apurement.component.less']
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
