import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          {{ description }}
        </ion-card-header>
      </ion-card>

      <ion-card>
      <ion-card-header>
        {{ icsData}}
      </ion-card-header>
    </ion-card>
    </ion-content>


  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  title = 'ChronoDreamer v1.0.0';
  description = 'A simple Ionic app that subscribes to an .ics calendar link, fetches the file in the background every 6 hours, and sends push notifications for each calendar entry.';

  icsData = 'current .ics data';
}
