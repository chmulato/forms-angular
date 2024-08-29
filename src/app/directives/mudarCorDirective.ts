import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mudandoCor]'
})
export class MudarCorDirective {
  // @Input() mudandoCor: any;
  constructor(
      private eleRef: ElementRef
  ) {}
  @HostListener('mouseover') onMouseOver() {
      this.eleRef.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.eleRef.nativeElement.style.color = 'var(--laranja)';
  }
}
