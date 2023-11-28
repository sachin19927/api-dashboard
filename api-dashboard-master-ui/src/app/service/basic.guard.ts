import { CanActivateFn } from '@angular/router';

export const BasicGuard: CanActivateFn = (route, state) => {
  return true;
};
