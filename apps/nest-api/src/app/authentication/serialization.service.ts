import { Injectable } from '@nestjs/common';
import passport from 'passport';

@Injectable()
export class SerializationService {
  constructor() {
    passport.serializeUser((user: never, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));
  }
}
