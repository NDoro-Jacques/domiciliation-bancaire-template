import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadFile, NzUploadComponent } from 'ng-zorro-antd/upload';
import { MOCK_INTEGRATIONS, IntegrationGUCE } from '../../../mock-data/mock-data';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzStepsComponent, NzStepComponent } from 'ng-zorro-antd/steps';
import { DatePipe } from '@angular/common';
import { NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzSelectComponent, NzOptionComponent } from 'ng-zorro-antd/select';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NzStatisticComponent } from 'ng-zorro-antd/statistic';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzResultComponent, NzResultExtraDirective } from 'ng-zorro-antd/result';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dex-integration',
    templateUrl: './dex-integration.component.html',
    styleUrls: ['./dex-integration.component.less'],
    imports: [
    NzCardComponent,
    NzStepsComponent,
    NzStepComponent,
    FormsModule,
    NzFormDirective,
    ReactiveFormsModule,
    NzRowDirective,
    NzFormItemComponent,
    NzColDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzSpaceCompactItemDirective,
    NzSelectComponent,
    NzOptionComponent,
    NzDatePickerComponent,
    NzUploadComponent,
    NzIconDirective,
    ɵNzTransitionPatchDirective,
    NzButtonComponent,
    NzWaveDirective,
    NzStatisticComponent,
    NzTableComponent,
    NzTheadComponent,
    NzTrDirective,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTbodyComponent,
    NzTagComponent,
    NzResultComponent,
    NzResultExtraDirective,
    RouterLink,
    DatePipe,
  ]
})
export class DexIntegrationComponent {
  currentStep = 0;
  form: FormGroup;
  fileList: NzUploadFile[] = [];
  integrations: IntegrationGUCE[] = MOCK_INTEGRATIONS;

  errorsData = [
    { ligne: 5, refGUCE: 'GUCE-2024-DEX-0012', erreur: 'Devise inconnue', type: 'Critique' },
    { ligne: 19, refGUCE: 'GUCE-2024-DEX-0031', erreur: 'Acheteur non identifié', type: 'Avertissement' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      typeFichier: ['FDE', Validators.required],
      dateFichier: [null, Validators.required],
    });
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = [file];
    return false;
  };

  goNext(): void { if (this.currentStep < 2) this.currentStep++; }
  goPrev(): void { if (this.currentStep > 0) this.currentStep--; }
  reset(): void { this.currentStep = 0; this.fileList = []; this.form.reset({ typeFichier: 'FDE' }); }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'Succès': return 'green';
      case 'Partiel': return 'orange';
      case 'Erreur': return 'red';
      default: return 'default';
    }
  }
}
