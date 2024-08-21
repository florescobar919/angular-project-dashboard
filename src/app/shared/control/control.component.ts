import { Component, ContentChild, contentChild, ElementRef, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();

  private el = inject(ElementRef);

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; //1

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); //2

  /*@HostListener('click') onClick() {
    console.log("clicked!");    
  }*/

  onClick() {
    console.log("clicked!");
    console.log(this.el);
    //console.log(this.control); //1
    console.log(this.control()); //2 because it's a signal 
  }
}