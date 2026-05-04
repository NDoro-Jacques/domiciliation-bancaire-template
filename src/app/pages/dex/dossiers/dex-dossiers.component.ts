import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MOCK_DEX, DossierDEX } from '../../../mock-data/mock-data';

@Component({
  selector: 'app-dex-dossiers',
  templateUrl: './dex-dossiers.component.html',
  styleUrls: ['./dex-dossiers.component.less']
})
export class DexDossiersComponent implements OnInit {
  filterForm: FormGroup;
  dossiers: DossierDEX[] = MOCK_DEX;
  filteredDossiers: DossierDEX[] = [];
  pageIndex = 1;
  pageSize = 10;

  statutOptions = ['En cours', 'Apuré', 'Incomplet', 'En retard', 'Suspendu'];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''],
      statut: [null],
    });
  }

  ngOnInit(): void {
    this.filteredDossiers = [...this.dossiers];
  }

  applyFilter(): void {
    const { search, statut } = this.filterForm.value;
    this.filteredDossiers = this.dossiers.filter(d => {
      const matchSearch = !search || d.client.toLowerCase().includes(search.toLowerCase())
        || d.numeroDomiciliation.toLowerCase().includes(search.toLowerCase());
      const matchStatut = !statut || d.statut === statut;
      return matchSearch && matchStatut;
    });
  }

  resetFilter(): void {
    this.filterForm.reset();
    this.filteredDossiers = [...this.dossiers];
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'En cours': return 'blue';
      case 'Apuré': return 'green';
      case 'Incomplet': return 'orange';
      case 'En retard': return 'red';
      case 'Suspendu': return 'default';
      default: return 'default';
    }
  }

  formatMontant(montant: number): string {
    return new Intl.NumberFormat('fr-FR').format(montant) + ' FCFA';
  }
}
