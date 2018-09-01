import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Default
import { FooterComponent } from '../components/footer/footer.component'
import { HeaderComponent } from '../components/header/header.component'
// Home
import { HomeComponent } from '../components/home/home.component'
// About
import { AboutComponent } from '../components/about/about.component'

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
