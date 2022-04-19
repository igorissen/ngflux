import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { NgxPokeApiOptions } from './types';
import { NgxPokeApiConfiguration } from './models';

@NgModule({
  imports: [HttpClientModule],
})
export class NgxPokeApiModule {
  constructor(@Optional() @SkipSelf() parentModule: NgxPokeApiModule) {
    if (parentModule) {
      throw new Error(
        'Module NgxPokeApiModule already loaded. Import it in the root module (AppModule) only once.'
      );
    }
  }

  static forRoot(
    options?: NgxPokeApiOptions
  ): ModuleWithProviders<NgxPokeApiModule> {
    return {
      ngModule: NgxPokeApiModule,
      providers: [
        {
          provide: NgxPokeApiConfiguration,
          useValue: new NgxPokeApiConfiguration(options),
        },
      ],
    };
  }
}
