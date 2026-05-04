import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MOCK_INTEGRATIONS, IntegrationGUCE } from '../../../mock-data/mock-data';

@Component({
  standalone: false,
  selector: 'app-dim-integration',
  templateUrl: './dim-integration.component.html',
  styleUrls: ['./dim-integration.component.less']
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
