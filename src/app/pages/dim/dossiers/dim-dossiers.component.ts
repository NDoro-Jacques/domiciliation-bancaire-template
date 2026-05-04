import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MOCK_DIM, DossierDIM } from '../../../mock-data/mock-data';

@Component({
  selector: 'app-dim-dossiers',
  templateUrl: './dim-dossiers.component.html',
  styleUrls: ['./dim-dossiers.component.less']
})
export class DimDossiersComponent implements OnInit {
  filterForm: FormGroup;
  dossiers: DossierDIM[] = MOCK_DIM;
  filteredDossiers: DossierDIM[] = [];
  pageIndex = 1;
  pageSize = 10;

  statutOptions = ['En cours', 'Complet', 'Incomplet', 'En retard', 'Suspendu'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.filterForm = this.fb.group({
      search: [''],
      statut: [null],
      agent: [null],
      dateRange: [null],
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

  viewDetail(id: string): void {
    this.router.navigate(['/dim/dossiers', id]);
  }

  viewApurement(id: string): void {
    this.router.navigate(['/dim/apurement', id]);
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

  formatMontant(montant: number): string {
    return new Intl.NumberFormat('fr-FR').format(montant) + ' FCFA';
  }
}
