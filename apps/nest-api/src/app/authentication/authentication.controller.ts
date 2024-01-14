import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SamlGuard } from './saml.guard';

@Controller('auth')
export class AuthenticationController {
  @Get('login')
  @UseGuards(AuthGuard('saml'))
  login() {
    return;
  }

  @Post('login/callback')
  @UseGuards(SamlGuard)
  loginCallback() {
    return 'Login Successful';
  }
}
