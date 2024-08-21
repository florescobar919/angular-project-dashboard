import { afterNextRender, afterRender, Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit  {

  //currentStatus : 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'> ('online');

  private destroyRef = inject(DestroyRef);

  constructor () {
    console.log("this.currentstatus",this.currentStatus());

    //execute one time when all dom is completed.
    afterRender(()=>{
      console.log("this.currentstatus ngAfterRender",this.currentStatus());
    });

    //listen continuilsy and execute some
    afterNextRender(()=> {
      console.log("this.currentstatus ngAfterNextRender",this.currentStatus());
    });
    
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }     
    }, 5000);

    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    });

  }

  
  
}
