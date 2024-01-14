import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyWithoutRequest } from '@node-saml/passport-saml';
import { readFileSync } from 'fs';

@Injectable()
export class SamlStrategyService extends PassportStrategy(Strategy, 'saml') {
  constructor() {
    super({
        callbackUrl: 'http://localhost:4300/api/auth/login/callback',
        entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
        issuer: 'saml-poc',
        decryptionPvk: readFileSync(`./certs/key.pem`, 'utf8'),
        privateKey: readFileSync(`./certs/key.pem`, 'utf8'),
        cert: readFileSync(`./certs/idp.pem`, 'utf8')
      },
      ((profile, done) => done(null, profile)) as VerifyWithoutRequest,
      ((profile, done) => done(null, profile)) as VerifyWithoutRequest);
  }
}
