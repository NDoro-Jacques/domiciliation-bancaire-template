import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NZ_I18N, fr_FR } from 'ng-zorro-antd/i18n';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeOutline, ImportOutline, ExportOutline, SyncOutline, TransactionOutline, MailOutline, BarChartOutline, SettingOutline, BellOutline, LogoutOutline, UserOutline, MenuFoldOutline, MenuUnfoldOutline, FileOutline, CheckCircleOutline, CloseCircleOutline, WarningOutline, InboxOutline, UploadOutline, DownloadOutline, SearchOutline, PlusOutline, EditOutline, DeleteOutline, EyeOutline, ReloadOutline, FilterOutline, ClockCircleOutline, TeamOutline, AuditOutline, AppstoreOutline, DashboardOutline, FundOutline, BankOutline, FileDoneOutline, FileSearchOutline, SendOutline } from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
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
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

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



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NzIconModule.forRoot(icons), NzLayoutModule, NzMenuModule, NzBreadCrumbModule, NzCardModule, NzStatisticModule, NzTableModule, NzFormModule, NzInputModule, NzButtonModule, NzSelectModule, NzDatePickerModule, NzTagModule, NzBadgeModule, NzAlertModule, NzProgressModule, NzStepsModule, NzUploadModule, NzResultModule, NzTabsModule, NzDescriptionsModule, NzTimelineModule, NzModalModule, NzDrawerModule, NzRadioModule, NzCheckboxModule, NzInputNumberModule, NzAutocompleteModule, NzAvatarModule, NzDropDownModule, NzDividerModule, NzSpaceModule, NzPopconfirmModule, NzTooltipModule, NzSwitchModule, NzListModule, NzEmptyModule, NzSpinModule),
        { provide: NZ_I18N, useValue: fr_FR }
    ]
})
  .catch(err => console.error(err));
