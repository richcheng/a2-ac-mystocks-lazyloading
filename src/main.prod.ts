import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  .then(success => console.log(`main.prod.ts bootstrapModuleFactory success`))
  .catch(error => console.log(error));;