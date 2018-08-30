import { Directive, HostListener } from '@angular/core'

@Directive({
    selector: '[summaryDropdown]'
})
export class DropdownDirective {
    isOpen: boolean = false

    @HostListener('click') toggleSummary() { // @HostListener decorator listens for a 'click' event on the element the directive is applied to, then fires the attached method
        this.isOpen = !this.isOpen
    }
}