import { USER_STATUS_NOT_AUTH, USER_STATUS_NO_PASSWORD } from 'core';


type Context = {
  userStatus: string | null;
}

export const guardNotAuth = (route: any, { userStatus }: Context): any | undefined => {
  if (userStatus === null) {
    return undefined;
  }
  return (userStatus === USER_STATUS_NOT_AUTH || userStatus === USER_STATUS_NO_PASSWORD) ? route : undefined;
};
