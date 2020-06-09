import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatListModule, MatTabsModule,
        MatSidenavModule, MatFormFieldModule, MatDividerModule, MatInputModule, } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatListModule, MatTabsModule, MatSidenavModule,
    MatDividerModule, MatInputModule ],
  exports: [ MatButtonModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatListModule, MatTabsModule, MatSidenavModule,
  MatDividerModule, MatInputModule ]
})
export class CustomMaterialModule { }
