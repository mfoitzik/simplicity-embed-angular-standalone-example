import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SimplicityEmbed } from '@simplicitywebtools/simplicity-embed-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SimplicityEmbed],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'angular-standalone';
  setHeading = "Rate Me!";
  seSetup = "http://localhost:5500/config.json";
  private sembed: SimplicityEmbed | null = null;
  //constructor(private elementRef: ElementRef) {
    //this.sembed = this.elementRef.nativeElement.querySelector("#simplicity") as SimplicityEmbed;
    //this.sembed = document.getElementById("simplicity") as any;
  //}
  openSimplicityEmbed() {
    this.sembed?.open();
  }
  closeSimplicityEmbed() {
    this.sembed?.close();
  }
  sendCommand() {
    const sendObj = {
      "action": "spin"
    }
    this.sembed?.sendMessage(sendObj);
  }
  changeConfig() {
    this.seSetup = "http://localhost:5500/config2.json";
  }
  handleNotify(event: Event) {
    const customEvent = event as CustomEvent<any>;
    console.log("I received a notify event");
    console.log(customEvent.detail);
  }
  ngOnInit() {
    this.sembed = document.getElementById("simplicity") as any;
  }

}
