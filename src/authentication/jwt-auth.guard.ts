import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  handleRequest(err: unknown, user: unknown, info: unknown): unknown {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      console.log(err, user, info);
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
