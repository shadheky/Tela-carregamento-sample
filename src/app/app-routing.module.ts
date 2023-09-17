import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTesteComponent } from './pages/form-teste/form-teste.component';

const routes: Routes = [
  {
    path: "",
    component: FormTesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
