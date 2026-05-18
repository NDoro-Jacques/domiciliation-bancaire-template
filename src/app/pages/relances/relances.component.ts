import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzFormDirective, NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzSelectComponent, NzOptionComponent } from 'ng-zorro-antd/select';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NgFor, DatePipe } from '@angular/common';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

@Component({
    selector: 'app-relances',
    templateUrl: './relances.component.html',
    styleUrls: ['./relances.component.less'],
    imports: [NzTabsComponent, NzTabComponent, FormsModule, NzFormDirective, ReactiveFormsModule, NzRowDirective, NzFormItemComponent, NzSpaceCompactItemDirective, NzSelectComponent, NzOptionComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzIconDirective, NzCardComponent, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzCheckboxComponent, NzTbodyComponent, NgFor, NzTagComponent, NzTooltipDirective, NzAlertComponent, DatePipe]
})
export class RelancesComponent {
  selectedTabIndex = 0;
  filterForm: FormGroup;

  relancesEnAttente = [
    { id: 'R001', numeroDossier: 'DOM-2024-0004', client: 'ABIDJAN NÉGOCE', type: 'DIM', motif: 'Documents manquants', urgence: 'Haute', echeance: new Date('2024-04-20'), checked: false },
    { id: 'R002', numeroDossier: 'DOM-2024-0009', client: 'ABISSA COMMERCE', type: 'DIM', motif: 'Échéance dépassée', urgence: 'Critique', echeance: new Date('2024-04-15'), checked: false },
    { id: 'R003', numeroDossier: 'EXP-2024-0004', client: 'BOIS TROPICAUX CI', type: 'DEX', motif: 'Rapatriement en retard', urgence: 'Haute', echeance: new Date('2024-04-22'), checked: false },
    { id: 'R004', numeroDossier: 'DOM-2024-0003', client: 'IVOIRE IMPORT', type: 'DIM', motif: 'Dossier incomplet', urgence: 'Moyenne', echeance: new Date('2024-04-30'), checked: false },
    { id: 'R005', numeroDossier: 'DOM-2024-0006', client: 'EXPORT IVOIRE SARL', type: 'DIM', motif: 'Dossier suspendu', urgence: 'Basse', echeance: new Date('2024-05-10'), checked: false },
  ];

  historique = [
    { date: new Date('2024-04-10'), dossier: 'DOM-2024-0004', client: 'ABIDJAN NÉGOCE', agent: 'Ouattara Moussa', mode: 'Email', reponse: false },
    { date: new Date('2024-04-08'), dossier: 'DOM-2024-0009', client: 'ABISSA COMMERCE', agent: 'Gnangoran Paul', mode: 'Téléphone', reponse: true },
    { date: new Date('2024-04-05'), dossier: 'EXP-2024-0004', client: 'BOIS TROPICAUX CI', agent: 'Ouattara Moussa', mode: 'Email', reponse: false },
  ];

  getUrgenceColor(urgence: string): string {
    switch (urgence) {
      case 'Critique': return 'red';
      case 'Haute': return 'orange';
      case 'Moyenne': return 'blue';
      case 'Basse': return 'default';
      default: return 'default';
    }
  }

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({ urgence: [null], type: [null] });
  }
}
