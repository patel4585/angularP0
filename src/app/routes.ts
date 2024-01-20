import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
];

export default routeConfig;

@NgModule({
    imports: [RouterModule.forRoot(routeConfig, { useHash: true })],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}