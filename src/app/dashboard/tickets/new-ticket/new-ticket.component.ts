import { AfterViewInit, Component, ElementRef, viewChild, ViewChild, viewChildren } from '@angular/core';
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

  //@ViewChild('form') form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleInput: string, requestInput: string) {
    //console.log(titleInput);
    //console.dir(titleInput);
    console.log('TITLE:' + titleInput+" //// REQUEST:"+ requestInput);
    this.form().nativeElement.reset();
    //this.form?.nativeElement.reset();
  }

  ngOnInit() {
    console.log("ngOnInit");    
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");    
    console.log(this.form().nativeElement);
    
  }
}