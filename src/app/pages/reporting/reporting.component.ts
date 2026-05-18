import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzStatisticComponent } from 'ng-zorro-antd/statistic';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { DatePipe } from '@angular/common';
import { NzProgressComponent } from 'ng-zorro-antd/progress';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzRadioGroupComponent, NzRadioComponent } from 'ng-zorro-antd/radio';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-reporting',
    templateUrl: './reporting.component.html',
    styleUrls: ['./reporting.component.less'],
    imports: [
    NzTabsComponent,
    NzTabComponent,
    NzCardComponent,
    NzStatisticComponent,
    NzTableComponent,
    NzTheadComponent,
    NzTrDirective,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTbodyComponent,
    NzProgressComponent,
    NzTagComponent,
    FormsModule,
    NzFormDirective,
    ReactiveFormsModule,
    NzRowDirective,
    NzFormItemComponent,
    NzColDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzSpaceCompactItemDirective,
    NzDatePickerComponent,
    NzRadioGroupComponent,
    NzRadioComponent,
    NzButtonComponent,
    NzWaveDirective,
    ɵNzTransitionPatchDirective,
    NzIconDirective,
    DatePipe,
  ]
})
export class ReportingComponent {
  selectedTabIndex = 0;

  agentPerf = [
    { agent: 'Diallo Amadou', traites: 35, apures: 28, enRetard: 3, tauxApurement: 80 },
    { agent: 'Koné Fatoumata', traites: 29, apures: 22, enRetard: 1, tauxApurement: 76 },
    { agent: 'Yao Bernadette', traites: 24, apures: 18, enRetard: 2, tauxApurement: 75 },
    { agent: 'Ouattara Moussa', traites: 32, apures: 20, enRetard: 4, tauxApurement: 63 },
    { agent: 'Traoré Ibrahim', traites: 22, apures: 15, enRetard: 1, tauxApurement: 68 },
  ];

  monthlyEvolution = [
    { mois: 'Novembre 2023', dimOuverts: 18, dexOuverts: 12, apures: 20, relances: 5 },
    { mois: 'Décembre 2023', dimOuverts: 22, dexOuverts: 14, apures: 25, relances: 7 },
    { mois: 'Janvier 2024', dimOuverts: 28, dexOuverts: 18, apures: 30, relances: 8 },
    { mois: 'Février 2024', dimOuverts: 25, dexOuverts: 16, apures: 28, relances: 6 },
    { mois: 'Mars 2024', dimOuverts: 31, dexOuverts: 20, apures: 35, relances: 9 },
  ];

  bceaoHistory = [
    { date: new Date('2024-04-01'), periode: 'Mars 2024', type: 'Mensuel', statut: 'Envoyé', agent: 'Diallo Amadou' },
    { date: new Date('2024-03-01'), periode: 'Février 2024', type: 'Mensuel', statut: 'Envoyé', agent: 'Diallo Amadou' },
    { date: new Date('2024-01-15'), periode: 'T4 2023', type: 'Trimestriel', statut: 'Envoyé', agent: 'Koné Fatoumata' },
  ];

  bceaoForm: FormGroup;
  finexForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bceaoForm = this.fb.group({
      periode: [null, Validators.required],
      typeRapport: ['mensuel', Validators.required],
    });
    this.finexForm = this.fb.group({
      periode: [null, Validators.required],
      typeRapport: ['mensuel', Validators.required],
    });
  }
}
