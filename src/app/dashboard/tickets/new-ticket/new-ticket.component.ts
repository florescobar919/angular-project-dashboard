import { AfterViewInit,output, Component, ElementRef, viewChild, } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string; text: string}>();

  txtTitle: string = '';
  txtRequest: string = '';

  ngOnInit() {
    console.log("ngOnInit");    
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");    
    console.log(this.form().nativeElement);    
  }

  onSubmit() {
    this.add.emit({title: this.txtTitle, text: this.txtRequest});
    this.txtTitle = '';
    this.txtRequest = '';
  }
}