import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TextReadComponent } from 'ngx-text-animation';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TextReadComponent) textRead?: TextReadComponent;

  ngAfterViewInit() {
    timer(0).subscribe(() => {
      if (this.textRead) {
        this.textRead.start();
      }
    });
  }
}
