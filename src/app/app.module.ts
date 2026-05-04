import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { NZ_I18N, fr_FR } from 'ng-zorro-antd/i18n';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import {
  HomeOutline, ImportOutline, ExportOutline, SyncOutline,
  TransactionOutline, MailOutline, BarChartOutline, SettingOutline,
  BellOutline, LogoutOutline, UserOutline, MenuFoldOutline,
  MenuUnfoldOutline, FileOutline, CheckCircleOutline, CloseCircleOutline,
  WarningOutline, InboxOutline, UploadOutline, DownloadOutline,
  SearchOutline, PlusOutline, EditOutline, DeleteOutline, EyeOutline,
  ReloadOutline, FilterOutline, ClockCircleOutline, TeamOutline,
  AuditOutline, AppstoreOutline, DashboardOutline, FundOutline,
  BankOutline, FileDoneOutline, FileSearchOutline, SendOutline
} from '@ant-design/icons-angular/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

registerLocaleData(fr);

const icons = [
  HomeOutline, ImportOutline, ExportOutline, SyncOutline,
  TransactionOutline, MailOutline, BarChartOutline, SettingOutline,
  BellOutline, LogoutOutline, UserOutline, MenuFoldOutline,
  MenuUnfoldOutline, FileOutline, CheckCircleOutline, CloseCircleOutline,
  WarningOutline, InboxOutline, UploadOutline, DownloadOutline,
  SearchOutline, PlusOutline, EditOutline, DeleteOutline, EyeOutline,
  ReloadOutline, FilterOutline, ClockCircleOutline, TeamOutline,
  AuditOutline, AppstoreOutline, DashboardOutline, FundOutline,
  BankOutline, FileDoneOutline, FileSearchOutline, SendOutline
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DimIntegrationComponent,
    DimDossiersComponent,
    DimDetailComponent,
    DimApurementComponent,
    DexIntegrationComponent,
    DexDossiersComponent,
    RreComponent,
    AcComponent,
    RelancesComponent,
    ReportingComponent,
    AdministrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NzIconModule.forRoot(icons),
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzStatisticModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTagModule,
    NzBadgeModule,
    NzAlertModule,
    NzProgressModule,
    NzStepsModule,
    NzUploadModule,
    NzResultModule,
    NzTabsModule,
    NzDescriptionsModule,
    NzTimelineModule,
    NzModalModule,
    NzDrawerModule,
    NzRadioModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzDropDownModule,
    NzDividerModule,
    NzSpaceModule,
    NzPopconfirmModule,
    NzTooltipModule,
    NzSwitchModule,
    NzListModule,
    NzEmptyModule,
    NzSpinModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
