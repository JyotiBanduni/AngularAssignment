import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgThumbnailComponent } from './img-thumbnail/img-thumbnail.component';
import { ImgComponent } from './img/img.component';

const routes: Routes = [
{path:'',component:ImgComponent},
{path:'thumb',component:ImgThumbnailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
