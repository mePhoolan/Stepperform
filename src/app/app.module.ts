import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */