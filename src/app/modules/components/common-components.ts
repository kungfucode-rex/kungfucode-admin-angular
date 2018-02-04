import { NgModule } from '@angular/core';

import { HeaderComponent } from '../../components/commons/header/header.component';
import { ContentComponent } from '../../components/commons/content/content.component';
import { SideBarComponent } from '../../components/commons/side-bar/side-bar.component';
import { WorkAreaComponent } from '../../components/commons/work-area/work-area.component';
import { FooterComponent } from '../../components/commons/footer/footer.component';
import { BreadcrumbComponent } from '../../components/commons/breadcrumb/breadcrumb.component';
import { PageComponent } from '../../components/commons/page/page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    WorkAreaComponent,
    BreadcrumbComponent,
    PageComponent,
    FooterComponent
  ]
})
export class CommonComponents {}
