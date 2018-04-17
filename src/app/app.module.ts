import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { FlowViewComponent } from './flow-view/flow-view.component';
import { OperationsService } from './operations.service';


@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    FlowViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
