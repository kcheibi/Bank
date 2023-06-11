import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { SingleUserComponent } from './single-user/single-user.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdvancedComponent } from './advanced/advanced.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ListUsersComponent,
    MenuComponent,
    FooterComponent,
    SingleUserComponent,
    CreateUserComponent,
    AdvancedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule,
    Ng2ImgMaxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
