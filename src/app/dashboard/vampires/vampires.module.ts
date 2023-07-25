import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VampiresRoutingModule } from './vampires-routing.module';
import { VampireCharacterSheetComponent } from './vampire-character-sheet/vampire-character-sheet.component';


@NgModule({
  declarations: [
    VampireCharacterSheetComponent
  ],
  imports: [
    CommonModule,
    VampiresRoutingModule
  ]
})
export class VampiresModule { }
