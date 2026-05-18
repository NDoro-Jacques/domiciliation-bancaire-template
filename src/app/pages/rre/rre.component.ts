import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MOCK_RAPATRIEMENTS, Rapatriement } from '../../mock-data/mock-data';
import { NzTabsComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzSelectComponent, NzOptionComponent } from 'ng-zorro-antd/select';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzDescriptionsComponent, NzDescriptionsItemComponent } from 'ng-zorro-antd/descriptions';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { DecimalPipe, DatePipe } from '@angular/common';
import { NzTagComponent } from 'ng-zorro-antd/tag';

@Component({
    selector: 'app-rre',
    templateUrl: './rre.component.html',
    styleUrls: ['./rre.component.less'],
    imports: [
    NzTabsComponent,
    NzTabComponent,
    NzCardComponent,
    FormsModule,
    NzFormDirective,
    ReactiveFormsModule,
    NzRowDirective,
    NzFormItemComponent,
    NzColDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzSpaceCompactItemDirective,
    NzInputDirective,
    NzInputNumberComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzDatePickerComponent,
    NzAlertComponent,
    NzDescriptionsComponent,
    NzDescriptionsItemComponent,
    NzButtonComponent,
    NzWaveDirective,
    ɵNzTransitionPatchDirective,
    NzIconDirective,
    NzTableComponent,
    NzTheadComponent,
    NzTrDirective,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTbodyComponent,
    NzTagComponent,
    DecimalPipe,
    DatePipe,
  ]
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
