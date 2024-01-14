import { Logger, Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { SerializationService } from './serialization.service';
import { SamlStrategyService } from './saml-strategy.service';

@Module({
  controllers: [AuthenticationController],
  providers: [
    SerializationService,
    SamlStrategyService,
    {
      provide: Logger,
      useValue: new Logger(AuthenticationModule.name, { timestamp: true })
    }
  ]
})
export class AuthenticationModule {
}
