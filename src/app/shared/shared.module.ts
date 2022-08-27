import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule];
const declarations = [];

@NgModule({
  imports: modules,
  declarations: declarations,
  exports: [...modules, ...declarations]
})
export class SharedModule {}
