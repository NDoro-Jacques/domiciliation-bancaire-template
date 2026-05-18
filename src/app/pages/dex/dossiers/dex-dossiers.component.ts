import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MOCK_DEX, DossierDEX } from '../../../mock-data/mock-data';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzFormDirective, NzFormItemComponent, NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzInputDirective } from 'ng-zorro-antd/input';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSelectComponent, NzOptionComponent } from 'ng-zorro-antd/select';
import { NgFor, SlicePipe, DatePipe } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzCellFixedDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
    selector: 'app-dex-dossiers',
    templateUrl: './dex-dossiers.component.html',
    styleUrls: ['./dex-dossiers.component.less'],
    imports: [NzCardComponent, FormsModule, NzFormDirective, ReactiveFormsModule, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormControlComponent, NzSpaceCompactItemDirective, NzInputGroupComponent, ɵNzTransitionPatchDirective, NzInputGroupWhitSuffixOrPrefixDirective, NzInputDirective, NzIconDirective, NzSelectComponent, NgFor, NzOptionComponent, NzButtonComponent, NzWaveDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzCellFixedDirective, NzTbodyComponent, NzTagComponent, NzTooltipDirective, SlicePipe, DatePipe]
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
