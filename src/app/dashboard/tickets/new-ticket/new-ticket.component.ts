import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class NewTicketComponent {

  @ViewChild('form') form? : ElementRef<HTMLFormElement>;


  onSubmit(titleInput: string, requestInput: string) {
    //console.log(titleInput);
    //console.dir(titleInput);
    console.log('TITLE:' + titleInput+" //// REQUEST:"+ requestInput);
    this.form?.nativeElement.reset();
    
  }
}