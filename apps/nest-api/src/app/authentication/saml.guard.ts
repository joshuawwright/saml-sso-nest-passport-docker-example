import { CanActivate, ExecutionContext, Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SamlGuard extends AuthGuard('saml') implements CanActivate {
  constructor(@Inject(Logger) private logger: LoggerService) {
    super();
  }

  override async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();

    this.logger.log(request.user);

    return result;
  }
}
