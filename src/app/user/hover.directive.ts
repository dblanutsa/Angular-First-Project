import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[userHover]'
})
export class HoverDirective {

    @HostBinding('class.hovered') isHovered = false;
    
    @HostListener('mouseenter') onMouseenter(){
        this.isHovered = true;
    }

    @HostListener('mouseleave') onMouseleave(){
        this.isHovered = false;
    }

}