# Domiciliation Bancaire - Template

Prototype d'interface pour la gestion des domiciliations bancaires (banque en Côte d'Ivoire).

## Stack technique
- Angular 21 (architecture modulaire)
- ng-zorro-antd 21 (Ant Design pour Angular)
- LESS (couleur primaire #F05023)
- Angular Router
- Interface en français

## Installation

```bash
npm install
ng serve
```

## Build

```bash
ng build
```

## Structure des pages

- **Tableau de bord** : KPIs, alertes, récapitulatif par type de domiciliation
- **DIM - Importations** : Intégration GUCE, liste des dossiers, détail, apurement
- **DEX - Exportations** : Intégration GUCE, liste des dossiers
- **RRE - Rapatriement** : Nouveau rapatriement, suivi, tickets Salle de Marché
- **AC - Autorisations de Change** : Suivi des AC et transferts
- **Relances** : En attente, historique, paramétrage
- **Reporting** : Tableaux de bord, rapports BCEAO/FINEX, exports
- **Administration** : Utilisateurs, rôles, délais, journaux d'audit

## Notes
- Données de démonstration incluses dans `src/app/mock-data/mock-data.ts`
- Budget initial dépassé (1.98 MB) — normal pour un prototype avec toutes les bibliothèques UI chargées