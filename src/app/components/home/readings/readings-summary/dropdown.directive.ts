import { 
    Directive, 
    HostListener,
    // HostBinding,
    EventEmitter,
    Output
} from '@angular/core'

@Directive({
    selector: '[summaryDropdown]'
})
export class DropdownDirective {
    // @HostBinding('class.show') isOpen: boolean = false // when this value switches to true, 'show' will be applied to the class attr of the bound host element
    isOpen: boolean = false

    @Output() showSummaryClicked = new EventEmitter<boolean>()

    @HostListener('click') toggleSummary() { // @HostListener decorator listens for a 'click' event on the element the directive is applied to, then fires the attached method
        this.isOpen = !this.isOpen // toggling the bool...

        this.showSummaryClicked.emit(this.isOpen) // and then outputting and emitting that value to be used conditionally
    }
}