import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListClientsComponent } from './views/home/list-clients/list-clients.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/service/user.service';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddClientComponent } from './views/home/modal-add-client/modal-add-client.component';
import { FormsModule } from '@angular/forms';
import { ModalDeleteClientComponent } from './views/home/modal-delete-client/modal-delete-client.component';
import { ModalWithdrawClientComponent } from './views/home/modal-withdraw-client/modal-withdraw-client.component';
import { ModalDepositClientComponent } from './views/home/modal-deposit-client/modal-deposit-client.component';
import { ModalBalanceClientComponent } from './views/home/modal-balance-client/modal-balance-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListClientsComponent,
    ModalAddClientComponent,
    ModalDeleteClientComponent,
    ModalWithdrawClientComponent,
    ModalDepositClientComponent,
    ModalBalanceClientComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    NgbModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
