import { NgModule } from '@angular/core';//
import { CommonModule } from '@angular/common';
import{MatToolbarModule} from  '@angular/material/toolbar';//componente barra de navegacion
import{MatIconModule}from '@angular/material/icon';//componente mat-icon , iconos de material
import{MatButtonModule}from '@angular/material/button';//componente button mat-button
import{MatFormFieldModule}from '@angular/material/form-field';//componente bloque de formulario(label, inoput, error)
import{MatInputModule}from '@angular/material/input';//mat input
import{MatSelectModule} from '@angular/material/select';//componente selector html <mat-select>
import{MatCheckboxModule} from '@angular/material/checkbox';//componenet checkBox de material
import{MatDatepickerModule} from '@angular/material/datepicker';//componenet checkBox de material
import{MatNativeDateModule} from '@angular/material/core';//componenet permite trabajar con fehcas
import{MatTabsModule} from '@angular/material/tabs';//componenet permite trabajar con fehcas
import{MarkdownModule} from 'ngx-markdown';//componenet permite trabajar con fehcas

@NgModule({
  declarations: [],
  exports:[
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MarkdownModule,
  ],
  imports: [
    CommonModule

  ]
})
export class MaterialModule { }
