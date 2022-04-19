import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { PokeApiOptions } from './types';
import { PokeApiConfiguration } from './models/poke-api-configuration';

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
    options?: PokeApiOptions
  ): ModuleWithProviders<NgxPokeApiModule> {
    return {
      ngModule: NgxPokeApiModule,
      providers: [
        {
          provide: PokeApiConfiguration,
          useValue: new PokeApiConfiguration(options),
        },
      ],
    };
  }
}
