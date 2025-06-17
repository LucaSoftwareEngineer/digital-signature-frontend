import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { FirmaDocumento } from './pages/firma-documento/firma-documento';
import { Documenti } from './pages/documenti/documenti';
import { FirmaDocumentoSuccess } from './pages/firma-documento-success/firma-documento-success';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'firma/documento',component:FirmaDocumento},
    {path:'documenti',component:Documenti},
    {path:'firma/documento/success', component:FirmaDocumentoSuccess}
];
