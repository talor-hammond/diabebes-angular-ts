import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Default
import { FooterComponent } from '../components/footer/footer.component'
import { HeaderComponent } from '../components/header/header.component'
// Home / readings
import { HomeComponent } from '../components/home/home.component'
import { ReadingsComponent } from '../components/home/readings/readings.component'
import { FullReadingComponent } from '../components/full-reading/full-reading.component'
// About
import { AboutComponent } from '../components/about/about.component'

const AppRoutes: Routes = [
    { path: '', redirectTo: 'home/readings', pathMatch: 'full' }, // only re-direct if the full path is empty
    { path: 'home', component: HomeComponent, children: [ // 'child' routes get appended relative to the parent, like w express.Router()
        // { path: 'readings', component: ReadingsComponent, children: [
        //     { path: 'edit/:index', component: EditReadingComponent }
        // ] },
        { path: 'readings', component: ReadingsComponent },
        { path: 'readings/:index', component: FullReadingComponent }
    ] },
    { path: 'about', component: AboutComponent },
    { path: 'readings/:index', component: FullReadingComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
