import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadFile, NzUploadComponent } from 'ng-zorro-antd/upload';
import { MOCK_INTEGRATIONS, IntegrationGUCE } from '../../../mock-data/mock-data';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzStepsComponent, NzStepComponent } from 'ng-zorro-antd/steps';
import { NgIf, NgFor, DatePipe } from '@angular/common';
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
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzResultComponent, NzResultExtraDirective } from 'ng-zorro-antd/result';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dim-integration',
    templateUrl: './dim-integration.component.html',
    styleUrls: ['./dim-integration.component.less'],
    imports: [NzCardComponent, NzStepsComponent, NzStepComponent, NgIf, FormsModule, NzFormDirective, ReactiveFormsModule, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormLabelComponent, NzFormControlComponent, NzSpaceCompactItemDirective, NzSelectComponent, NzOptionComponent, NzDatePickerComponent, NzUploadComponent, NzIconDirective, ɵNzTransitionPatchDirective, NzButtonComponent, NzWaveDirective, NzStatisticComponent, NzAlertComponent, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgFor, NzTagComponent, NzResultComponent, NzResultExtraDirective, RouterLink, DatePipe]
})
export class DimIntegrationComponent {
  currentStep = 0;
  form: FormGroup;
  fileList: NzUploadFile[] = [];
  integrations: IntegrationGUCE[] = MOCK_INTEGRATIONS;
  uploadDone = false;

  errorsData = [
    { ligne: 12, refGUCE: 'GUCE-2024-0034', erreur: 'Montant invalide', type: 'Critique' },
    { ligne: 23, refGUCE: 'GUCE-2024-0047', erreur: 'Date d\'échéance manquante', type: 'Avertissement' },
    { ligne: 45, refGUCE: 'GUCE-2024-0078', erreur: 'Doublon détecté', type: 'Info' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      typeFichier: ['FDI', Validators.required],
      dateFichier: [null, Validators.required],
    });
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = [file];
    return false;
  };

  goNext(): void {
    if (this.currentStep < 2) this.currentStep++;
  }

  goPrev(): void {
    if (this.currentStep > 0) this.currentStep--;
  }

  reset(): void {
    this.currentStep = 0;
    this.fileList = [];
    this.form.reset({ typeFichier: 'FDI' });
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'Succès': return 'green';
      case 'Partiel': return 'orange';
      case 'Erreur': return 'red';
      default: return 'default';
    }
  }
}
