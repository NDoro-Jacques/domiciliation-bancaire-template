import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.less']
})
export class AdministrationComponent {
  selectedTabIndex = 0;

  users = [
    { id: 'U001', nom: 'Kouamé Jean-Baptiste', email: 'jb.kouame@banque.ci', role: 'Administrateur', statut: 'Actif', derniereConnexion: new Date('2024-04-15') },
    { id: 'U002', nom: 'Diallo Amadou', email: 'a.diallo@banque.ci', role: 'Agent DIM', statut: 'Actif', derniereConnexion: new Date('2024-04-15') },
    { id: 'U003', nom: 'Koné Fatoumata', email: 'f.kone@banque.ci', role: 'Agent DEX', statut: 'Actif', derniereConnexion: new Date('2024-04-14') },
    { id: 'U004', nom: 'Yao Bernadette', email: 'b.yao@banque.ci', role: 'Agent DIM', statut: 'Actif', derniereConnexion: new Date('2024-04-13') },
    { id: 'U005', nom: 'Ouattara Moussa', email: 'm.ouattara@banque.ci', role: 'Agent DIM', statut: 'Inactif', derniereConnexion: new Date('2024-04-01') },
  ];

  roles = [
    { id: 'R001', nom: 'Administrateur', description: 'Accès complet à toutes les fonctionnalités', utilisateurs: 1 },
    { id: 'R002', nom: 'Agent DIM', description: 'Gestion des dossiers d\'importation', utilisateurs: 3 },
    { id: 'R003', nom: 'Agent DEX', description: 'Gestion des dossiers d\'exportation', utilisateurs: 1 },
    { id: 'R004', nom: 'Superviseur', description: 'Validation et supervision des dossiers', utilisateurs: 0 },
    { id: 'R005', nom: 'Lecteur', description: 'Consultation uniquement', utilisateurs: 0 },
  ];

  auditLogs = [
    { date: new Date('2024-04-15 09:23'), utilisateur: 'Kouamé Jean-Baptiste', action: 'Connexion', module: 'Authentification', details: 'Connexion réussie' },
    { date: new Date('2024-04-15 09:35'), utilisateur: 'Diallo Amadou', action: 'Modification', module: 'DIM', details: 'Mise à jour dossier DOM-2024-0001' },
    { date: new Date('2024-04-15 10:12'), utilisateur: 'Koné Fatoumata', action: 'Création', module: 'DEX', details: 'Nouveau dossier EXP-2024-0010' },
    { date: new Date('2024-04-15 11:05'), utilisateur: 'Yao Bernadette', action: 'Apurement', module: 'DIM', details: 'Apurement dossier DOM-2024-0002' },
    { date: new Date('2024-04-15 14:30'), utilisateur: 'Kouamé Jean-Baptiste', action: 'Suppression', module: 'Administration', details: 'Désactivation utilisateur U005' },
  ];

  delaisForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.delaisForm = this.fb.group({
      delaiRelance1DIM: [30, [Validators.required, Validators.min(1)]],
      delaiRelance2DIM: [45, [Validators.required, Validators.min(1)]],
      delaiRelance1DEX: [60, [Validators.required, Validators.min(1)]],
      delaiRelance2DEX: [90, [Validators.required, Validators.min(1)]],
      delaiRelance1RRE: [90, [Validators.required, Validators.min(1)]],
      delaiApurementDIM: [180, [Validators.required, Validators.min(1)]],
      delaiApurementDEX: [360, [Validators.required, Validators.min(1)]],
    });
  }

  getUserStatutColor(statut: string): string {
    return statut === 'Actif' ? 'green' : 'default';
  }

  getActionColor(action: string): string {
    switch (action) {
      case 'Connexion': return 'blue';
      case 'Création': return 'green';
      case 'Modification': return 'orange';
      case 'Suppression': return 'red';
      case 'Apurement': return 'purple';
      default: return 'default';
    }
  }
}
