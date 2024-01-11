import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ServerComponent } from './server/server.component';
import { CokpitComponent } from './cokpit/cokpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { TestBindComponent } from './test-bind/test-bind.component';
import { ParentComponent } from './lifeCycle/parent/parent.component';
import { ChildComponent } from './lifeCycle/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ServerComponent,
    CokpitComponent,
    ServerElementComponent,
    TestBindComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
