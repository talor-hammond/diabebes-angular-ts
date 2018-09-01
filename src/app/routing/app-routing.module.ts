import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Components
import { FooterComponent } from '../components/footer/footer.component'
import { HeaderComponent } from '../components/header/header.component'
import { HomeComponent } from '../components/home/home.component'
import { ReadingsComponent } from '../components/home/readings/readings.component'
import { ReadingFormComponent } from '../components/home/reading-form/reading-form.component'
import { ReadingsSummaryComponent } from '../components/home/readings/readings-summary/readings-summary.component'

const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // only re-direct if the full path is empty
    { path: 'home', component: HomeComponent } // 'child' routes get appended relative to the parent
]

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
