import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DimIntegrationComponent } from './pages/dim/integration/dim-integration.component';
import { DimDossiersComponent } from './pages/dim/dossiers/dim-dossiers.component';
import { DimDetailComponent } from './pages/dim/detail/dim-detail.component';
import { DimApurementComponent } from './pages/dim/apurement/dim-apurement.component';
import { DexIntegrationComponent } from './pages/dex/integration/dex-integration.component';
import { DexDossiersComponent } from './pages/dex/dossiers/dex-dossiers.component';
import { RreComponent } from './pages/rre/rre.component';
import { AcComponent } from './pages/ac/ac.component';
import { RelancesComponent } from './pages/relances/relances.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { AdministrationComponent } from './pages/administration/administration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dim/integration', component: DimIntegrationComponent },
  { path: 'dim/dossiers', component: DimDossiersComponent },
  { path: 'dim/dossiers/:id', component: DimDetailComponent },
  { path: 'dim/apurement/:id', component: DimApurementComponent },
  { path: 'dex/integration', component: DexIntegrationComponent },
  { path: 'dex/dossiers', component: DexDossiersComponent },
  { path: 'rre', component: RreComponent },
  { path: 'ac', component: AcComponent },
  { path: 'relances', component: RelancesComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'administration', component: AdministrationComponent },
];
