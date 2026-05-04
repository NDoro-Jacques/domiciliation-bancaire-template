import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MOCK_INTEGRATIONS, IntegrationGUCE } from '../../../mock-data/mock-data';

@Component({
  standalone: false,
  selector: 'app-dex-integration',
  templateUrl: './dex-integration.component.html',
  styleUrls: ['./dex-integration.component.less']
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
