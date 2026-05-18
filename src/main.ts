import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

import { NZ_I18N, fr_FR } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
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

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

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

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(NzIconModule.forRoot(icons)),
    { provide: NZ_I18N, useValue: fr_FR },
  ]
}).catch(err => console.error(err));
