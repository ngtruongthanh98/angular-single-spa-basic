import { singleSpaAngular } from 'single-spa-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerApplication, start } from 'single-spa';
import { NgZone } from '@angular/core';

import { AppModule } from './app/app.module';

const app = singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule),
  template: '<app-root></app-root>',
  NgZone,
});

registerApplication({
  name: 'angular-app',
  app,
  activeWhen: ['/'],
});

start();
