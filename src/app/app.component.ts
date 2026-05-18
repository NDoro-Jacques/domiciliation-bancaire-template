import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NzLayoutComponent, NzSiderComponent, NzHeaderComponent, NzContentComponent } from 'ng-zorro-antd/layout';

import { NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent } from 'ng-zorro-antd/menu';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpaceCompactItemDirective } from 'ng-zorro-antd/space';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';

interface MenuItem {
  key: string;
  title: string;
  icon: string;
  link?: string;
  children?: MenuItem[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [
    NzLayoutComponent,
    NzSiderComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    ɵNzTransitionPatchDirective,
    RouterLink,
    NzIconDirective,
    NzSubMenuComponent,
    NzHeaderComponent,
    NzSpaceCompactItemDirective,
    NzButtonComponent,
    NzBadgeComponent,
    NzDividerComponent,
    NzAvatarComponent,
    NzContentComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    RouterOutlet,
  ]
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  currentPageTitle = 'Tableau de bord';
  openKeys: string[] = ['dim-menu'];

  menuItems: MenuItem[] = [
    { key: 'dashboard', title: 'Tableau de bord', icon: 'dashboard', link: '/dashboard' },
    {
      key: 'dim-menu', title: 'DIM - Importations', icon: 'import',
      children: [
        { key: 'dim-integration', title: 'Intégration GUCE', icon: 'file-search', link: '/dim/integration' },
        { key: 'dim-dossiers', title: 'Dossiers', icon: 'file-done', link: '/dim/dossiers' },
        { key: 'dim-apurement-list', title: 'Apurement', icon: 'audit', link: '/dim/dossiers' },
      ]
    },
    {
      key: 'dex-menu', title: 'DEX - Exportations', icon: 'export',
      children: [
        { key: 'dex-integration', title: 'Intégration GUCE', icon: 'file-search', link: '/dex/integration' },
        { key: 'dex-dossiers', title: 'Dossiers', icon: 'file-done', link: '/dex/dossiers' },
      ]
    },
    { key: 'rre', title: 'RRE - Rapatriement', icon: 'sync', link: '/rre' },
    { key: 'ac', title: 'AC - Autorisations de Change', icon: 'transaction', link: '/ac' },
    { key: 'relances', title: 'Relances', icon: 'mail', link: '/relances' },
    { key: 'reporting', title: 'Reporting', icon: 'bar-chart', link: '/reporting' },
    { key: 'administration', title: 'Administration', icon: 'setting', link: '/administration' },
  ];

  breadcrumbs: { label: string; link?: string }[] = [];

  private pageTitles: Record<string, string> = {
    '/dashboard': 'Tableau de bord',
    '/dim/integration': 'DIM - Intégration GUCE',
    '/dim/dossiers': 'DIM - Dossiers',
    '/dex/integration': 'DEX - Intégration GUCE',
    '/dex/dossiers': 'DEX - Dossiers',
    '/rre': 'RRE - Rapatriement des Recettes d\'Exportation',
    '/ac': 'AC - Autorisations de Change',
    '/relances': 'Relances',
    '/reporting': 'Reporting',
    '/administration': 'Administration',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((event) => {
      const e = event as NavigationEnd;
      const url = e.urlAfterRedirects.split('?')[0];
      this.currentPageTitle = this.pageTitles[url] || 'Domiciliation Bancaire';
      this.updateBreadcrumbs(url);
    });
  }

  private updateBreadcrumbs(url: string): void {
    this.breadcrumbs = [{ label: 'Accueil', link: '/dashboard' }];
    if (url === '/dashboard') return;

    const parts = url.split('/').filter(Boolean);
    let path = '';
    for (const part of parts) {
      path += '/' + part;
      const title = this.pageTitles[path];
      if (title) this.breadcrumbs.push({ label: title, link: path });
      else this.breadcrumbs.push({ label: part });
    }
  }

  navigate(link: string): void {
    this.router.navigate([link]);
  }

  logout(): void {
    // placeholder
  }
}
