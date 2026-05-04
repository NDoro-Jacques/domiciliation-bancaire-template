import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MOCK_RAPATRIEMENTS, Rapatriement } from '../../mock-data/mock-data';

@Component({
  selector: 'app-rre',
  templateUrl: './rre.component.html',
  styleUrls: ['./rre.component.less']
})
export class RreComponent {
  selectedTabIndex = 0;
  rapatriements: Rapatriement[] = MOCK_RAPATRIEMENTS;

  swiftForm: FormGroup;

  tickets = [
    { id: 'TK001', dossier: 'EXP-2024-0001', montant: 320000000, devise: 'EUR', dateCreation: new Date('2024-04-11'), statut: 'En cours', coursApplique: 655.5 },
    { id: 'TK002', dossier: 'EXP-2024-0002', montant: 185000000, devise: 'EUR', dateCreation: new Date('2024-04-03'), statut: 'Clôturé', coursApplique: 654.8 },
    { id: 'TK003', dossier: 'EXP-2024-0007', montant: 280000000, devise: 'USD', dateCreation: new Date('2024-04-06'), statut: 'En attente', coursApplique: 0 },
  ];

  constructor(private fb: FormBuilder) {
    this.swiftForm = this.fb.group({
      refSWIFT: ['', Validators.required],
      montant: [null, Validators.required],
      devise: ['EUR', Validators.required],
      dateReception: [null, Validators.required],
      banqueEmettrice: [''],
      dossierDEX: [''],
    });
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'Validé': return 'green';
      case 'En attente': return 'orange';
      case 'En cours': return 'blue';
      case 'Partiel': return 'purple';
      case 'Clôturé': return 'default';
      default: return 'default';
    }
  }
}
